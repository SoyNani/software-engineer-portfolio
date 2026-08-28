'use client'

import { AVATAR_SRC } from '@/data/avatar-data'

export default function HeroAvatar() {
  return (
    <div className="avatar-hud" aria-hidden="false">
      <div className="avatar-hud-glow" />
      <div className="avatar-hud-ring-outer" />
      <div className="avatar-hud-ring" />
      <div className="avatar-hud-ring-inner" />
      <div className="avatar-hud-core">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={AVATAR_SRC} alt="Laura López" />
      </div>
      {/* corner ticks like HUD frame */}
      <span className="avatar-hud-tick" style={{ top: 8, left: '50%', transform: 'translateX(-50%)' }} />
      <span className="avatar-hud-tick" style={{ bottom: 8, left: '50%', transform: 'translateX(-50%)' }} />
      <span
        className="avatar-hud-tick"
        style={{ left: 8, top: '50%', transform: 'translateY(-50%) rotate(90deg)' }}
      />
      <span
        className="avatar-hud-tick"
        style={{ right: 8, top: '50%', transform: 'translateY(-50%) rotate(90deg)' }}
      />
    </div>
  )
}
