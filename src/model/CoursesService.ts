import { courseModel } from '@/model'

export type CoursesService = {
  getAllCourses: () => Promise<ListCoursesResponseData>
}

export type ListCoursesResponseData = {
  courses: courseModel.Course[]
}
