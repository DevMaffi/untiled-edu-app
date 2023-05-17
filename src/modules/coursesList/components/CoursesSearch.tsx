import {
  Icon,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from '@chakra-ui/react'

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { useCoursesOptions } from '@/store'

export default function CoursesSearch() {
  const searchQuery = useCoursesOptions(state => state.searchQuery)
  const setSearchQuery = useCoursesOptions(state => state.setSearchQuery)

  return (
    <InputGroup size={'md'}>
      <InputLeftElement pointerEvents={'none'}>
        <Icon as={MagnifyingGlassIcon} boxSize={5} />
      </InputLeftElement>

      <Input
        value={searchQuery}
        placeholder={'Search by name...'}
        sx={{ borderRadius: 6 }}
        variant={'filled'}
        onChange={evt => setSearchQuery(evt.target.value)}
      />

      {searchQuery && (
        <InputRightElement>
          <IconButton
            aria-label={'Reset search'}
            icon={<XMarkIcon width={16} />}
            variant={'ghost'}
            size={'xs'}
            onClick={() => setSearchQuery('')}
          />
        </InputRightElement>
      )}
    </InputGroup>
  )
}
