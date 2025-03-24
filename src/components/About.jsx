import React from 'react'

function About() {
  return (
	<div name="About" className='w-full h-screen text-white bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500'>
		<div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
			<div className='pb-8'>
				<p className='text-4xl font-bold inline  border-b-4 border-zinc-400 '>About</p>
			</div>
			<h1 className='text-2xl mt-20'>
			Hi 👋 Jatin Shakyawar Here
			</h1>

			<br />

			<h1 className='text-xl'>
			A Enthusiasm learner living in India ( ajmer ) . Currently, I'm pursuing my Bachelor's degree in ( Computer Applications & IT ) at ( MDSU University ), where I’ve developed a strong passion for web development.
			</h1>

			{/* <h1>
				SCHOOLING
			</h1> */}

		</div>
	</div>
  )
}

export default About