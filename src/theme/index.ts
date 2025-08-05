import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      backgroundColor: 'myAppBackground'
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        myAppBackground: {
          value: {
            _light: "#fafaf9",
            _dark: "#191918",
          },
        },
      },
    }
  },
})

export const system = createSystem(defaultConfig, config)