import React from 'react'

function Contact() {
  return (
	<div name="Contact" className='p-4 w-full h-screen text-white bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500'>
		<div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
			<div className='pb-8'>
				<p className='text-4xl font-bold inline border-bottom-4 border-b-4'>Contact</p>
				<p className='py-6 text-lg'>Submit the Form Below To Get Hire Me</p>
			</div>

			<div className='flex justify-center items-center'>
				<form action="https://getform.io/f/bnllkzzb" method='POST' className='flex flex-col w-full md:w-1/2'>
					<input type="text" name='name' placeholder='Please Enter Your Name'
					className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
					
					<input type="text" name='email' placeholder='Please Enter Your Email'
					className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' />

					<textarea name="message"  rows="10" 
					className='p-2 bg-transparent text-white focus:outline-none border-2 '
					placeholder='Enter Your Message '>
                                                           
					</textarea>

					<button className='px-6 py-3 text-white bg-gradient-to-r from-cyan-400 to-blue-700 my-8 mx-auto hover:scale-125 duration-500'>Hire Me</button>

				</form>
			</div>
		</div>
	</div>
  )
}

export default Contact