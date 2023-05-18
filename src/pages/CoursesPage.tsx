import { Box } from '@chakra-ui/react'

import { CoursesListSection } from '@/modules/coursesList'

export default function CoursesPage() {
  return (
    <Box sx={{ pt: 56, pb: 20 }}>
      <CoursesListSection />
    </Box>
  )
}
