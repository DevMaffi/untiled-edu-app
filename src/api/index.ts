import * as coursesApi from './courses.api'

import { coursesServiceModel } from '@/model'

export const coursesService: coursesServiceModel.CoursesService = {
  getAllCourses: coursesApi.getAllCourses,
}
