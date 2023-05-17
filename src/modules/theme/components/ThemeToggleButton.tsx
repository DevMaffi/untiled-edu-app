import { useColorMode, IconButton } from '@chakra-ui/react'

import { defineThemeIcon } from '@/modules/theme/helpers'

export default function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  const ThemeIcon = defineThemeIcon(colorMode)

  return (
    <IconButton
      aria-label={'Toggle color mode'}
      icon={<ThemeIcon width={20} />}
      size={'md'}
      onClick={toggleColorMode}
    />
  )
}
