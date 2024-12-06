import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import resume from '../images/Jatin-Resume.pdf'

function Media() {

	const links = [
		{
			id: 1,
			name: (
				<>
					LinkedIn < FaLinkedin size={26} />
				</>
			),
			href: 'https://www.linkedin.com/in/jatin-shakyawar-761654256/',
			style: 'rounded-tr-md'

		},
		{
			id: 2,
			name: (
				<>
					GitHub < FaGithub size={26} />
				</>
			),
			href: 'https://github.com/JatinShakyawar555?tab=repositories',


		},
		{
			id: 3,
			name: (
				<>
					Mail < HiOutlineMail size={26} />
				</>
			),
			href: 'mailto:jatinstech555@gmail.com',


		},
		{
			id: 4,
			name: (
				<>
					Resume < BsFillPersonLinesFill size={26} />
				</>
			),
			href: resume,
			style: 'rounded-br-md',
			download: true,

		},

	]

	return (
		<div className=' md:flex-col top-[35%] left-0 fixed '>
			<ul>

				{links.map(({id, name, href, style, download}) => (
					<li  key={id}
					 className={'flex justify-between items-center w-40 h-14 px-4  bg-zinc-400 ml-[-100px] hover:rounded-lg duration-300 hover:ml-[0.2vw]' + " " + style}>

						<a href={href} className='flex justify-between items-center w-full text-white'
							download={download}
							target='_blank' // allow to open a new tab
							rel={"moreferrer"} // protect from warning of target blank
						>
							{name}
						</a> 
						</li>
				))}
				
				

			</ul>
		</div>
	)
}

export default Media