import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Cached production assets
const templateHtml = fs.readFileSync(path.resolve(__dirname, '../dist/client/index.html'), 'utf-8')
const ssrManifest = fs.readFileSync(path.resolve(__dirname, '../dist/client/.vite/ssr-manifest.json'), 'utf-8')

// Create express app
const app = express()

// Serve static files
const compression = (await import('compression')).default
const sirv = (await import('sirv')).default
app.use(compression())
app.use('/', sirv(path.resolve(__dirname, '../dist/client'), { extensions: [] }))

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl

    const template = templateHtml
    const render = (await import('../dist/server/entry-server.js')).render

    const rendered = await render(url, ssrManifest)

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

export default app
