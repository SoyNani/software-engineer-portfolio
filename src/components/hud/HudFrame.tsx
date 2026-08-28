'use client'

import { useEffect, useState } from 'react'
import styles from './HudFrame.module.css'

export default function HudFrame() {
  const [coords, setCoords] = useState({ x: 0.0762, y: 0.0022 })
  const [time, setTime] = useState('--:--')

  useEffect(() => {
    const handleScroll = () => {
      const scrollEl = document.querySelector('[data-content-scroll]')
      if (!scrollEl) return
      const el = scrollEl as HTMLElement
      const scrollY = el.scrollTop
      const maxScroll = el.scrollHeight - el.clientHeight
      const progress = scrollY / (maxScroll || 1)
      setCoords({
        x: parseFloat((0.0762 + progress * 0.4).toFixed(4)),
        y: parseFloat((0.0022 + progress * 0.2).toFixed(4)),
      })
    }

    const tick = () => {
      const now = new Date()
      setTime(
        `${String(now.getHours()).padStart(2, '0')}${String(
          now.getMinutes()
        ).padStart(2, '0')}`
      )
    }
    tick()
    const timeInterval = setInterval(tick, 1000)

    const scrollEl = document.querySelector('[data-content-scroll]')
    scrollEl?.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      scrollEl?.removeEventListener('scroll', handleScroll)
      clearInterval(timeInterval)
    }
  }, [])

  return (
    <div className={styles.hudFrame} aria-hidden="true">
      <div className={styles.frameTop}>
        <div className={styles.hudStatus}>
          <span className={styles.hudDiamond}>◆</span>
          <span className={styles.hudLabel}>{time}</span>
        </div>

        <div className={styles.frameTopNotch}>
          <span className={styles.hudTitle}>NANI // MISSION</span>
        </div>

        <div className={styles.hudMenu}>MENU</div>
      </div>

      <div className={styles.frameBottom}>
        <div className={styles.coordsDisplay}>
          X.{String(Math.floor(coords.x * 10000)).padStart(4, '0')} // Y.
          {String(Math.floor(coords.y * 10000)).padStart(4, '0')}
        </div>
      </div>

      <div className={styles.frameLeft}>
        <div className={styles.sideTicks}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={i % 4 === 0 ? styles.tickLg : styles.tick}
            />
          ))}
        </div>
        <div className={`${styles.verticalText} ${styles.sideLabel}`}>G_0015</div>
        <div className={styles.sideTicks}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={i % 3 === 0 ? styles.tickLg : styles.tick}
            />
          ))}
        </div>
      </div>

      <div className={styles.frameRight}>
        <div className={`${styles.verticalText} ${styles.sideLabel}`}>SYS_ON</div>
        <div className={styles.sideTicks}>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={i % 3 === 0 ? styles.tickLg : styles.tick}
            />
          ))}
        </div>
        <div className={`${styles.verticalText} ${styles.sideLabelDim}`}>
          NANI.v2
        </div>
      </div>

      <div className={`${styles.corner} ${styles.cornerTl}`} />
      <div className={`${styles.corner} ${styles.cornerTr}`} />
      <div className={`${styles.corner} ${styles.cornerBl}`} />
      <div className={`${styles.corner} ${styles.cornerBr}`} />
    </div>
  )
}
