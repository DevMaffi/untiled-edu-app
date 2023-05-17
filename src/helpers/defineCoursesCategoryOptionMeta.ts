import { coursesOptionsModel } from '@/model'

import { categoryOptions } from '@/data/coursesOptions.json'

export function defineCoursesCategoryOptionMeta(
  option: coursesOptionsModel.CoursesCategoryOptionValue
): coursesOptionsModel.CoursesCategoryOptionMeta {
  const rawCategoryOption = categoryOptions[option]

  return {
    value: option,
    label: rawCategoryOption.label,
  }
}
