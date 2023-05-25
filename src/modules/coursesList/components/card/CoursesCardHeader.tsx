import {
  Badge,
  Box,
  Image,
  Highlight,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { courseModel } from '@/model'

import { convertMinutesToHHMM } from '@/modules/coursesList/helpers'

type CoursesCardHeaderProps = {
  tags: courseModel.CourseTag[]
  lessonsCount: number
  estimate: number
  author: courseModel.CourseAuthor
}

export default function CoursesCardHeader({
  tags,
  lessonsCount,
  estimate,
  author,
}: CoursesCardHeaderProps) {
  return (
    <HStack
      as={'header'}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'start',
        width: 'full',
      }}
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
            {lessonsCount} уроків | {convertMinutesToHHMM(estimate)}
          </Text>

          <Text noOfLines={1} sx={{ fontSize: 'sm' }}>
            <Highlight
              query={author.name}
              styles={{ fontWeight: 'semibold', color: 'inherit' }}
            >
              {`від ${author.name}`}
            </Highlight>
          </Text>
        </VStack>
      </VStack>

      <Box sx={{ pt: 2.5 }}>
        <Image
          src={author.avatar.url}
          sx={{
            minW: {
              base: 14,
              sm: 16,
              lg: 14,
              xl: 16,
            },
            width: {
              base: 14,
              sm: 16,
              lg: 14,
              xl: 16,
            },
            height: 'auto',
            borderRadius: 'full',
            objectFit: 'contain',
          }}
          alt={'Author ava'}
        />
      </Box>
    </HStack>
  )
}
