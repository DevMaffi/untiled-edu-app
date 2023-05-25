import _ from 'lodash'

import { useMemo } from 'react'

import { Box, Button } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

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
    <Box
      sx={{ display: 'flex', justifyContent: 'center', width: 'full', py: 0.5 }}
    >
      <Swiper slidesPerView={'auto'} spaceBetween={10}>
        {rawTopicOptions.map(([value, rawOption]) => (
          <SwiperSlide key={value} style={{ width: 'auto' }}>
            <Button
              variant={'outline'}
              size={'sm'}
              isActive={value === topic}
              onClick={() =>
                setTopic(value as coursesOptionsModel.CoursesTopicOptionValue)
              }
            >
              {rawOption.label}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
