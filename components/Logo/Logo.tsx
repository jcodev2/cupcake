import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['800'],
  subsets: ['latin']
})

interface LogoProps {
  title: string
  subtitle: string
}

const Logo = ({ title, subtitle }: LogoProps) => {
  return (
    <h1 className='mx-auto mb-0 bg-gradient-to-r bg-clip-text text-center text-[3rem] font-black text-white sm:mt-10 sm:text-[6rem] lg:text-[7rem] xl:pt-6'>
      <span
        className={`text-transparent [-webkit-text-stroke-color:white] [-webkit-text-stroke-width:2px] sm:[-webkit-text-stroke-width:3px] ${poppins.className}`}
      >
        {title}
      </span>
      {subtitle}
    </h1>
  )
}

export default Logo
