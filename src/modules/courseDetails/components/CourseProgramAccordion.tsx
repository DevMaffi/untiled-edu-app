import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react'

import { useCourseDetails } from '@/store'

export default function CourseProgramAccordion() {
  const courseDetails = useCourseDetails(state => state.courseDetails)

  return (
    <Accordion defaultIndex={[0]}>
      {courseDetails?.details?.accordion.map(item => (
        <AccordionItem key={item.id}>
          <Box as={'h2'}>
            <AccordionButton>
              <Box as={'span'} sx={{ flex: 1, textAlign: 'left' }}>
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Box>

          <AccordionPanel pb={4}>
            <VStack sx={{ alignItems: 'start' }} spacing={3.5}>
              {item.description.map((paragraph, index) => (
                <Text key={index} sx={{ fontSize: 'md' }}>
                  {paragraph}
                </Text>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
