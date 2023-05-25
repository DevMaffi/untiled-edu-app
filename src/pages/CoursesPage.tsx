import { Box } from '@chakra-ui/react'

import { CoursesPageIntro } from '@/layouts/courses'

import { useScrollTop } from '@/hooks'

import { CoursesListSection } from '@/modules/coursesList'

export default function CoursesPage() {
  useScrollTop()

  return (
    <Box sx={{ mt: 28 }}>
      <CoursesPageIntro />

      <Box sx={{ mt: 28 }}>
        <CoursesListSection />
      </Box>
    </Box>
  )
}
