import { ChakraProvider } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { system } from "@/theme"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider
        defaultTheme="light"
        enableSystem={true}
        storageKey="theme"
      >
        {props.children}
      </ColorModeProvider>
    </ChakraProvider>
  )
}
