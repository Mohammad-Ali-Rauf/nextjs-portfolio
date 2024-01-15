import React from 'react'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
			<div className='container p-12 flex justify-between'>
				<span>MOHAMMAD ALI</span>
				<p className='text-slate-600'>
					&copy; {currentYear} Mohammad Ali. All Rights Reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
