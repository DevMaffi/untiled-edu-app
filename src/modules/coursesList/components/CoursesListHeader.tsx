import { useEffect, useRef } from 'react'

import { Box } from '@chakra-ui/react'

import { useCoursesOptions } from '@/store'
import { useObserver } from '@/hooks'

import { CoursesListOptions } from '@/modules/coursesList/components/options'

export default function CoursesListHeader() {
  const elementRef = useRef<HTMLDivElement | null>(null)

  const scrolls = useCoursesOptions(state => state.scrolls)
  const setScrolls = useCoursesOptions(state => state.setScrolls)

  const entry = useObserver(elementRef, { rootMargin: '-80px' })

  useEffect(() => {
    const visible = entry?.isIntersecting

    if (scrolls === visible) {
      setScrolls(!visible)
    }
  }, [entry])

  return (
    <Box ref={elementRef}>
      <CoursesListOptions />
    </Box>
  )
}
