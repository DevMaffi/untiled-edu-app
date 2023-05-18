export type CoursesOptionsState = {
  category: CoursesCategoryOptionValue
  topic: CoursesTopicOptionValue
}

export type CoursesCategoryOptionMeta =
  MenuItemOption<CoursesCategoryOptionValue>

export type CoursesCategoryOptionValue = 'all' | 'popular' | 'likes' | 'free'

export type CoursesTopicOptionMeta = MenuItemOption<CoursesTopicOptionValue>

export type CoursesTopicOptionValue =
  | 'all'
  | 'html'
  | 'css'
  | 'javascript'
  | 'react'
  | 'next'
  | 'webDesign'

export type MenuItemOption<T> = {
  value: T
  label: string
}
