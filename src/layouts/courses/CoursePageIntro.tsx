import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { ArrowLongDownIcon } from '@heroicons/react/24/outline'

import { AnchorButton } from '@/components/ui'

import { useCourseDetails } from '@/store'

import coverPattern from '@/assets/cover_pattern.png'

export default function CoursePageIntro() {
  const courseDetails = useCourseDetails(state => state.courseDetails)

  const patterUrl = courseDetails?.details ? undefined : coverPattern

  return (
    <Box
      sx={{
        bgImage: patterUrl,
        bgSize: 'contain',
        bgRepeat: 'repeat',
      }}
    >
      <Box
        sx={{
          py: 20,
          bgImage: courseDetails?.details?.cover.url,
          bgSize: 'cover',
          textAlign: 'right',
        }}
      >
        <Container id={'courseIntro'} as={'section'} maxW={'container.md'}>
          <VStack sx={{ alignItems: 'end' }} spacing={6}>
            <Heading as={'h1'} sx={{ fontWeight: 'semibold' }} size={'2xl'}>
              {courseDetails?.title}
            </Heading>

            <Text noOfLines={3} sx={{ fontSize: 'xl' }}>
              {courseDetails?.details?.description}
            </Text>

            <AnchorButton to={'#courseProgram'} rightIcon={ArrowLongDownIcon}>
              Перейти до курсу
            </AnchorButton>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
