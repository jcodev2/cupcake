import { FLAVORS } from '@/flavors/data'

interface FlavorsProps {
  changeFlavorKey: (selectedFlavorKey: string) => () => void
  flavorKey: string
}

const Flavors = ({ changeFlavorKey, flavorKey }: FlavorsProps) => {
  return (
    <div className='z-[99999] w-full opacity-[.99]'>
      <h2 className='mb-4 text-center font-light uppercase text-white opacity-70'>
        Selecciona tu sabor:
      </h2>

      <div className='flex w-full flex-row flex-wrap justify-center gap-x-6 gap-y-12 p-8 text-center'>
        {Object.entries(FLAVORS).map(([key, flavor]) => {
          return (
            <button
              key={key}
              className={`group relative flex h-16 w-16 cursor-pointer transition
              ${
                key === flavorKey
                  ? 'pointer-events-none scale-125 contrast-125 before:absolute before:inset-x-0 before:-top-4 before:mx-auto before:h-2 before:w-2 before:rounded-full before:bg-yellow-500'
                  : ''
              }
              `}
              onClick={changeFlavorKey(key)}
            >
              <figure className='flex h-16 w-16 items-center justify-center transition group-hover:scale-110'>
                <flavor.component className='h-auto w-full' />
              </figure>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Flavors
