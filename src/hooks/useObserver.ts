import { useEffect, useState, type RefObject } from 'react'

type ReturnType = {
  isIntersecting: boolean
  inBellowViewport: boolean
}

export function useObserver(
  elementRef: RefObject<Element>,
  rootMargin = 0
): ReturnType {
  const [entry, setEntry] = useState<ReturnType>({
    isIntersecting: false,
    inBellowViewport: false,
  })

  function updateEntry([entry]: IntersectionObserverEntry[]) {
    setEntry({
      isIntersecting: entry.isIntersecting,
      inBellowViewport: inBellowViewport(elementRef.current, rootMargin),
    })
  }

  useEffect(() => {
    const node = elementRef.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || !node) return

    const observerParams = { rootMargin: rootMargin + 'px' }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()
  }, [elementRef.current])

  return entry
}

function inBellowViewport(element: Element | null, rootMargin = 0): boolean {
  if (!element) return false

  const rect = element.getBoundingClientRect()
  return rect.bottom - rootMargin <= document.documentElement.clientHeight
}
