import React from 'react'
import css from "../images/css.png";
import github from "../images/github.png";
import html from "../images/html.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";

function Skills() {


	const logos = [
		{
			id: 1,
			src: css,
			title: 'CSS',
			style: 'shadow-blue-900'
		},
		{
			id: 2,
			src: react,
			title: 'REACT',
			style: 'shadow-blue-900'
		},
		{
			id: 3,
			src: javascript,
			title: 'JAVASCRIPT',
			style: 'shadow-yellow-900'
		},
		{
			id: 4,
			src: tailwind,
			title: 'TAILWIND',
			style: 'shadow-sky-900'
		},
		{
			id: 5,
			src: github,
			title: 'GITHUB',
			style: 'shadow-blue-900'
		},
		{
			id: 6,
			src: html,
			title: 'HTML',
			style: 'shadow-orange-900'
		},

	]

	return (
		<div name="Skills" className='w-full h-screen bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500'>
			<div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full  h-full text-white'>
				<div>

					<p className='text-4xl font-bold p-2 inline border-b-4'>Skills</p>
					<p className='py-6 text-lg'>These are Skills , In Which I have Basic Commands</p>

				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 text-center px-12 sm:px-0'>
					{logos.map((d, i) => (
						<div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${d.style}`} key={i}>
							<img className='w-20 mx-auto' src={d.src} alt="" />
							<p >{d.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Skills