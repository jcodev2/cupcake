import { CalendarHeart, Gift, PartyPopper } from 'lucide-react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className='mb-10 flex items-center justify-between'>
      <Link
        className='mb-2  mr-2 inline-flex scale-90 cursor-pointer flex-row items-center justify-center gap-x-2 rounded-lg px-5 py-2.5 text-center font-medium text-white opacity-90 transition-all duration-200 ease-in-out hover:scale-100 hover:bg-yellow-600 hover:opacity-100 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-500/50'
        href='/'
      >
        <CalendarHeart className='h-5 w-5' />
        Ver agenda del evento
      </Link>
      <Link
        className='mb-2  mr-2 inline-flex scale-90 cursor-pointer flex-row items-center justify-center gap-x-2 rounded-lg px-5 py-2.5 text-center font-medium text-white opacity-90 transition-all duration-200 ease-in-out hover:scale-100 hover:bg-yellow-600 hover:opacity-100 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-500/50'
        href='/'
      >
        <Gift className='h-5 w-5' />
        Ver los 256 regalos
      </Link>
      <Link
        className='mb-2  mr-2 inline-flex scale-90 cursor-pointer flex-row items-center justify-center gap-x-2 rounded-lg px-5 py-2.5 text-center font-medium text-white opacity-90 transition-all duration-200 ease-in-out hover:scale-100 hover:bg-yellow-600 hover:opacity-100 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-500/50'
        href='/'
      >
        <PartyPopper className='h-5 w-5' />
        Descubrir a los participantes
      </Link>
    </nav>
  )
}

export default Navigation
