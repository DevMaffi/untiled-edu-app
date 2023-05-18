import { Routes, Route } from 'react-router-dom'

import { CoursesPage } from '@/pages'

export default function CoursesRoutes() {
  return (
    <Routes>
      <Route index element={<CoursesPage />} />
    </Routes>
  )
}
