import { Box, Container, Skeleton, VStack } from '@chakra-ui/react'

export default function CoursePageIntroSkeleton() {
  return (
    <Box sx={{ py: 20 }}>
      <Container maxW={'container.md'}>
        <VStack sx={{ alignItems: 'end' }} spacing={6}>
          <VStack sx={{ alignItems: 'end' }} spacing={2.5}>
            <Skeleton sx={{ width: '460px', height: '43px' }} />
            <Skeleton sx={{ width: '380px', height: '43px' }} />
          </VStack>

          <VStack sx={{ alignItems: 'end' }} spacing={2.5}>
            <Skeleton sx={{ width: '560px', height: '26px' }} />
            <Skeleton sx={{ width: '560px', height: '26px' }} />
            <Skeleton sx={{ width: '480px', height: '26px' }} />
          </VStack>

          <Skeleton sx={{ width: '380px', height: '56px' }} />
        </VStack>
      </Container>
    </Box>
  )
}
