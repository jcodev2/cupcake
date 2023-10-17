import { Header } from '@/components/Header'
import { Meteors } from '@/components/Meteors'

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meteors />

      <Header />

      <main className='m-auto mt-4 min-h-screen max-w-5xl p-4 pb-20'>
        {children}
      </main>
    </>
  )
}

export default RootLayout
