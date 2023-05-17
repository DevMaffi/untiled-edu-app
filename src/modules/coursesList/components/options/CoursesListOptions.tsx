import { Box, Button, HStack, Stack } from '@chakra-ui/react'
import { FunnelIcon } from '@heroicons/react/24/outline'

import CoursesCategoryOptionMenu from '@/modules/coursesList/components/options/CoursesCategoryOptionMenu'
import CoursesTopicTabsMenu from '@/modules/coursesList/components/options/CoursesTopicTabsMenu'

export default function CoursesListOptions() {
  return (
    <HStack sx={{ pos: 'relative', justifyContent: 'space-between' }}>
      <Box sx={{ zIndex: 1 }}>
        <CoursesCategoryOptionMenu />
      </Box>

      <Stack sx={{ pos: 'absolute', inset: 0, alignItems: 'center' }}>
        <CoursesTopicTabsMenu />
      </Stack>

      <Box sx={{ zIndex: 1 }}>
        <Button leftIcon={<FunnelIcon width={16} />} size={'sm'} isDisabled>
          Фільтри
        </Button>
      </Box>
    </HStack>
  )
}
