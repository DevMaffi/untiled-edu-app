import { Outlet } from 'react-router-dom'

import { Box } from '@chakra-ui/react'

export default function CoursesRoutePageLayout() {
  return (
    <Box sx={{ pt: 48, mb: 20 }}>
      <Outlet />
    </Box>
  )
}
