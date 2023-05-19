import { Routes, Route, Navigate } from 'react-router-dom'

import { Box } from '@chakra-ui/react'

import { PageHeader } from '@/layouts'
import { CoursesRoutes } from '@/routes'

export default function App() {
  return (
    <Box sx={{ zoom: '90%' }}>
      <PageHeader />

      <Routes>
        <Route path={'/'} element={<Navigate to={'/courses'} replace />} />
        <Route path={'/courses/*'} element={<CoursesRoutes />} />
      </Routes>
    </Box>
  )
}
