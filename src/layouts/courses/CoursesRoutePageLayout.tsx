import { Outlet } from 'react-router-dom'

import { Box } from '@chakra-ui/react'

export default function CoursesRoutePageLayout() {
  return (
    <Box
      sx={{
        pt: { base: 14, md: 28 },
        mb: { base: 10, xl: 20 },
      }}
    >
      <Outlet />
    </Box>
  )
}
