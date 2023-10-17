'use client'

import { useUser } from '@clerk/nextjs'
import { useState, type SetStateAction } from 'react'

import { FLAVORS } from '@/flavors/data'
import { Ticket } from '.'
import { Flavors } from '../Flavors'
import { ShimmerButton } from '../ShimmerButton'

interface TicketHomeProps {
  initialFlavor?: string
}

const TicketHome = ({ initialFlavor }: TicketHomeProps) => {
  const { user } = useUser()
  const [flavorKey, setFlavorKey] = useState('javascript')
  // @ts-expect-error
  const flavor = FLAVORS[flavorKey]

  const changeFlavorKey =
    (selectedFlavorKey: SetStateAction<string>) => async () => {
      setFlavorKey(selectedFlavorKey)
    }

  const handleShare = async () => {
    const intent = 'https://twitter.com/intent/tweet'
    const text = `¡No te pierdas la miduConf!
  Conferencia de Programación y Tecnología.
  
  👩‍💻 7 Speakers TOP
  💬 Charlas para todos los niveles
  🎁 +256 regalos y premios
  ...¡y muchas sorpresas!
  
  Apunta la fecha: 13 de SEPTIEMBRE
  
  https://miduconf.com/ticket/${user?.firstName?.toLocaleLowerCase()}`

    window.open(`${intent}?text=${encodeURIComponent(text)}`)
  }

  return (
    <div className='flex h-full w-full flex-col justify-center gap-y-12'>
      <Ticket
        transition={!initialFlavor}
        number={777}
        flavor={flavor}
        user={{
          name: user?.firstName ?? 'usuario',
          username: user?.username ?? 'usuario',
          avatar: user?.imageUrl ?? ''
        }}
      />

      <div className='mx-auto flex scale-90 flex-col items-center justify-center gap-4 sm:scale-100 md:flex-row'>
        <ShimmerButton
          onClick={handleShare}
          size='large'
        >
          <svg
            className='mr-3'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            strokeWidth='1'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path
              stroke='none'
              d='M0 0h24v24H0z'
              fill='none'
            ></path>
            <path d='M15 5l0 2'></path>
            <path d='M15 11l0 2'></path>
            <path d='M15 17l0 2'></path>
            <path d='M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2'></path>
          </svg>
          !Comparte el evento en Twitter!
        </ShimmerButton>

        <ShimmerButton
          shimmerDuration='0'
          shimmerSize='0'
          type='secondary'
          // onClick={handleGoToDiscord}
          size='large'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-3'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path
              stroke='none'
              d='M0 0h24v24H0z'
              fill='none'
            ></path>
            <path d='M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6'></path>
            <path d='M16 3v4'></path>
            <path d='M8 3v4'></path>
            <path d='M4 11h16'></path>
            <path d='M15 19l2 2l4 -4'></path>
          </svg>
          Guarda la fecha del evento
        </ShimmerButton>
      </div>

      <Flavors
        changeFlavorKey={changeFlavorKey}
        flavorKey={flavorKey}
      />
    </div>
  )
}

export default TicketHome
