import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

import { courseDetailsModel } from '@/model'

import { LS_COURSE_DETAILS_STORAGE_KEY } from '@/constants/storeConstants'
import { courseDetailsService } from '@/api'

type State = {
  courseDetails: courseDetailsModel.CourseWithDetails | null
  isCourseLoading: boolean
  error: string | null
}

type Actions = {
  fetchCourseDetails: (id: string) => Promise<void>
}

export const useCourseDetails = create<State & Actions>()(
  devtools(
    persist(
      set => ({
        courseDetails: null,
        isCourseLoading: false,
        error: null,

        fetchCourseDetails: async id => {
          set({ isCourseLoading: true })

          try {
            const resp = await courseDetailsService.getCourseDetails(id)
            set({ courseDetails: resp.course, error: null })
          } catch (err) {
            if (err instanceof Error) set({ error: err.message })
            set({ error: `[fetchCourses]: Unexpected error ${err}` })
          } finally {
            set({ isCourseLoading: false })
          }
        },
      }),
      {
        name: LS_COURSE_DETAILS_STORAGE_KEY,
        storage: createJSONStorage(() => localStorage),
      }
    ),
    { name: 'course-details' }
  )
)
