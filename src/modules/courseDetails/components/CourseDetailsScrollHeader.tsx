import { motion, type Variants } from 'framer-motion'
import { Box, Divider } from '@chakra-ui/react'

import { useCourseDetails } from '@/store'

import CourseDetailsActions from '@/modules/courseDetails/components/CourseDetailsActions'

export default function CourseDetailsScrollHeader() {
  const scrolls = useCourseDetails(state => state.scrolls)

  const variants: Variants = {
    idle: { y: '-100%' },
    scrolls: { y: 0 },
  }

  if (!scrolls) return null

  return (
    <motion.header
      style={{
        position: 'absolute',
        insetInline: 0,
        translateY: -2,
        zIndex: -1,
      }}
      variants={variants}
      initial={'idle'}
      animate={'scrolls'}
      transition={{ ease: 'linear' }}
    >
      <Box sx={{ py: 3.5, bgColor: 'chakra-body-bg' }}>
        <CourseDetailsActions />
      </Box>

      <Divider />
    </motion.header>
  )
}
