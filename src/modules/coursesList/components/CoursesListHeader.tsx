import { Box, Button, HStack } from '@chakra-ui/react'
import { FunnelIcon } from '@heroicons/react/24/outline'

import {
  CoursesCategoryOptionMenu,
  CoursesTopicTabsMenu,
} from '@/modules/coursesList/components/options'

export default function CoursesListHeader() {
  return (
    <HStack sx={{ pos: 'relative', justifyContent: 'space-between' }}>
      <Box sx={{ zIndex: 1 }}>
        <CoursesCategoryOptionMenu />
      </Box>

      <Box
        sx={{
          pos: 'absolute',
          inset: 0,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CoursesTopicTabsMenu />
      </Box>

      <Box sx={{ zIndex: 1 }}>
        <Button leftIcon={<FunnelIcon width={16} />} size={'sm'} isDisabled>
          Фільтри
        </Button>
      </Box>
    </HStack>
  )
}
