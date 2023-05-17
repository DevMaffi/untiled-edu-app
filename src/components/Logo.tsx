import { Icon, Heading, HStack } from '@chakra-ui/react'
import { CommandLineIcon } from '@heroicons/react/24/outline'

import { useTypewriter } from 'react-simple-typewriter'

export default function Logo() {
  const [text] = useTypewriter({
    words: ['Untitled Code Edu'],
    typeSpeed: 25,
  })

  return (
    <HStack spacing={1.5}>
      <Icon as={CommandLineIcon} boxSize={6} />

      <Heading sx={{ fontWeight: 'semibold' }} size={'md'}>
        {text}
      </Heading>
    </HStack>
  )
}
