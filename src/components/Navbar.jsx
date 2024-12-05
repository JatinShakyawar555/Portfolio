import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {

	const [nav, setnav] = useState(false)

	const links = [
		{
			id: 1,
			link: 'Home'
		},
		{
			id: 2,
			link: 'About'
		},
		{
			id: 3,
			link: 'Projects'
		},
		{
			id: 4,
			link: 'Skills'
		},
		{
			id: 5,
			link: 'Contact'
		},
	]
    
	useGSAP(() => {
		gsap.from(".nav", {
		   y:-60,
		   delay:0.5,
		   duration:2,
		  ease: "bounce.out",
		});
		

	  });

	  
    

	return (
		<div className='px-4 flex justify-between items-center w-full h-20 text-white fixed bg-[#10888c9c] '>
			<div className='text-4xl font-Great-Vibes ml-2 jatin '>Jatin Shakyawar</div>

			<ul className='hidden md:flex nav'>

				{links.map((d,i ) => (
					<li 
						className='px-4 cursor-pointer text-lg capitalize font-medium text-wh hover:scale-110 duration-200' key={d.id}>

				  <Link to={d.link} duration={500}>{d.link}</Link>
				</li>
				))}
			</ul>

			<div onClick={() => setnav(!nav)}
				className='cursor-pointer pr-4 z-10 text-black md:hidden'>
				{nav ? <FaTimes size={30} /> : <FaBars size={30}/> }
			</div>


			{nav && (
				<ul
				className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen text-gray-400 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500'>


				{links.map(link => (
					<li
					className='cursor-pointer px-4 capitalize py-6 text-4xl' key={link.id}><Link onClick={()=>setnav(!nav)} to={link.link} duration={500}>{link.link}</Link></li>
				))}
				
			</ul>

			)}

			
		</div>
	)
}

export default Navbar


