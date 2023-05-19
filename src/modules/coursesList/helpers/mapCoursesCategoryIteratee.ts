import { coursesOptionsModel } from '@/model'
import { exhaustiveCheck } from '@/helpers'

import { coursesIterateeTypes } from '@/modules/coursesList/types'

export function mapCoursesCategoryIteratee(
  category: coursesOptionsModel.CoursesCategoryOptionValue
): coursesIterateeTypes.CoursesIteratee {
  switch (category) {
    case 'all':
      return course => !!course

    case 'popular':
      return course => course.meta.isPopular

    case 'likes':
      return course => course.meta.isLiked

    case 'free':
      return course => course.meta.isFree

    default:
      exhaustiveCheck(category)
      throw new Error(
        '[mapCoursesCategoryIteratee]: Unexpected behavior occurred'
      )
  }
}
