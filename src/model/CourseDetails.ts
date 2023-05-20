import { courseModel } from '@/model'

export type CourseWithDetails = {
  details?: CourseDetails
} & courseModel.Course

export type CourseDetails = {
  cover: courseModel.CourseAssetImageMeta
  description: string
  accordion: CourseProgramAccordion
  summary: string[]
}

export type CourseProgramAccordion = CourseProgramAccordionItem[]

export type CourseProgramAccordionItem = {
  id: string
  title: string
  description: string[]
}
