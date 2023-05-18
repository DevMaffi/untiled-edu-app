import moment from 'moment'

export function convertMinutesToHHMM(minutes: number): string {
  const duration = moment.duration(minutes, 'minutes')

  const hours = Math.floor(duration.asHours())
  const mins = Math.floor(duration.asMinutes()) % 60

  const formattedTime = `${hours} годин ${mins} хв`
  return formattedTime
}
