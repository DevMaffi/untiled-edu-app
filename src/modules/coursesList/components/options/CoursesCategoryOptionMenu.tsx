import _ from 'lodash'

import { useMemo } from 'react'

import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@heroicons/react/24/outline'

import { coursesOptionsModel } from '@/model'
import { useCoursesOptions } from '@/store'

import { defineCoursesCategoryOptionMeta } from '@/helpers'

import { categoryOptions } from '@/data/coursesOptions.json'

export default function CoursesCategoryOptionMenu() {
  const category = useCoursesOptions(state => state.category)
  const setCategory = useCoursesOptions(state => state.setCategory)

  const categoryOptionMeta = defineCoursesCategoryOptionMeta(category)

  const rawCategoryOptions = useMemo(() => {
    return _.toPairs(categoryOptions)
  }, [category])

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon width={16} />}
        variant={'outline'}
        size={'sm'}
      >
        {categoryOptionMeta.label}
      </MenuButton>

      <MenuList>
        <MenuOptionGroup
          value={categoryOptionMeta.value}
          type={'radio'}
          onChange={value =>
            setCategory(value as coursesOptionsModel.CoursesCategoryOptionValue)
          }
        >
          {rawCategoryOptions.map(([value, rawOption]) => (
            <MenuItemOption key={value} value={value}>
              {rawOption.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
