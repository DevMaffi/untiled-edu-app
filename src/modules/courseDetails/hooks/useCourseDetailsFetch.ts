import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { courseDetailsModel } from '@/model'

import { useCourseDetails } from '@/store'
import { useIsFirstRender } from '@/hooks'

export function useCourseDetailsFetch() {
  const { id } = useParams()
  const navigate = useNavigate()

  const courseDetails = useCourseDetails(state => state.courseDetails)
  const isCourseLoading = useCourseDetails(state => state.isCourseLoading)
  const error = useCourseDetails(state => state.error)

  const fetchCourseDetails = useCourseDetails(state => state.fetchCourseDetails)

  const isFirstRender = useIsFirstRender()

  useEffect(() => {
    const shouldFetch = import.meta.env.VITE_FETCH_COURSES_PERSIST
      ? !courseDetails || courseDetails.id !== id
      : true

    if (id && shouldFetch) {
      fetchCourseDetails(id)
    }
  }, [id])

  if ((!isFirstRender && !isCourseLoading && !courseDetails) || error) {
    navigate('/not-found', { replace: true })
  }

  return [courseDetails, isCourseLoading, error] as [
    courseDetailsModel.CourseWithDetails | null,
    boolean,
    string | null
  ]
}
