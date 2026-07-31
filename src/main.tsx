import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import { setupSW } from './utils/registerSW'

// Register PWA Service Worker for auto-update and offline capability
setupSW();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)


