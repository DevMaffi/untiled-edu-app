import { useEffect, useRef } from 'react'

import { Box } from '@chakra-ui/react'

import { useCourseDetails } from '@/store'
import { useObserver } from '@/hooks'

import CourseDetailsActions from '@/modules/courseDetails/components/CourseDetailsActions'

export default function CourseDetailsHeader() {
  const elementRef = useRef<HTMLDivElement | null>(null)

  const entry = useObserver(elementRef, -80)

  const setScrolls = useCourseDetails(state => state.setScrolls)

  useEffect(() => {
    const visible = entry.isIntersecting

    if (visible || !entry.inBellowViewport) {
      return setScrolls(false)
    }

    setScrolls(true)
  }, [entry])

  return (
    <Box as={'header'} ref={elementRef}>
      <CourseDetailsActions />
    </Box>
  )
}
