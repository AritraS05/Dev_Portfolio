import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <section className='w-full py-24' id='achievements'>
      <h2 className='text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl'>
        Achievements<span className='text-[#A855F7]'>.</span>
      </h2>
      <div className='mt-10 flex flex-col items-center'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='fast'
        />
      </div>
    </section>
  )
}

export default Clients
