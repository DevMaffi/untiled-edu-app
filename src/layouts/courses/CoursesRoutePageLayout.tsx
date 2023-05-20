import { Outlet } from 'react-router-dom'

import { Box } from '@chakra-ui/react'

export default function CoursesRoutePageLayout() {
  return (
    <Box sx={{ pt: 28, mb: 20 }}>
      <Outlet />
    </Box>
  )
}
