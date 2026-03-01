"use client"

import * as React from "react"

function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = React.useRef<T | null>(null)
  const [inView, setInView] = React.useState(false)

  React.useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        obs.disconnect()
      }
    }, options)

    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return { ref, inView }
}

function useCountUpWhenVisible(target: number, start: boolean, durationMs = 800) {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    if (!start) return

    let raf = 0
    const startTime = performance.now()
    const from = 0

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(from + (target - from) * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, durationMs])

  return value
}

type CountUpProps = {
  to: number
  durationMs?: number
  decimals?: number
  suffix?: string
  observerOptions?: IntersectionObserverInit
  className?: string
  style?: React.CSSProperties
}

export function CountUp({
  to,
  durationMs = 800,
  decimals = 0,
  suffix = "",
  observerOptions,
  className,
  style,
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(
    observerOptions ?? { threshold: 0.3 }
  )
  const v = useCountUpWhenVisible(to, inView, durationMs)

  return (
    <span ref={ref} className={className} style={style}>
      {v.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}