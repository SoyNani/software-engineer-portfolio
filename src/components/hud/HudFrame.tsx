'use client'

import { useEffect, useState } from 'react'

export default function HudFrame() {
  const [coords, setCoords] = useState({ x: 0.0762, y: 0.0022 })
  const [time, setTime] = useState('OFF')

  useEffect(() => {
    const handleScroll = () => {
      const scrollEl = document.querySelector('.content-scroll')
      if (!scrollEl) return
      const scrollY = (scrollEl as HTMLElement).scrollTop
      const maxScroll =
        (scrollEl as HTMLElement).scrollHeight -
        (scrollEl as HTMLElement).clientHeight
      const progress = scrollY / (maxScroll || 1)
      setCoords({
        x: parseFloat((0.0762 + progress * 0.4).toFixed(4)),
        y: parseFloat((0.0022 + progress * 0.2).toFixed(4)),
      })
    }

    const timeInterval = setInterval(() => {
      const now = new Date()
      setTime(
        `${String(now.getHours()).padStart(2, '0')}${String(
          now.getMinutes()
        ).padStart(2, '0')}`
      )
    }, 1000)

    const scrollEl = document.querySelector('.content-scroll')
    scrollEl?.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      scrollEl?.removeEventListener('scroll', handleScroll)
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <div className="hud-frame" aria-hidden="true">
      <div className="frame-top">
        <div className="hud-status">
          <span style={{ marginRight: 12, color: '#8a8a94' }}>◆</span>
          <span className="hud-label">{time}</span>
        </div>

        <div className="frame-top-notch">
          <span className="hud-title">NANI // MISSION</span>
        </div>

        <div className="hud-menu">MENU</div>
      </div>

      <div className="frame-bottom">
        <div className="coords-display">
          X.{String(Math.floor(coords.x * 10000)).padStart(4, '0')} // Y.
          {String(Math.floor(coords.y * 10000)).padStart(4, '0')}
        </div>
      </div>

      <div className="frame-left">
        <div className="side-ticks">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={i % 4 === 0 ? 'tick-lg' : 'tick'} />
          ))}
        </div>
        <div className="vertical-text" style={{ margin: '16px 0', color: '#8a8a94' }}>
          G_0015
        </div>
        <div className="side-ticks">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={i % 3 === 0 ? 'tick-lg' : 'tick'} />
          ))}
        </div>
      </div>

      <div className="frame-right">
        <div className="vertical-text" style={{ color: '#8a8a94', marginBottom: 16 }}>
          SYS_ON
        </div>
        <div className="side-ticks">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={i % 3 === 0 ? 'tick-lg' : 'tick'} />
          ))}
        </div>
        <div className="vertical-text" style={{ color: '#5a5a64', marginTop: 16 }}>
          NANI.v2
        </div>
      </div>

      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />
    </div>
  )
}
