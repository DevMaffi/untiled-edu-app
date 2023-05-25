import _ from 'lodash'

import { SimpleGrid, Skeleton } from '@chakra-ui/react'

export default function CoursesCardsGridSkeleton() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
      {_.range(6).map(key => (
        <Skeleton key={key} sx={{ height: '428px', borderRadius: 8 }} />
      ))}
    </SimpleGrid>
  )
}
