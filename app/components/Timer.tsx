'use client'

import { useState, useEffect, useCallback } from 'react'

interface TimerProps {
  minutes: number
  label?: string
}

export function Timer({ minutes, label }: TimerProps) {
  const [totalSeconds, setTotalSeconds] = useState(minutes * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!isRunning || totalSeconds <= 0) return
    const id = setInterval(() => {
      setTotalSeconds((s) => {
        if (s <= 1) {
          setIsRunning(false)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [isRunning, totalSeconds])

  const reset = useCallback(() => {
    setTotalSeconds(minutes * 60)
    setIsRunning(false)
    setHasStarted(false)
  }, [minutes])

  const toggle = useCallback(() => {
    if (!hasStarted) setHasStarted(true)
    setIsRunning((r) => !r)
  }, [hasStarted])

  const addMinute = useCallback(() => {
    setTotalSeconds((s) => s + 60)
  }, [])

  const mm = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
  const ss = String(totalSeconds % 60).padStart(2, '0')
  const isFinished = totalSeconds === 0 && hasStarted
  const progress = hasStarted ? totalSeconds / (minutes * 60) : 1

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 12px',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: 'var(--font-geist-mono, monospace)',
      background: isFinished
        ? 'rgba(239, 68, 68, 0.15)'
        : isRunning
          ? 'rgba(59, 130, 246, 0.1)'
          : 'rgba(128, 128, 128, 0.1)',
      border: `1px solid ${
        isFinished
          ? 'rgba(239, 68, 68, 0.3)'
          : isRunning
            ? 'rgba(59, 130, 246, 0.25)'
            : 'rgba(128, 128, 128, 0.2)'
      }`,
      transition: 'all 0.2s',
    }}>
      {label && (
        <span style={{ fontSize: '13px', opacity: 0.7, fontFamily: 'inherit' }}>
          {label}
        </span>
      )}
      <span style={{
        fontSize: '18px',
        fontWeight: 600,
        letterSpacing: '1px',
        color: isFinished ? '#ef4444' : undefined,
        minWidth: '52px',
        textAlign: 'center',
      }}>
        {mm}:{ss}
      </span>
      <div style={{ display: 'flex', gap: '4px' }}>
        <button
          onClick={toggle}
          style={{
            padding: '2px 8px',
            borderRadius: '4px',
            border: '1px solid rgba(128,128,128,0.3)',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '12px',
            lineHeight: '20px',
          }}
        >
          {isFinished ? '완료' : isRunning ? '⏸' : hasStarted ? '▶' : '시작'}
        </button>
        {hasStarted && (
          <>
            <button
              onClick={addMinute}
              title="+1분"
              style={{
                padding: '2px 6px',
                borderRadius: '4px',
                border: '1px solid rgba(128,128,128,0.3)',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: '12px',
                lineHeight: '20px',
              }}
            >
              +1
            </button>
            <button
              onClick={reset}
              title="초기화"
              style={{
                padding: '2px 6px',
                borderRadius: '4px',
                border: '1px solid rgba(128,128,128,0.3)',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: '12px',
                lineHeight: '20px',
              }}
            >
              ↺
            </button>
          </>
        )}
      </div>
    </div>
  )
}
