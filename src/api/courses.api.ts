import { gql } from 'graphql-request'

import { coursesServiceModel } from '@/model'
import { hygraph } from '@/config/hygraphClient'

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

export function getAllCourses(): Promise<coursesServiceModel.ListCoursesResponseData> {
  return hygraph.request<coursesServiceModel.ListCoursesResponseData>(
    LIST_COURSES_QUERY
  )
}
