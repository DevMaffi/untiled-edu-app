import _ from 'lodash'

import { SimpleGrid, Skeleton } from '@chakra-ui/react'

export default function CoursesCardsGridSkeleton() {
  return (
    <SimpleGrid columns={3} spacing={8}>
      {_.range(3).map(key => (
        <Skeleton key={key} sx={{ height: '428px', borderRadius: 8 }} />
      ))}
    </SimpleGrid>
  )
}