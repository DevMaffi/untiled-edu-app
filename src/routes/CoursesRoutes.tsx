import { Routes, Route } from 'react-router-dom'

import { CoursesRoutePageLayout } from '@/layouts/courses'
import { CoursesPage } from '@/pages'

export default function CoursesRoutes() {
  return (
    <Routes>
      <Route element={<CoursesRoutePageLayout />}>
        <Route index element={<CoursesPage />} />
      </Route>
    </Routes>
  )
}
