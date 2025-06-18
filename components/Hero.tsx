import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { RiSpeakLine as SpeakIcon } from "react-icons/ri";
import Image from 'next/image'
import AnimationContainer from './animated/animated-container'
const Hero = () => {
  return (
    <AnimationContainer className='mb-8 relative lg:mb-0'>
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20  h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className='flex justify-center relative my-20 z-10 '>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-lg text-center text-blue-100 max-w-80 p-3'>
              Aritra Sarkar
            </h2> 
              {/* <p className="text-sm text-white/80">
              <SpeakIcon className="inline" /> aww-ree-tro
            </p> */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden mb-4">
                <Image
                  src="/profilePic.png"
                  alt="Aritra Sarkar"
                  layout="fill"
                  objectFit="cover"
                  priority // Important for initial load
                />
              </div>
            <p className='text-center md:tracking-wider text-sm md:text-lg lg:text-2xl'>
              Hi, I&apos;m Aritra, a FullStack Developer from India.
            </p>

            <div className='flex items-center gap-2 py-4'>
              <a href="#about">
                <MagicButton 
                  title="About Me"
                  icon = {<FaLocationArrow />}
                  position='right'
                />
              </a>
              <a 
              href="resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              >
                <MagicButton 
                  title="Download Resume"
                  icon = {<FaLocationArrow />}
                  position='right'
                />
              </a>
            </div>
          </div>
        </div>
    </div>
    </AnimationContainer>
  )
}

export default Hero