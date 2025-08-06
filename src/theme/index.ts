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
        myAppGlobalBorderColor: {
          value: {
            _light: "#e9e8e6",
            _dark: "#2a2a28",
          },
        },
        myAppBorderGradientTop: { // --chakra-colors-my-app-border-gradient-top
          value: {
            _light: "linear-gradient(#e9e8e6, #fafaf9)",
            _dark: "linear-gradient(#2a2a28, #191918)",
          },
        },
        myAppBorderGradientBottom: { // --chakra-colors-my-app-border-gradient-bottom
          value: {
            _light: "linear-gradient(#fafaf9, #e9e8e6)",
            _dark: "linear-gradient(#191918, #2a2a28)",
          },
        }
      },
    }
  },
})

export const system = createSystem(defaultConfig, config)