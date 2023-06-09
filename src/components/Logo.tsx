import { Link } from 'react-router-dom'

import { Icon, Heading, HStack } from '@chakra-ui/react'
import { CommandLineIcon } from '@heroicons/react/24/outline'

import { useTypewriter } from 'react-simple-typewriter'

export default function Logo() {
  const [text] = useTypewriter({
    words: ['Untitled Code Edu'],
    typeSpeed: 25,
  })

  return (
    <HStack as={Link} to={'/courses'} spacing={1.5}>
      <Icon as={CommandLineIcon} boxSize={[5, 6]} />

      <Heading sx={{ fontWeight: 'semibold' }} size={['sm', 'md']}>
        {text}
      </Heading>
    </HStack>
  )
}
