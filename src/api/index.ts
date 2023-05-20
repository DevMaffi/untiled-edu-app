import * as coursesApi from './courses.api'

import { coursesServiceModel } from '@/model'

export const coursesService: coursesServiceModel.CoursesService = {
  getAllCourses: coursesApi.getAllCourses,
}

import * as courseDetailsApi from './courseDetails.api'

import { courseDetailsServiceModel } from '@/model'

export const courseDetailsService: courseDetailsServiceModel.CourseDetailsService =
  {
    getCourseDetails: courseDetailsApi.getCourseDetails,
  }
