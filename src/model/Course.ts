export type Course = {
  id: string
  title: string
  preview: CourseAssetImageMeta
  tags: CourseTag[]
  lessonsCount: number
  estimate: number
  author: CourseAuthor
  meta: CourseMeta
}

export type CourseTag = {
  id: string
  label: string
  color?: string
}

export type CourseAuthor = {
  name: string
  avatar: CourseAssetImageMeta
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
  | 'webDesign'

export type CourseAssetImageMeta = {
  url: string
  mimeType?: string
  fileName?: string
}
