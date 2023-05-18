export type Course = {
  id: string
  title: string
  previewUrl: string
  tags: CourseTag[]
  lessonsCount: number
  estimate: number
  author: string
  authorAvaUrl: string
  meta: CourseMeta
}

export type CourseTag = {
  id: string
  label: string
  color?: string
}

export type CourseMeta = {
  lang: CourseLang
  isPopular: boolean
  isFree: boolean
  isLiked: boolean
}

export type CourseLang =
  | 'html'
  | 'css'
  | 'javascript'
  | 'react'
  | 'next'
  | 'web-design'
