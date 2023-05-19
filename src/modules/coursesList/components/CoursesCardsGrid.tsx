import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  SimpleGrid,
} from '@chakra-ui/react'

import CoursesCardsGridSkeleton from '@/modules/coursesList/components/CoursesCardsGridSkeleton'
import { CoursesCard } from '@/modules/coursesList/components/card'

import {
  useCoursesFetch,
  useCoursesDataProcessor,
} from '@/modules/coursesList/hooks'

export default function CoursesCardsGrid() {
  const [courses, areCoursesLoading, error, isIntersected] = useCoursesFetch()
  const processedCourses = useCoursesDataProcessor()

  if (areCoursesLoading || !isIntersected) {
    return <CoursesCardsGridSkeleton />
  }

  if (error) {
    return (
      <Alert status={'error'}>
        <AlertIcon />
        <AlertTitle>Courses loading error!</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  if (!processedCourses.length) {
    return (
      <Alert status={'info'}>
        <AlertIcon />
        <AlertDescription>Жодного курсу не знайдено :{'('}</AlertDescription>
      </Alert>
    )
  }

  return (
    <SimpleGrid columns={3} spacing={8}>
      {processedCourses.map(course => (
        <CoursesCard
          key={course.id}
          id={course.id}
          title={course.title}
          preview={course.preview}
          tags={course.tags}
          lessonsCount={course.lessonsCount}
          estimate={course.estimate}
          author={course.author}
          meta={course.meta}
        />
      ))}
    </SimpleGrid>
  )
}
