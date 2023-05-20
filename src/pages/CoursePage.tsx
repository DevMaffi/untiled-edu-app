import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from '@chakra-ui/react'

import { CoursePageIntro } from '@/layouts/courses'

import { useScrollTop } from '@/hooks'

import {
  useCourseDetailsFetch,
  CoursePageIntroSkeleton,
  CourseDetailsHeader,
  CourseProgram,
  CourseSummary,
} from '@/modules/courseDetails'

export default function CoursePage() {
  useScrollTop()

  const [courseDetails, isCourseLoading] = useCourseDetailsFetch()

  if (isCourseLoading) {
    return <CoursePageIntroSkeleton />
  }

  return (
    <Box>
      <CoursePageIntro />

      {!courseDetails?.details && (
        <Alert status={'warning'}>
          <AlertIcon />
          <AlertTitle>No details!</AlertTitle>
          <AlertDescription>
            These course has no details provided yet.
          </AlertDescription>
        </Alert>
      )}

      <Box sx={{ mt: 28 }}>
        <CourseDetailsHeader />
      </Box>

      <Box sx={{ mt: 10 }}>
        <CourseProgram />
      </Box>

      <Box sx={{ mt: 16 }}>
        <CourseSummary />
      </Box>
    </Box>
  )
}
