import { coursesOptionsModel } from '@/model'

import { categoryOptions } from '@/data/coursesOptions.json'

export function defineCoursesCategoryOptionMeta(
  value: coursesOptionsModel.CoursesCategoryOptionValue
): coursesOptionsModel.CoursesCategoryOptionMeta {
  const rawCategoryOption = categoryOptions[value]

  return {
    value,
    label: rawCategoryOption.label,
  }
}
