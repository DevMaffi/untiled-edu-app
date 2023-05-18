import { Badge, Image, Highlight, HStack, Text, VStack } from '@chakra-ui/react'

import { courseModel } from '@/model'

import { convertMinutesToHHMM } from '@/modules/coursesList/helpers'

type CoursesCardHeaderProps = {
  tags: courseModel.CourseTag[]
  lessonsCount: number
  estimate: number
  author: string
  authorAvaUrl: string
}

export default function CoursesCardHeader({
  tags,
  lessonsCount,
  estimate,
  author,
  authorAvaUrl,
}: CoursesCardHeaderProps) {
  return (
    <HStack
      as={'header'}
      sx={{ justifyContent: 'space-between', width: 'full' }}
      spacing={8}
    >
      <VStack sx={{ alignItems: 'start' }} spacing={2.5}>
        <HStack sx={{ flexWrap: 'wrap', gap: 2 }} spacing={0}>
          {tags.map(tag => (
            <Badge
              key={tag.id}
              sx={{
                fontSize: 'sm',
                fontWeight: 'semibold',
                textTransform: 'none',
              }}
              colorScheme={tag.color}
            >
              {tag.label}
            </Badge>
          ))}
        </HStack>

        <VStack sx={{ alignItems: 'start' }} spacing={1}>
          <Text noOfLines={1} sx={{ fontSize: 'sm' }}>
            {lessonsCount} lessons | {convertMinutesToHHMM(estimate)}
          </Text>

          <Text noOfLines={1} sx={{ fontSize: 'sm' }}>
            <Highlight
              query={author}
              styles={{ fontWeight: 'semibold', color: 'inherit' }}
            >
              {`with ${author}`}
            </Highlight>
          </Text>
        </VStack>
      </VStack>

      <Image
        src={authorAvaUrl}
        sx={{
          width: 14,
          height: 'auto',
          borderRadius: 'full',
          objectFit: 'contain',
        }}
        alt={'Author ava'}
      />
    </HStack>
  )
}
