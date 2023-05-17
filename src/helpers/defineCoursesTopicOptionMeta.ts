import { coursesOptionsModel } from '@/model'

import { topicOptions } from '@/data/coursesOptions.json'

export function defineCoursesTopicOptionMeta(
  value: coursesOptionsModel.CoursesTopicOptionValue
): coursesOptionsModel.CoursesTopicOptionMeta {
  const rawTopicOption = topicOptions[value]

  return {
    value,
    label: rawTopicOption.label,
  }
}
