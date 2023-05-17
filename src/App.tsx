import { Heading, Highlight } from '@chakra-ui/react'

export default function App() {
  return (
    <Heading as={'h1'} sx={{ fontWeight: 'semibold' }} size={'2xl'}>
      <Highlight
        query={'start journey'}
        styles={{
          display: 'inline-flex',
          py: 2.5,
          px: 6,
          rounded: 'full',
          bg: 'brand.100',
          fontSize: '3xl',
          fontWeight: 'medium',
        }}
      >
        Get help with coding from Start journey engineers.
      </Highlight>
    </Heading>
  )
}
