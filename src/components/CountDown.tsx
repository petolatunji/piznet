'use client'
import Countdown from 'react-countdown'

const endingDate = new Date('2023-12-25')

const CountDown = () => {
  return (
    <Countdown
      className='font-bold text-5xl text-[#FFBF00]'
      date={endingDate}
    />
  )
}

export default CountDown
