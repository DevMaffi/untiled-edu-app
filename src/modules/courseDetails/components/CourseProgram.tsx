import { Container, Heading, VStack } from '@chakra-ui/react'

import CourseProgramAccordion from '@/modules/courseDetails/components/CourseProgramAccordion'

export default function CourseProgram() {
  return (
    <Container
      id={'courseProgram'}
      as={'section'}
      maxW={'container.md'}
      sx={{ scrollMarginTop: 40 }}
    >
      <VStack sx={{ alignItems: 'start' }} spacing={10}>
        <Heading sx={{ fontWeight: 'semibold' }} size={'lg'}>
          Програма курсу
        </Heading>

        <CourseProgramAccordion />
      </VStack>
    </Container>
  )
}
