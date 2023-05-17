import _ from 'lodash'

import { useMemo } from 'react'

import { Button, HStack } from '@chakra-ui/react'

import { coursesOptionsModel } from '@/model'
import { useCoursesOptions } from '@/store'

import { topicOptions } from '@/data/coursesOptions.json'

export default function CoursesTopicTabsMenu() {
  const topic = useCoursesOptions(state => state.topic)
  const setTopic = useCoursesOptions(state => state.setTopic)

  const rawTopicOptions = useMemo(() => {
    return _.toPairs(topicOptions)
  }, [topic])

  return (
    <HStack spacing={2.5}>
      {rawTopicOptions.map(([value, rawOption]) => (
        <Button
          key={value}
          variant={'outline'}
          size={'sm'}
          isActive={value === topic}
          onClick={() =>
            setTopic(value as coursesOptionsModel.CoursesTopicOptionValue)
          }
        >
          {rawOption.label}
        </Button>
      ))}
    </HStack>
  )
}
