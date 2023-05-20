import { Link } from 'react-router-dom'

import { Button, ButtonGroup, Container } from '@chakra-ui/react'
import { ArrowUpLeftIcon, SignalIcon } from '@heroicons/react/24/outline'

import { useCourses, useCourseDetails } from '@/store'
import { defineLikeIcon } from '@/helpers'

export default function CourseDetailsActions() {
  const courseDetails = useCourseDetails(state => state.courseDetails)

  const courseMetaPersist = useCourses(state => {
    const course = state.courses.find(course => {
      return course.id === courseDetails?.id
    })

    return course?.meta
  })

  const toggleCourseLike = useCourses(state => state.toggleCourseLike)

  const LikeIcon = defineLikeIcon(!!courseMetaPersist?.isLiked)

  return (
    <Container maxW={'container.md'} sx={{ scrollMarginTop: 28 }}>
      <ButtonGroup spacing={2.5}>
        <Button
          as={Link}
          to={'/courses'}
          leftIcon={<ArrowUpLeftIcon width={16} />}
          variant={'outline'}
          size={'sm'}
        >
          Повернутись
        </Button>

        <Button
          leftIcon={<LikeIcon width={16} />}
          variant={'outline'}
          size={'sm'}
          colorScheme={courseMetaPersist?.isLiked ? 'pink' : 'gray'}
          isActive={courseMetaPersist?.isLiked}
          onClick={() => {
            if (courseDetails) {
              toggleCourseLike(courseDetails.id)
            }
          }}
        >
          Вподобайка
        </Button>

        <Button
          leftIcon={<SignalIcon width={16} />}
          variant={'outline'}
          size={'sm'}
          isDisabled
        >
          Поділитись
        </Button>
      </ButtonGroup>
    </Container>
  )
}
