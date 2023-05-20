import { type FunctionComponent, type ReactNode } from 'react'

import { useColorMode, Icon, HStack, Text } from '@chakra-ui/react'

type AnchorButtonProps = {
  children: ReactNode
  to: string
  leftIcon?: FunctionComponent
  rightIcon?: FunctionComponent
}

export default function AnchorButton({
  children,
  to,
  leftIcon,
  rightIcon,
}: AnchorButtonProps) {
  const { colorMode } = useColorMode()

  return (
    <HStack
      as={'a'}
      href={to}
      sx={{
        mt: 3,
        py: 2.5,
        px: 6,
        bgColor: colorMode === 'light' ? 'brand.500' : 'brand.200',
        borderRadius: 'full',
        '&:hover': {
          bgColor: colorMode === 'light' ? 'brand.600' : 'brand.300',
        },
        transition: 'all 400ms',
      }}
      spacing={3}
    >
      {leftIcon && <Icon as={leftIcon} boxSize={6} />}

      <Text sx={{ fontSize: '2xl' }}>{children}</Text>

      {rightIcon && <Icon as={rightIcon} boxSize={6} />}
    </HStack>
  )
}
