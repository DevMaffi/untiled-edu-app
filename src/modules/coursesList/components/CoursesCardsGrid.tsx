import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  SimpleGrid,
} from '@chakra-ui/react'

import { useIsFirstRender } from '@/hooks'

import CoursesCardsGridSkeleton from '@/modules/coursesList/components/CoursesCardsGridSkeleton'
import { CoursesCard } from '@/modules/coursesList/components/card'

import {
  useCoursesFetch,
  useCoursesDataProcessor,
} from '@/modules/coursesList/hooks'

export default function CoursesCardsGrid() {
  const isFirstRender = useIsFirstRender()

  const [courses, areCoursesLoading, error, isIntersected] = useCoursesFetch()
  const processedCourses = useCoursesDataProcessor()

  if (areCoursesLoading || !isIntersected) {
    return <CoursesCardsGridSkeleton />
  }

  if ((!isFirstRender && !courses.length) || error) {
    return (
      <Alert
        status={'error'}
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minH: '180px',
          textAlign: 'center',
        }}
        variant={'subtle'}
      >
        <AlertIcon boxSize={'40px'} />
        <AlertTitle sx={{ mt: 4, mb: 2, fontSize: 'lg' }}>
          Courses loading error!
        </AlertTitle>
        <AlertDescription sx={{ maxW: 'xl' }}>{error}</AlertDescription>
      </Alert>
    )
  }

  if (!processedCourses.length) {
    return (
      <Alert
        status={'info'}
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minH: '180px',
          textAlign: 'center',
        }}
        variant={'subtle'}
      >
        <AlertIcon boxSize={'40px'} />
        <AlertTitle sx={{ mt: 4, mb: 2, fontSize: 'lg' }}>
          Курсів не знайдено!
        </AlertTitle>
        <AlertDescription sx={{ maxW: 'lg' }}>
          Жодного курсу за вказаними параметрами не знайдено. Спробуйте змінити
          деякі параметри або зменшити складність запиту.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
