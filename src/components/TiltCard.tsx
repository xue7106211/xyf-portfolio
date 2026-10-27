/**
 * Lightweight Tilt Card equivalent (affectUI Tilt Card is Pro).
 * Disabled under prefers-reduced-motion and coarse pointers.
 */
import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export function TiltCard({ children, className = '', href, onClick }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (reduce || coarse) return

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width
      const y = (e.clientY - r.top) / r.height
      const rx = (0.5 - y) * 6
      const ry = (x - 0.5) * 8
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`
      el.style.setProperty('--glare-x', `${x * 100}%`)
      el.style.setProperty('--glare-y', `${y * 100}%`)
    }
    const onLeave = () => {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  const style: CSSProperties = {
    transformStyle: 'preserve-3d',
    transition: 'transform 180ms ease-out',
  }

  const cls = `tilt-card ${className}`.trim()

  if (href) {
    return (
      <a ref={ref as never} href={href} className={cls} style={style} onClick={onClick}>
        {children}
        <span className="tilt-card__glare" aria-hidden />
      </a>
    )
  }

  return (
    <article
      ref={ref as never}
      className={cls}
      style={style}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
      <span className="tilt-card__glare" aria-hidden />
    </article>
  )
}
