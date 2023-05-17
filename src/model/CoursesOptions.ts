export type CoursesOptionsState = {
  category: CoursesCategoryOptionValue
  topic: CoursesTopicOptionValue
}

export type CoursesCategoryOptionMeta =
  MenuItemOption<CoursesCategoryOptionValue>

export type CoursesCategoryOptionValue = 'all' | 'popular' | 'likes'

export type CoursesTopicOptionMeta = MenuItemOption<CoursesTopicOptionValue>

export type CoursesTopicOptionValue =
  | 'all'
  | 'html'
  | 'css'
  | 'javascript'
  | 'react'
  | 'next'
  | 'web-design'

export type MenuItemOption<T> = {
  value: T
  label: string
}
