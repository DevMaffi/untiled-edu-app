import { useEffect, useRef } from 'react'

import { Box } from '@chakra-ui/react'

import { useCoursesOptions } from '@/store'
import { useObserver } from '@/hooks'

import { CoursesListOptions } from '@/modules/coursesList/components/options'

export default function CoursesListHeader() {
  const elementRef = useRef<HTMLDivElement | null>(null)

  const setScrolls = useCoursesOptions(state => state.setScrolls)

  const entry = useObserver(elementRef, -80)

  useEffect(() => {
    const visible = entry.isIntersecting

    if (visible || !entry.inBellowViewport) {
      return setScrolls(false)
    }

    setScrolls(true)
  }, [entry])

  return (
    <Box ref={elementRef}>
      <CoursesListOptions />
    </Box>
  )
}
