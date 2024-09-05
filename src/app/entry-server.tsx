import React, { Suspense } from 'react'
import { type RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server'
import App from './App'

export function render(_url: string, _ssrManifest?: string, options?: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <React.StrictMode>
      <Suspense fallback={<p>Loading...</p>}>
        <App />
      </Suspense>
    </React.StrictMode>,
    options
  )
}
