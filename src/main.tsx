import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

import App from '@/App.tsx'

import { theme } from '@/modules/theme'

import '@/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
)
