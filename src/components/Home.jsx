import React from 'react'
import jatin from '../images/jatin1.png';
import { FaArrowRight } from "react-icons/fa6";

import {Link} from "react-scroll";

function Home() {
  return (
	<div name="Home" className='h-screen w-full bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 '>
	<div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
		<div className='flex flex-col justify-center h-full'>
		<h2 className='text-4xl sm:text-7xl font-semibold text-white'>I'm a Frontend Developer</h2>
		<p className='text-gray-900 py-4  '>
		Hi, I'm a passionate front-end developer with HTML, CSS, JavaScript, and React. I love creating intuitive, responsive web applications that provide seamless user experiences. Explore my projects to see what I've been working on. Let's build something great together!
		</p>
		
	
		<div>
		<Link to='Projects' duration={500} smooth 
		className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md   
	     bg-gradient-to-r from-cyan-400 to-slate-900 cursor-pointer gap-2 group'>
			Projects
			<span className='group-hover:rotate-90 duration-300 ml-1'> <FaArrowRight size={15}/></span>
			 </Link>
		</div>
		</div>

		<div>
			<img src={jatin} alt="" className='rounded-2xl mx-auto w-2/3 md:w-full' />
		</div>
	</div>
	</div>
  )
}

export default Home