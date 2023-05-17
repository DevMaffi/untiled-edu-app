import { useRef } from 'react'

import { Box, Divider, HStack } from '@chakra-ui/react'

import { Logo } from '@/components'
import { useIsFirstRender, useObserver } from '@/hooks'

import { ThemeToggleButton } from '@/modules/theme'

export default function PageHeader() {
  const elementRef = useRef<HTMLDivElement | null>(null)

  const firstRender = useIsFirstRender()
  const entry = useObserver(elementRef)

  const scrolls = !firstRender && !entry?.isIntersecting

  return (
    <>
      <Box
        ref={elementRef}
        sx={{
          pos: 'absolute',
          top: 0,
          insetX: 0,
          height: 20,
        }}
      />

      <Box
        as={'header'}
        sx={{
          pos: 'sticky',
          top: 0,
          insetX: 0,
          bgColor: 'chakra-body-bg',
          zIndex: 1000,
        }}
      >
        <HStack
          sx={{
            justifyContent: 'space-between',
            py: scrolls ? 3.5 : 10,
            px: 20,
            transition: 'all 400ms',
          }}
        >
          <Logo />
          <ThemeToggleButton />
        </HStack>

        <Divider />
      </Box>
    </>
  )
}
