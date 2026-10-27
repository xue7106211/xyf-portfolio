/**
 * Lightweight Gradient Text equivalent (affectUI Gradient Text is Pro).
 * Respects prefers-reduced-motion by showing a static gradient fill.
 */
import type { CSSProperties, ElementType, ReactNode } from 'react'

type Props = {
  children: ReactNode
  as?: ElementType
  className?: string
}

export function GradientText({ children, as: Tag = 'span', className = '' }: Props) {
  const style: CSSProperties = {
    backgroundImage:
      'linear-gradient(110deg, var(--accent) 0%, var(--ink) 35%, var(--accent-2) 70%, var(--accent) 100%)',
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  }

  return (
    <Tag className={`gradient-text ${className}`.trim()} style={style}>
      {children}
    </Tag>
  )
}
