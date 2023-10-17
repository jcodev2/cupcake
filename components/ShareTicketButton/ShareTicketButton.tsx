import Link from 'next/link'
import React from 'react'

interface ShareTicketButtonProps {
  children: React.ReactNode
  size?: 'small' | 'large'
}

function ShareTicketButton({
  children,
  size = 'small'
}: ShareTicketButtonProps) {
  return (
    <Link
      href='/'
      className='group relative inline-flex h-8 overflow-hidden rounded-full transition hover:scale-105 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary'
    >
      <span
        className={`${size === 'small' && 'px-3 py-1 text-sm'} ${
          size === 'large' && 'px-6 py-4 text-xl'
        } inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary-foreground font-semibold text-primary backdrop-blur-3xl group-hover:text-secondary-foreground`}
      >
        {children}
      </span>
    </Link>
  )
}

export default ShareTicketButton
