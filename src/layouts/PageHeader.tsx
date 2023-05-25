import { useRef } from 'react'
import { useMatch } from 'react-router-dom'

import { Box, Divider, HStack } from '@chakra-ui/react'

import { Logo } from '@/components'
import { useIsFirstRender, useObserver } from '@/hooks'

import { ThemeToggleButton } from '@/modules/theme'

import { CoursesSearch, CoursesListScrollHeader } from '@/modules/coursesList'
import { CourseDetailsScrollHeader } from '@/modules/courseDetails'

export default function PageHeader() {
  const elementRef = useRef<HTMLDivElement | null>(null)

  const courses = useMatch('/courses')
  const courseDetails = useMatch('/courses/:id')

  const firstRender = useIsFirstRender()
  const entry = useObserver(elementRef)

  const scrolls = !firstRender && !entry.isIntersecting

  return (
    <>
      <Box
        ref={elementRef}
        sx={{
          pos: 'absolute',
          top: 0,
          insetX: 0,
          height: 20,
        }}
      />

      <Box
        as={'header'}
        sx={{
          pos: 'fixed',
          top: 0,
          insetX: 0,
          zIndex: 1000,
        }}
      >
        <HStack
          sx={{
            justifyContent: 'space-between',
            py: scrolls ? [2, 3.5] : [5, 10],
            px: {
              base: 4,
              xl: 10,
              '2xl': 20,
            },
            bgColor: 'chakra-body-bg',
            transition: 'all 400ms',
          }}
        >
          <Logo />

          <HStack spacing={[2, 3.5]}>
            <CoursesSearch />
            <ThemeToggleButton />
          </HStack>
        </HStack>

        <Divider />

        {courses && <CoursesListScrollHeader />}
        {courseDetails && <CourseDetailsScrollHeader />}
      </Box>
    </>
  )
}
