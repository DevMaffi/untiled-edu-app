import { useEffect, useRef } from 'react'

import { Box, Container } from '@chakra-ui/react'

import { useCourses } from '@/store'
import { useObserver } from '@/hooks'

import CoursesListHeader from '@/modules/coursesList/components/CoursesListHeader'
import CoursesCardsGrid from '@/modules/coursesList/components/CoursesCardsGrid'

export default function CoursesListSection() {
  const elementRef = useRef<HTMLDivElement | null>(null)

  const isIntersected = useCourses(state => state.isIntersected)
  const setIsIntersected = useCourses(state => state.setIsIntersected)

  const entry = useObserver(elementRef)

  useEffect(() => {
    if (!isIntersected && entry.isIntersecting) {
      setIsIntersected()
    }
  }, [entry])

  return (
    <Container
      id={'coursesList'}
      ref={elementRef}
      as={'section'}
      maxW={'container.xl'}
      sx={{ scrollMarginTop: 28 }}
    >
      <Box sx={{ px: { base: 0, lg: 5 } }}>
        <CoursesListHeader />
      </Box>

      <Box sx={{ mt: 10 }}>
        <CoursesCardsGrid />
      </Box>
    </Container>
  )
}
