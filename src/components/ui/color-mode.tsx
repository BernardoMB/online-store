import type { IconButtonProps, SpanProps } from "@chakra-ui/react"
import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react"
import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"

// Custom theme provider compatible with Vite SSR - no hydration issues!

const STORAGE_KEY = 'theme'
const LIGHT = 'light'
const DARK = 'dark'

export type ColorMode = typeof LIGHT | typeof DARK

interface ThemeContextValue {
  colorMode: ColorMode
  setColorMode: (mode: ColorMode) => void
  toggleColorMode: () => void
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined)

export interface ColorModeProviderProps {
  children: React.ReactNode
  defaultTheme?: ColorMode
  enableSystem?: boolean
  storageKey?: string
}

export function ColorModeProvider({
  children,
  defaultTheme = LIGHT,
  enableSystem = true,
  storageKey = STORAGE_KEY
}: ColorModeProviderProps) {
  // Always use defaultTheme for initial state (matches SSR)
  // Update from localStorage/system after mount to avoid hydration mismatch
  const [colorMode, setColorModeState] = React.useState<ColorMode>(defaultTheme)
  const [mounted, setMounted] = React.useState(false)

  // Load theme from localStorage after mount
  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as ColorMode | null

    if (stored && (stored === LIGHT || stored === DARK)) {
      setColorModeState(stored)
      updateDOM(stored)
    } else if (enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT
      setColorModeState(systemTheme)
      updateDOM(systemTheme)
    } else {
      updateDOM(defaultTheme)
    }

    setMounted(true)
  }, [defaultTheme, enableSystem, storageKey])

  // Listen for system theme changes
  React.useEffect(() => {
    if (!enableSystem || !mounted) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(storageKey)
      // Only update if user hasn't explicitly set a preference
      if (!stored) {
        const newTheme = e.matches ? DARK : LIGHT
        setColorModeState(newTheme)
        updateDOM(newTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [enableSystem, mounted, storageKey])

  const setColorMode = React.useCallback((mode: ColorMode) => {
    setColorModeState(mode)
    localStorage.setItem(storageKey, mode)
    updateDOM(mode)
  }, [storageKey])

  const toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === DARK ? LIGHT : DARK)
  }, [colorMode, setColorMode])

  const value = React.useMemo(() => ({
    colorMode,
    setColorMode,
    toggleColorMode,
  }), [colorMode, setColorMode, toggleColorMode])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

function updateDOM(theme: ColorMode) {
  const root = document.documentElement
  root.classList.remove(LIGHT, DARK)
  root.classList.add(theme)
  root.style.colorScheme = theme
}

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

/**
 * The useColorMode hook returns the current color mode and a function to toggle the color mode.
 * Calling toggleColorMode or setColorMode anywhere in your app tree toggles the color mode from light or dark and vice versa.
 */
export function useColorMode(): UseColorModeReturn {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeProvider')
  }
  return context
}

/**
 * The useColorModeValue hook returns a value based on the current color mode.
 * The value returned will be the value of the light mode if the color mode is light, and the value of the dark mode if the color mode is dark.
 */
export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> { }

/**
 * Use this button to toggle the color mode.
 * The color mode snippet comes with the ColorModeButton component built-in, you can import it to render an icon button that toggles the color mode.
 * It renders a skeleton on the server side and the icon on the client side.
 */
export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode()
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  )
})

/**
 * Use this component as wrapper to those components that enforce the Light color mode
 */
export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  },
)

/**
 * Use this component as wrapper to those components that enforce the Dark color mode
 */
export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    )
  },
)
