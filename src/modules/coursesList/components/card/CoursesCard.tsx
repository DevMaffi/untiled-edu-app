import { useColorMode, VStack } from '@chakra-ui/react'

import { courseModel } from '@/model'

import CoursesCardPreview from '@/modules/coursesList/components/card/CoursesCardPreview'
import CoursesCardHeader from '@/modules/coursesList/components/card/CoursesCardHeader'
import CoursesCardActions from '@/modules/coursesList/components/card/CoursesCardActions'

type CourseCardProps = courseModel.Course

export default function CoursesCard({
  title,
  previewUrl,
  tags,
  lessonsCount,
  estimate,
  author,
  authorAvaUrl,
  meta,
}: CourseCardProps) {
  const { colorMode } = useColorMode()

  return (
    <VStack sx={{ borderRadius: 8, overflow: 'hidden' }} spacing={0}>
      <CoursesCardPreview title={title} previewUrl={previewUrl} />

      <VStack
        sx={{
          justifyContent: 'space-between',
          width: 'full',
          height: 'full',
          padding: 5,
          borderWidth: 2,
          borderBottomRadius: 8,
          borderColor:
            colorMode === 'light' ? 'backAlpha.100' : 'whiteAlpha.200',
        }}
        spacing={20}
      >
        <CoursesCardHeader
          tags={tags}
          lessonsCount={lessonsCount}
          estimate={estimate}
          author={author}
          authorAvaUrl={authorAvaUrl}
        />
        <CoursesCardActions meta={meta} />
      </VStack>
    </VStack>
  )
}
