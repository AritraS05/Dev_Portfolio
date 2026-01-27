import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='achievements'>
      <h1 className='heading'>
        Achievements
        {/* <span className='text-purple'> satisfied Clients</span> */}
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='fast'
        />
      </div>
    </div>
  )
}

export default Clients