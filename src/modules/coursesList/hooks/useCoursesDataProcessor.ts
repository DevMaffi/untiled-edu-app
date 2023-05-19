import _ from 'lodash'

import { useMemo } from 'react'

import { courseModel } from '@/model'
import { useCourses, useCoursesOptions } from '@/store'

import {
  handleCoursesTopicFilter,
  mapCoursesCategoryIteratee,
} from '@/modules/coursesList/helpers'

export function useCoursesCategory() {
  const courses = useCourses(state => state.courses)
  const category = useCoursesOptions(state => state.category)

  const categoryCourses = useMemo(() => {
    return _.filter(courses, mapCoursesCategoryIteratee(category))
  }, [courses, category])

  return categoryCourses as courseModel.Course[]
}

export function useCoursesTopic(categoryCourses: courseModel.Course[]) {
  const topic = useCoursesOptions(state => state.topic)

  const topicCourses = useMemo(() => {
    return _.filter(categoryCourses, handleCoursesTopicFilter(topic))
  }, [categoryCourses, topic])

  return topicCourses as courseModel.Course[]
}

export default function useCoursesDataProcessor() {
  const categoryCourses = useCoursesCategory()
  const topicCourses = useCoursesTopic(categoryCourses)

  return topicCourses as courseModel.Course[]
}
