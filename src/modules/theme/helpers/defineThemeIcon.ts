import { type ColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export function defineThemeIcon(colorMode: ColorMode) {
  return colorMode === 'light' ? MoonIcon : SunIcon
}
