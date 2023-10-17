'use client'

import 'atropos/css'

import { Atropos } from 'atropos/react'

import { Logo } from '@/components/Logo'
import { Codely } from '@/components/Sponsors/Codely'
import { DonDominio } from '@/components/Sponsors/DonDominio'
import { LemonCode } from '@/components/Sponsors/LemonCode'
import { Malt } from '@/components/Sponsors/Malt'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import TicketCount from './TicketCount'
import TicketPattern from './TicketPattern'

interface TicketProps {
  transition?: boolean
  number: number
  flavor: {
    component: ({ className }: { className: string }) => JSX.Element
    colors: {
      ticket: string
      border: string
      text: string
      month: string
      time: string
    }
    figure?: string
  }
  user: {
    name: string | null
    username: string | null
    avatar: string | null
  }
}

const Ticket = ({
  transition,
  number,
  flavor: {
    component: Component,
    colors: { border, month, text, ticket, time },
    figure
  },
  user: { avatar, name, username }
}: TicketProps) => {
  return (
    <Atropos id='#ticket'>
      <div
        className={`relative flex aspect-video h-full w-full flex-col items-center justify-start rounded-xl border-[6px]
        ${transition && 'transition duration-500 ease-in-out'}
        ${border}
        ${ticket}`}
      >
        <TicketCount number={number} />

        <div className='absolute inset-0 -z-10 h-full w-full overflow-hidden [mask-image:linear-gradient(black_10%,transparent)]'>
          <TicketPattern />
        </div>

        <div className='absolute inset-0 -z-20 h-full w-full overflow-hidden bg-black' />

        <Logo
          title='jean'
          subtitle='Conf'
        />

        <div className='absolute bottom-2 left-20 z-[1000] hidden items-center overflow-hidden p-4 opacity-100 md:block md:p-6'>
          <span className='mb-4 block text-left text-xs font-medium uppercase text-white'>
            Gracias a:
          </span>

          <div className='flex flex-row items-center gap-x-6'>
            <Codely className='h-auto w-36' />
            <DonDominio className='h-auto w-36' />
            <Malt className='h-auto w-32' />
            <LemonCode className='h-auto w-36' />
          </div>
        </div>

        <h4 className={`mb-4 text-xl font-semibold ${text}`}>
          Fiesta de Cumpleaños con borrachera incluida
        </h4>

        <p className={`text-2xl font-semibold ${text}`}>@jeanc.dev</p>

        <div className='absolute bottom-2 left-4 flex flex-col items-center justify-center gap-x-2 p-4'>
          <p
            className={`text-xl font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] ${month}`}
          >
            MAR
          </p>
          <p className='text-4xl font-semibold text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]'>
            02
          </p>
          <p
            className={`text-xl font-semibold ${time} [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]`}
          >
            6PM
          </p>
        </div>

        <div className='absolute -bottom-8 -right-8 -z-10 flex h-full items-end overflow-hidden rounded-r-2xl opacity-30'>
          <figure
            className={`${figure} -z-10 h-48 w-48 -rotate-6 p-8 md:h-96 md:w-96`}
          >
            <Component className='h-auto w-full' />
          </figure>
        </div>

        <div className='absolute right-4 top-4 z-10 flex h-full flex-col items-start overflow-hidden rounded-l-2xl'>
          <div className='flex flex-col items-center justify-center'>
            <Avatar className='h-16 w-16'>
              <AvatarImage src={avatar ?? ''} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className='text-xs font-bold text-white'>
              @{name?.toLowerCase() ?? 'usuario'}
            </p>
          </div>
        </div>
      </div>
    </Atropos>
  )
}

export default Ticket
