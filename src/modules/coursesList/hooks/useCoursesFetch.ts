import { useEffect } from 'react'

import { courseModel } from '@/model'
import { useCourses } from '@/store'

export function useCoursesFetch() {
  const courses = useCourses(state => state.courses)
  const areCoursesLoading = useCourses(state => state.areCoursesLoading)
  const error = useCourses(state => state.error)
  const isIntersected = useCourses(state => state.isIntersected)

  const fetchCourses = useCourses(state => state.fetchCourses)

  useEffect(() => {
    const shouldFetch = import.meta.env.VITE_FETCH_COURSES_PERSIST
      ? !courses.length
      : true

    if (isIntersected && shouldFetch) {
      fetchCourses()
    }
  }, [isIntersected])

  return [courses, areCoursesLoading, error, isIntersected] as [
    courseModel.Course[],
    boolean,
    string | null,
    boolean
  ]
}
