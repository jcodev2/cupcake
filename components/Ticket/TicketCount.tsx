interface TicketCountProps {
  number: number
}

const TicketCount = ({ number }: TicketCountProps) => {
  return (
    <div className='absolute left-8 top-8 z-10 text-white '>
      <h2 className='text-2xl font-bold'>
        #{number != null ? number.toString().padStart(5, '0') : ''}
      </h2>
    </div>
  )
}

export default TicketCount
