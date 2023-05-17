import { motion, type Variants } from 'framer-motion'
import { Box, Container, Divider } from '@chakra-ui/react'

import { useCoursesOptions } from '@/store'

import { CoursesListOptions } from '@/modules/coursesList/components/options'

export default function CoursesListScrollHeader() {
  const scrolls = useCoursesOptions(state => state.scrolls)

  const variants: Variants = {
    idle: { y: '-100%' },
    scrolls: { y: 0 },
  }

  if (!scrolls) return null

  return (
    <motion.div
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
      <Container maxW={'container.xl'} sx={{ bgColor: 'chakra-body-bg' }}>
        <Box sx={{ py: 3.5, px: 5 }}>
          <CoursesListOptions />
        </Box>
      </Container>

      <Divider />
    </motion.div>
  )
}
