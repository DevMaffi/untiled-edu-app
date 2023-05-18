import { gql } from 'graphql-request'

import { coursesServiceModel } from '@/model'

import { hygraph } from '@/config/hygraphClient'
import { delay } from '@/helpers'

const LIST_COURSES_QUERY = gql`
  query ListCourses {
    courses {
      id
      title
      preview {
        url
        mimeType
        fileName
      }
      tags {
        id
        label
        color
      }
      lessonsCount
      estimate
      author {
        id
        name
        avatar {
          url
          mimeType
          fileName
        }
      }
      meta {
        lang
        isPopular
        isFree
        isLiked
      }
    }
  }
`

export async function getAllCourses(): Promise<coursesServiceModel.ListCoursesResponseData> {
  if (import.meta.env.VITE_FETCH_TIMEOUT) {
    const timeout = +import.meta.env.VITE_FETCH_TIMEOUT
    await delay(timeout)
  }

  return hygraph.request<coursesServiceModel.ListCoursesResponseData>(
    LIST_COURSES_QUERY
  )
}
