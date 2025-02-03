import React from 'react';
import pro1 from '../images/pro1.jpeg';
import pro2 from '../images/pro2.jpeg';

function Projects() {
    const projects = [
        {
            id: 1,
            src: pro1,
            siteLink: "https://flick-screen.vercel.app/",
            codeLink: "https://github.com/JatinShakyawar555/FlickScreen"
        },
        // {
        //     id: 2,
        //     src: pro2,
        //     siteLink: "https://project-20f85.web.app/",
        //     codeLink: "https://github.com/JatinShakyawar555/Gmail-AI-Query-Support"
        // }
    ];

    return (
        <div name="Projects" className='text-white md:h-screen bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 '>Projects</p>
                    <p className='py-6 text-lg'>Explore Some Projects of React</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-12 sm:px-0'>
                    {projects.map(({ id, src, siteLink, codeLink }) => (
                        <div className='shadow-lg shadow-white rounded-xl' key={id}>
                            <img src={src} alt="" className='rounded-md hover:rotate-[360deg] duration-500 object-cover w-full' />
                            <div className='flex items-center justify-center'>
                                <a href={siteLink}
                                   target='_blank'
                                   rel="noopener noreferrer"
                                   className='w-1/2 px-6 py-4 duration-200'>View Site</a>
                                <a href={codeLink}
                                   target='_blank'
                                   rel="noopener noreferrer"
                                   className='w-1/2 px-6 py-4 duration-200'>View Code</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
