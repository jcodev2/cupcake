'use client'

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

interface MeteorsProps {
  number?: number
}

const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<
    Array<{
      top: string
      left: string
      animationDelay: string
      animationDuration: string
    }>
  >([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // get height of container using ref
    const height = ref.current ? ref.current.clientHeight : 0

    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * height) + 'px',
      left: Math.floor(Math.random() * window.innerWidth) + 'px',
      animationDelay: Math.random() * 1 + 0.2 + 's',
      animationDuration: Math.floor(Math.random() * 8 + 2) + 's'
    }))

    setMeteorStyles(styles)
  }, [number])

  return (
    <div
      ref={ref}
      className='absolute inset-0 z-[-100] h-full w-full overflow-hidden'
    >
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          // eslint-disable-next-line tailwindcss/classnames-order
          className={clsx(
            'pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-primary/70 opacity-0 shadow-[0_0_0_1px_#ffffff10]'
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className='pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-primary/50 to-transparent' />
        </span>
      ))}
    </div>
  )
}

export default Meteors
