import './index.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
  </React.StrictMode>
)
