import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { coursesOptionsModel } from '@/model'

type State = coursesOptionsModel.CoursesOptionsState

type Actions = {
  setCategory: (value: coursesOptionsModel.CoursesCategoryOptionValue) => void
  setTopic: (value: coursesOptionsModel.CoursesTopicOptionValue) => void
}

export const useCoursesOptions = create<State & Actions>()(
  devtools(
    set => ({
      category: 'popular',
      setCategory: value => set({ category: value }),

      topic: 'all',
      setTopic: value => set({ topic: value }),
    }),
    { name: 'courses-options' }
  )
)
