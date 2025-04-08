import projects from "@/app/dispositions/projects"
import React from 'react'
import Image from 'next/image'
import Webring from '@/app/components/Webring'

export default async function ProjectDetails({ params }: {params: Promise<{id: string}>} ) {
    const { id } = await params

    let foundProject

    for (const project of projects) {
        if (project.id == id) {
            foundProject = project
        }
    }

    return (
        <div className="">
            <div className="flex flex-col pt-14 px-4 justify-start text-black h-screen">
                <Image src={foundProject ? foundProject.image : ''} alt='' className='object-cover w-64 h-64 p-1 bg-orange-300' width={300} height={300} />
                <p>{foundProject?.title}</p>
                <p>{foundProject?.tagline}</p>
            </div>

            <Webring url="https://raw.githubusercontent.com/Google-Developer-Groups-Skyline-College/clubwebring/refs/heads/master/webring.json" title="" current="jarred"></Webring>
        </div>
    )
}
