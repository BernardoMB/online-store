import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      backgroundColor: "myAppBackground",
      fontFamily: `Outfit,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'`, 
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
        myAppBackground2: {
          value: {
            _light: "white",
            _dark: "#222221",
          },
        },
        myAppGlobalBorderColor: {
          value: {
            _light: "#e9e8e6",
            _dark: "#2a2a28",
          },
        },
        myAppTextColor: {
          value: {
            _light: "#5D5D58",
            _dark: "#c0beb9",
          },
        },
        myAppBorderGradientTop: {
          value: {
            _light: "linear-gradient(#e9e8e6, #fafaf9)",
            _dark: "linear-gradient(#2a2a28, #191918)",
          },
        },
        myAppBorderGradientBottom: {
          value: {
            _light: "linear-gradient(#fafaf9, #e9e8e6)",
            _dark: "linear-gradient(#191918, #2a2a28)",
          },
        },
        myAccentColor: {
          value: {
            _light: "#635bff",
            _dark: "#948eff",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);