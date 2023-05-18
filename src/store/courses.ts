import _ from 'lodash'

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
  isIntersected: boolean
}

type Actions = {
  fetchCourses: () => Promise<void>
  setIsIntersected: () => void
  toggleCourseLike: (id: string) => void
}

export const useCourses = create<State & Actions>()(
  devtools(
    persist(
      immer((set, get) => ({
        courses: [],
        areCoursesLoading: false,
        error: null,

        isIntersected: false,

        fetchCourses: async () => {
          set({ areCoursesLoading: true })

          try {
            const resp = await coursesService.getAllCourses()

            const courses = hydrateCourses(get().courses, resp.courses)
            set({ courses, error: null })
          } catch (err) {
            if (err instanceof Error) set({ error: err.message })
            set({ error: `[fetchCourses]: Unexpected error ${err}` })
          } finally {
            set({ areCoursesLoading: false })
          }
        },

        setIsIntersected: () => set({ isIntersected: true }),

        toggleCourseLike: id =>
          set(state => {
            const course = state.courses.find(course => course.id === id)
            if (!course) return

            course.meta.isLiked = !course.meta.isLiked
          }),
      })),
      {
        name: LS_COURSES_STORAGE_KEY,
        storage: createJSONStorage(() => localStorage),

        partialize: state => {
          return _.fromPairs(
            _.toPairs(state).filter(([key]) => !['isIntersected'].includes(key))
          )
        },
      }
    ),
    { name: 'courses' }
  )
)

function hydrateCourses(
  courses: courseModel.Course[],
  rawCourses: courseModel.Course[]
): courseModel.Course[] {
  return rawCourses.map(rawCourse => {
    const course = courses.find(course => course.id === rawCourse.id)

    if (!course) return rawCourse
    return { ...rawCourse, meta: course.meta }
  })
}
