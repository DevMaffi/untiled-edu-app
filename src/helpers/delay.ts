export function delay(timeout: number): Promise<void> {
  return new Promise<void>(res => {
    setTimeout(() => {
      res()
    }, timeout)
  })
}
