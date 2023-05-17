import { useEffect, useState, type RefObject } from 'react'

type ReturnType = IntersectionObserverEntry | undefined

export function useObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
  }: IntersectionObserverInit = {}
): ReturnType {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  function updateEntry([entry]: IntersectionObserverEntry[]) {
    setEntry(entry)
  }

  useEffect(() => {
    const node = elementRef.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef.current])

  return entry
}
