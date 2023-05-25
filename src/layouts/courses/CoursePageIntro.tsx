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
          pt: { base: 24, md: 20 },
          pb: { base: 10, md: 20 },
          bgImage: courseDetails?.details?.cover.url,
          bgSize: 'cover',
          textAlign: 'right',
        }}
      >
        <Container
          id={'courseIntro'}
          as={'section'}
          maxW={{ base: 'container.sm', md: 'container.md' }}
        >
          <VStack sx={{ alignItems: 'end' }} spacing={{ base: 3.5, md: 6 }}>
            <Heading as={'h1'} sx={{ fontWeight: 'semibold' }} size={'2xl'}>
              {courseDetails?.title}
            </Heading>

            <Text
              noOfLines={3}
              sx={{ maxW: { base: 480, md: 'full' }, fontSize: 'xl' }}
            >
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
