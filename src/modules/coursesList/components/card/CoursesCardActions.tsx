import { Link } from 'react-router-dom'

import { Button, ButtonGroup, IconButton, HStack } from '@chakra-ui/react'
import { SignalIcon, PlayIcon } from '@heroicons/react/24/outline'

import { courseModel } from '@/model'

import { useCourses } from '@/store'
import { defineLikeIcon } from '@/helpers'

type CoursesCardActionsProps = {
  id: string
  meta: courseModel.CourseMeta
}

export default function CoursesCardActions({
  id,
  meta,
}: CoursesCardActionsProps) {
  const toggleCourseLike = useCourses(state => state.toggleCourseLike)

  const LikeIcon = defineLikeIcon(meta.isLiked)

  return (
    <HStack sx={{ justifyContent: 'space-between', width: 'full' }}>
      <ButtonGroup spacing={2.5}>
        <Button
          leftIcon={<LikeIcon width={20} />}
          variant={'outline'}
          size={'md'}
          colorScheme={meta.isLiked ? 'pink' : 'gray'}
          isActive={meta.isLiked}
          onClick={() => toggleCourseLike(id)}
        >
          Вподобайка
        </Button>
        <Button
          leftIcon={<SignalIcon width={20} />}
          variant={'outline'}
          size={'md'}
          isDisabled
        >
          Поді...
        </Button>
      </ButtonGroup>

      <IconButton
        as={Link}
        to={`/courses/${id}`}
        aria-label={'Start course'}
        icon={<PlayIcon width={24} />}
        sx={{ color: 'inherit' }}
        size={'lg'}
        colorScheme={'brand'}
        isRound
      />
    </HStack>
  )
}
