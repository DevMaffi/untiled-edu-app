import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      800: '#1A202C', // text badge light
      500: '#C2DEB9', // bg button light
      600: '#9EC2D1', // bg button light hover
      300: '#5A98B1', // bg button dark hover
      200: '#80BA6D', // bg button dark
      100: '#C2DEB9', // bg badge light
    },
  },
})
