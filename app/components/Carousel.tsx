import Image from 'next/image'
import projects from '../dispositions/projects'
import React from 'react'

function CarouselCard({ title, tagline, image, id }: { title: string, tagline: string, image: string, id: string}) {

    return (
        <div className='relative w-[25%] h-full bg-neutral-600'>
            <a href={'/projects/' + id}>
            <div className='absolute w-full bg-black/30 p-2 backdrop-blur-sm bottom-0'>
                <p className='font-bold text-xl'>{title}</p>
                <p className='italic text-lg'>{tagline}</p>
            </div>

            <Image src={image} alt='' className='w-full h-full object-cover' width={400} height={400} />
            </a>
        </div>
    )
}

export function Carousel() {

    return (
        <div className='flex flex-row w-full h-[50%] bg-neutral-500'>

            { projects.map( (project) => {
                return (
                    <CarouselCard title={project.title} tagline={project.tagline} image={project.image} key={project.id} id={project.id} />
                )
            } ) }

        </div>
    )
}