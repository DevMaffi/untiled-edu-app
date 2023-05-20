import { courseDetailsModel } from '@/model'

export type CourseDetailsService = {
  getCourseDetails: (id: string) => Promise<GetCourseResponseData>
}

export type GetCourseResponseData = {
  course: courseDetailsModel.CourseWithDetails
}
