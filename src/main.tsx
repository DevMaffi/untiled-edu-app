import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

import App from '@/App.tsx'

import { theme } from '@/modules/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
