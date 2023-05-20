import { Link } from 'react-router-dom'

import { Button, Text, VStack } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <VStack sx={{ justifyContent: 'center', height: '100vh' }} spacing={6}>
      <Text sx={{ fontSize: '2xl' }}>404 | Сторінку не знайдено х_х</Text>
      <Button as={Link} to={'/courses'} variant={'outline'} size={'md'}>
        На головну
      </Button>
    </VStack>
  )
}
