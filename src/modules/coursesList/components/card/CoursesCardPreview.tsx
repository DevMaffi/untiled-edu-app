import { Heading, Stack } from '@chakra-ui/react'

type CoursesCardPreviewProps = {
  title: string
  previewUrl: string
}

export default function CoursesCardPreview({
  title,
  previewUrl,
}: CoursesCardPreviewProps) {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        width: 'full',
        minH: '180px',
        px: 4,
        bgImage: previewUrl,
        bgSize: 'cover',
      }}
    >
      <Heading
        noOfLines={2}
        sx={{ fontWeight: 'semibold' }}
        size={{ base: 'lg', lg: 'md', xl: 'lg' }}
      >
        {title}
      </Heading>
    </Stack>
  )
}
