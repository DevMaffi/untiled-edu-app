export type CoursesOptionsState = {
  category: CoursesCategoryOptionValue
}

export type CoursesCategoryOptionMeta =
  MenuItemOption<CoursesCategoryOptionValue>

export type CoursesCategoryOptionValue = 'all' | 'popular' | 'likes'

export type MenuItemOption<T> = {
  value: T
  label: string
}
