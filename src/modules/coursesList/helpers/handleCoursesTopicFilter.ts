import { coursesOptionsModel } from '@/model'

import { coursesIterateeTypes } from '@/modules/coursesList/types'

export function handleCoursesTopicFilter(
  topic: coursesOptionsModel.CoursesTopicOptionValue
): coursesIterateeTypes.CoursesIteratee {
  return course => {
    if (topic === 'all') {
      return !!course
    }

    return (
      course.tags.some(tag => tag.label.toLowerCase().includes(topic)) ||
      course.meta.lang === topic
    )
  }
}
