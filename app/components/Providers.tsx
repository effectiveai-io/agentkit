'use client'

import type { ReactNode } from 'react'
import { TimerProvider } from './TimerContext'

export function Providers({ children }: { children: ReactNode }) {
  return <TimerProvider>{children}</TimerProvider>
}
