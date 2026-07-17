import AnimatedName from './animated/animated-name'
import CurrentlyLine from './animated/currently-line'

const Hero = () => {
  return (
    <section className='relative flex min-h-screen w-full flex-col items-center justify-center pb-16 pt-28'>
      <AnimatedName className='mb-10' />

      <p className='mx-auto max-w-2xl text-center text-xl font-bold leading-snug tracking-tight text-neutral-900 md:text-[26px]'>
        Software Engineer from India
      </p>

      <CurrentlyLine className='mt-5' />

      <div className='mt-12 flex items-center justify-center gap-4'>
        <a href='#projects' className='group flex items-center'>
          <span className='z-10 grid h-11 w-11 -rotate-6 place-items-center rounded-xl bg-neutral-900 text-lg font-black text-white shadow-[0.2rem_0.2rem_0_#FA3C23,-0.2rem_0.2rem_0_#0D8BFF] transition-transform duration-300 group-hover:rotate-0'>
            A<span className='text-[#FA3C23]'>.</span>
          </span>
          <span className='-ml-2 rounded-full border border-neutral-200 bg-white py-2.5 pl-5 pr-5 text-sm font-medium text-neutral-800 transition-colors group-hover:border-neutral-400'>
            My work
          </span>
        </a>

        <a
          href='/resume'
          className='rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700'
        >
          About Me
        </a>
      </div>
    </section>
  )
}

export default Hero
