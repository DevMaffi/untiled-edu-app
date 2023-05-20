import { Container, Heading, Text, VStack } from '@chakra-ui/react'

import { useCourseDetails } from '@/store'

export default function CourseSummary() {
  const courseDetails = useCourseDetails(state => state.courseDetails)

  return (
    <Container id={'courseSummary'} as={'section'} maxW={'container.md'}>
      <VStack sx={{ alignItems: 'start' }} spacing={6}>
        <Heading sx={{ fontWeight: 'semibold' }} size={'lg'}>
          Ти навчишся
        </Heading>

        <VStack sx={{ alignItems: 'start' }} spacing={3.5}>
          {courseDetails?.details?.summary.map((paragraph, index) => (
            <Text key={index} sx={{ fontSize: 'md' }}>
              {paragraph}
            </Text>
          ))}
        </VStack>
      </VStack>
    </Container>
  )
}
