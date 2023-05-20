import {
  Container,
  Image,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

import { AnchorButton } from '@/components/ui'

import unit1 from '@/assets/unit_01.png'
import unit2 from '@/assets/unit_02.png'

export default function CoursesPageIntro() {
  return (
    <Container
      id={'coursesIntro'}
      as={'section'}
      maxW={'container.md'}
      sx={{ pos: 'relative' }}
    >
      <Image
        src={unit1}
        sx={{
          pos: 'absolute',
          top: 0,
          left: 0,
          height: '100px',
          objectFit: 'contain',
          transform: 'translate(-75%, -35%)',
        }}
        alt={'Unit'}
      />

      <Image
        src={unit2}
        sx={{
          pos: 'absolute',
          bottom: 0,
          right: 0,
          height: '85px',
          objectFit: 'contain',
          transform: 'translate(15%, 50%)',
        }}
        alt={'Unit'}
      />

      <HStack spacing={5}>
        <Heading
          as={'h1'}
          sx={{
            maxW: 'sm',
            fontWeight: 'semibold',
            lineHeight: '80px',
          }}
          size={'3xl'}
        >
          Програмуй з найкращими
        </Heading>

        <VStack sx={{ width: '320px', pt: 3 }} spacing={2.5}>
          <Text sx={{ fontSize: 'md' }}>
            Вивчай сучасні технології та здобувай навички, необхідні для
            створення захоплюючих веб-інтерфейсів.
          </Text>
          <Text sx={{ fontSize: 'md' }}>
            Незалежно від твого рівня досвіду, ти знайдеш кращий курс.
          </Text>
        </VStack>
      </HStack>

      <HStack spacing={8}>
        <AnchorButton to={'#coursesList'} leftIcon={ArrowTopRightOnSquareIcon}>
          Почати зараз
        </AnchorButton>

        <Heading
          sx={{ fontWeight: 'semibold', lineHeight: '80px' }}
          size={'3xl'}
        >
          менторами.
        </Heading>
      </HStack>
    </Container>
  )
}
