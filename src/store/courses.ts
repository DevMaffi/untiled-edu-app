import { create } from 'zustand'

import { devtools, persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { courseModel } from '@/model'

import { LS_COURSES_STORAGE_KEY } from '@/constants/storeConstants'
import { coursesService } from '@/api'

type State = {
  courses: courseModel.Course[]
  areCoursesLoading: boolean
  error: string | null
}

type Actions = {
  fetchCourses: () => Promise<void>
}

export const useCourses = create<State & Actions>()(
  devtools(
    persist(
      immer(set => ({
        courses: [],
        areCoursesLoading: false,
        error: null,

        fetchCourses: async () => {
          set({ areCoursesLoading: true })

          try {
            const { courses } = await coursesService.getAllCourses()
            set({ courses, error: null })
          } catch (err) {
            if (err instanceof Error) set({ error: err.message })
            set({ error: `[fetchCourses]: Unexpected error ${err}` })
          } finally {
            set({ areCoursesLoading: false })
          }
        },
      })),
      {
        name: LS_COURSES_STORAGE_KEY,
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: 'courses' }
  )
)
