import { Box } from '@chakra-ui/react'

import { CoursesPageIntro } from '@/layouts/courses'

import { CoursesListSection } from '@/modules/coursesList'

export default function CoursesPage() {
  return (
    <Box>
      <CoursesPageIntro />

      <Box sx={{ mt: 28 }}>
        <CoursesListSection />
      </Box>
    </Box>
  )
}
