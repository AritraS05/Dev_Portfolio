import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import ProjectCard from './site/project-card'
import { FEATURED_PROJECTS } from '@/data/project-details'

const RecentProjects = () => {
  return (
    <section id='projects' className='w-full py-24'>
      <h2 className='text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl'>
        Selected work<span className='text-[#FA3C23]'>.</span>
      </h2>

      <div className='mt-14 grid gap-x-16 gap-y-20 md:grid-cols-2'>
        {FEATURED_PROJECTS.map((project, i) => {
          // An odd final card would sit alone in the left column — span the
          // row and re-center it at single-column width so it looks balanced.
          const lonelyLast =
            FEATURED_PROJECTS.length % 2 === 1 && i === FEATURED_PROJECTS.length - 1
          return (
            <div
              key={project.slug}
              className={lonelyLast ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-2rem)]' : ''}
            >
              <ProjectCard project={project} />
            </div>
          )
        })}
      </div>

      <div className='mt-20 flex justify-center'>
        <Link
          href='/projects-add'
          className='group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-400'
        >
          A few more projects
          <FaArrowRight className='h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5' />
        </Link>
      </div>
    </section>
  )
}

export default RecentProjects
