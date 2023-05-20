import { gql } from 'graphql-request'

import { courseDetailsServiceModel } from '@/model'

import { hygraph } from '@/config/hygraphClient'
import { delay } from '@/helpers'

const GET_COURSE_QUERY = gql`
  query GetCourse($id: ID!) {
    course(where: { id: $id }) {
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
      details {
        id
        cover {
          url
          mimeType
          fileName
        }
        description
        accordion {
          id
          title
          description
        }
        summary
      }
    }
  }
`

export async function getCourseDetails(
  id: string
): Promise<courseDetailsServiceModel.GetCourseResponseData> {
  if (import.meta.env.VITE_FETCH_TIMEOUT) {
    const timeout = +import.meta.env.VITE_FETCH_TIMEOUT
    await delay(timeout)
  }

  return hygraph.request<courseDetailsServiceModel.GetCourseResponseData>(
    GET_COURSE_QUERY,
    { id }
  )
}
