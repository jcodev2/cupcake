'use client'

import { useEffect, useState } from 'react'

import { ShareTicketButton } from '@/components/ShareTicketButton'
import { useRemainingTime } from '@/hooks/use-remaining-time.hook'
import { UserButton } from '@clerk/nextjs'

const HeaderCountdown = () => {
  const { seconds, minutes, hours, days } = useRemainingTime(
    new Date(2024, 2, 2, 0, 0, 0),
    {
      fillingZeros: false
    }
  )
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <>
      <div className='relative flex h-14 w-full items-center justify-center overflow-hidden p-2 font-semibold text-primary'>
        <div className='relative z-10 flex items-center justify-center'>
          <div className='flex w-full items-center justify-center gap-3 text-sm md:justify-center md:gap-6 md:text-base'>
            <p>
              <span className='font-bold text-yellow-500'>Empieza en...</span>
            </p>

            <div className='flex items-center gap-1'>
              <div className='flex items-center gap-1'>
                <div className='overflow-hidden rounded-md bg-gradient-to-b p-1'>
                  <div className='flex w-12 items-center justify-center rounded-md bg-gradient-to-b from-primary-foreground to-[#DBB8BF10] p-2 leading-4 backdrop-blur-md'>
                    <span className='m-0'>{show && days}</span>
                    <span>d</span>
                  </div>
                </div>
                :
                <div className='overflow-hidden rounded-md bg-gradient-to-b p-[1px]'>
                  <div className='flex w-11 items-center justify-center rounded-md bg-gradient-to-b from-primary-foreground to-[#DBB8BF10] p-2 leading-4 backdrop-blur-md'>
                    <span className='m-0'>{show && hours}</span>
                    <span>h</span>
                  </div>
                </div>
                :
                <div className='overflow-hidden rounded-md bg-gradient-to-b p-[1px]'>
                  <div className='flex w-11 items-center justify-center rounded-md bg-gradient-to-b from-primary-foreground to-[#DBB8BF10] p-2 leading-4 backdrop-blur-md'>
                    <span className='m-0'>{show && minutes}</span>
                    <span>m</span>
                  </div>
                </div>
                :
                <div className='overflow-hidden rounded-md bg-gradient-to-b p-[1px]'>
                  <div className='flex w-11 items-center justify-center rounded-md bg-gradient-to-b from-primary-foreground to-[#DBB8BF10] p-2 leading-4 backdrop-blur-md'>
                    <span className='m-0'>{show && seconds}</span>
                    <span>s</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden md:block'>
              <ShareTicketButton>Conseguir Ticket</ShareTicketButton>
            </div>

            <div className='hidden md:block'>
              <UserButton afterSignOutUrl='/' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderCountdown
