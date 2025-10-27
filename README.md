# Ecommerce

This application is the minimal implementation for an online store.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Debug

✅ Step-by-Step: View React App on Your Phone
1. Start the Dev Server with Host Option
```bash
npm run debug
```
or
```bash 
npx vite --host
```
This makes your app accessible over your local network.

⚠️ You must be connected to the same Wi-Fi on both your computer and your phone.

2. Find Your Local IP Address
Run this in your terminal (macOS/Linux):

```bash
ipconfig getifaddr en0
```
Or on Windows:

```bash
ipconfig
```
Look for something like 192.168.1.42. This is your machine’s local IP.

3. Access from Your Phone’s Browser
Open Chrome/Safari on your phone and enter:
```
http://192.168.1.42:5173
```
(Replace 192.168.1.42 with your actual IP.)

# UIX

### Chakra UI 
The UI implements Chakra UI. The library was installed following the [Chakra UI tutorial](https://www.youtube.com/watch?v=WJIWd7-aZQ0). Review commits, since the documentation is outdated.

### Swiper JS 
Review commits for setup since several workarounds had to be implemented

# Back-end

This application's back-end consists of two AWS Lambda functions:
1. Send message from Contact form (.NET 9)
2. Create Stripe checkout session (Node JS)

# Publish

This application is currently being hosted in Vercel.