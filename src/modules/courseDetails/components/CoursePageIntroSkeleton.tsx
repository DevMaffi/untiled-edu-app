import { Box, Container, Skeleton, VStack } from '@chakra-ui/react'

export default function CoursePageIntroSkeleton() {
  return (
    <Box sx={{ py: 20 }}>
      <Container maxW={'container.md'}>
        <VStack sx={{ alignItems: 'end' }} spacing={6}>
          <VStack sx={{ alignItems: 'end', width: 'full' }} spacing={2.5}>
            <Skeleton
              sx={{ width: { base: 'full', sm: '430px' }, height: '43px' }}
            />
            <Skeleton
              sx={{ width: { base: 'full', sm: '380px' }, height: '43px' }}
            />
          </VStack>

          <VStack sx={{ alignItems: 'end', width: 'full' }} spacing={2.5}>
            <Skeleton
              sx={{ width: { base: 'full', sm: '460px' }, height: '26px' }}
            />
            <Skeleton
              sx={{ width: { base: 'full', sm: '460px' }, height: '26px' }}
            />
            <Skeleton
              sx={{ width: { base: 'full', sm: '440px' }, height: '26px' }}
            />
          </VStack>

          <Skeleton
            sx={{ width: { base: 'full', sm: '380px' }, height: '56px' }}
          />
        </VStack>
      </Container>
    </Box>
  )
}
