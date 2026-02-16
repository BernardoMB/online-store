# Server-Side Rendering (SSR) Setup Guide

This application has been converted from a Single Page Application (SPA) to a Server-Side Rendered (SSR) application using Vite SSR with Express.

## Architecture Overview

The application now uses:
- **Vite SSR** for server-side rendering
- **Express 4** as the HTTP server
- **React Router** with both `StaticRouter` (server) and `BrowserRouter` (client)
- **Hydration** on the client side for seamless interactivity

## File Structure

```
├── src/
│   ├── entry-client.tsx    # Client-side entry point (hydration)
│   ├── entry-server.tsx    # Server-side entry point (SSR rendering)
│   ├── App.tsx             # Main app component (router-agnostic)
│   └── ...
├── server.js               # Express server with SSR middleware
├── index.html              # HTML template with SSR injection points
├── vercel.json             # Vercel deployment configuration
└── vite.config.ts          # Vite configuration
```

## Development

### Running the Development Server

```bash
npm run dev
```

This starts the Express server with Vite's development middleware at `http://localhost:5173`. The server will:
- Serve HTML with server-side rendering
- Enable Hot Module Replacement (HMR)
- Transform TypeScript/JSX on the fly

### How SSR Works in Development

1. Express server receives a request
2. Vite transforms `index.html` and `entry-server.tsx`
3. React renders the app to HTML string using `StaticRouter`
4. HTML is injected into the template and sent to the client
5. Client downloads JavaScript and hydrates the app using `BrowserRouter`

## Production Build

### Building for Production

```bash
npm run build
```

This runs two build steps:
1. **Client build**: `npm run build:client` - Creates the client-side bundle with SSR manifest
2. **Server build**: `npm run build:server` - Creates the server-side bundle

Output:
```
dist/
├── client/          # Static assets and client bundle
│   ├── index.html
│   ├── assets/
│   └── .vite/
│       └── ssr-manifest.json
└── server/          # Server-side bundle
    └── entry-server.js
```

### Testing Production Build Locally

```bash
npm run preview
```

This runs the production build locally using the compiled bundles.

## Deployment to Vercel

### Prerequisites

1. Install Vercel CLI (optional, for local testing):
   ```bash
   npm install -g vercel
   ```

### Deployment Steps

1. **Connect your repository to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel will auto-detect the settings

2. **Build Configuration** (usually auto-detected):
   - **Build Command**: `npm run build`
   - **Output Directory**: Leave default or set to `.`
   - **Install Command**: `npm install`

3. **Environment Variables** (if needed):
   - Add any required environment variables in Vercel dashboard
   - Example: `VITE_API_URL`, `STRIPE_PUBLIC_KEY`, etc.

4. **Deploy**:
   ```bash
   vercel --prod
   ```

### Vercel Configuration

The `vercel.json` file configures Vercel to:
- Use Node.js runtime for the server
- Route all requests through `server.js`
- Serve the SSR application

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ]
}
```

## SEO Improvements (Next Steps)

Now that SSR is enabled, you can add proper SEO meta tags:

### 1. Install React Helmet

```bash
npm install react-helmet-async
```

### 2. Add Meta Tags to Pages

Example for a product page:

```tsx
import { Helmet } from 'react-helmet-async';

function ProductPage() {
  return (
    <>
      <Helmet>
        <title>Product Name - Hue & Hoot</title>
        <meta name="description" content="Product description here" />
        <meta property="og:title" content="Product Name" />
        <meta property="og:description" content="Product description" />
        <meta property="og:image" content="/product-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Your page content */}
    </>
  );
}
```

### 3. Update entry-server.tsx for Helmet

```tsx
import { HelmetProvider } from 'react-helmet-async';
import { renderToString } from 'react-dom/server';

export function render(url: string) {
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return {
    html,
    head: `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `
  };
}
```

## Important Notes

### Client-Side Only Code

Code that should only run on the client (like IndexedDB operations) should be wrapped in a check:

```tsx
useEffect(() => {
  // Only run on client side (not during SSR)
  if (typeof window === 'undefined') return;

  // Client-side code here
}, []);
```

This is already implemented in `App.tsx` for cart loading.

### Router Setup

- **Server**: Uses `StaticRouter` from `react-router-dom/server` in `entry-server.tsx` (React Router v6)
- **Client**: Uses `BrowserRouter` in `entry-client.tsx`
- **App.tsx**: Only contains `<Routes>` (no router wrapper)

**Note**: This project uses React Router v6 (not v7) because v6 has stable SSR support with proper `StaticRouter` exports. React Router v7 has breaking changes with module exports that make SSR more complex.

This architecture allows the same App component to work in both SSR and client environments.

## Troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install`
3. Try building again: `npm run build`

### Port Already in Use

If port 5173 is already in use, you can change it in `server.js`:

```javascript
const port = process.env.PORT || 5173  // Change 5173 to another port
```

### SSR Hydration Mismatch

If you see hydration errors in the console, ensure:
- Server and client render the same content initially
- Client-only code is wrapped in `typeof window !== 'undefined'` checks
- No random values or Date.now() in initial render without state

## Performance Benefits

With SSR enabled:
- ✅ **Better SEO**: Search engines can crawl your content
- ✅ **Faster First Paint**: Users see content immediately
- ✅ **Social Media**: Proper Open Graph tags for link previews
- ✅ **Core Web Vitals**: Improved LCP (Largest Contentful Paint)

## Resources

- [Vite SSR Documentation](https://vitejs.dev/guide/ssr.html)
- [React Router SSR Guide](https://reactrouter.com/en/main/guides/ssr)
- [Vercel Node.js Deployment](https://vercel.com/docs/functions/runtimes/node-js)
