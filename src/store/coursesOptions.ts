import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { coursesOptionsModel } from '@/model'

type State = {
  searchQuery: string
} & coursesOptionsModel.CoursesOptionsState

type Actions = {
  setSearchQuery: (query: string) => void
  setCategory: (value: coursesOptionsModel.CoursesCategoryOptionValue) => void
  setTopic: (value: coursesOptionsModel.CoursesTopicOptionValue) => void
}

export const useCoursesOptions = create<State & Actions>()(
  devtools(
    set => ({
      searchQuery: '',
      setSearchQuery: query => set({ searchQuery: query }),

      category: 'popular',
      setCategory: value => set({ category: value }),

      topic: 'all',
      setTopic: value => set({ topic: value }),
    }),
    { name: 'courses-options' }
  )
)
