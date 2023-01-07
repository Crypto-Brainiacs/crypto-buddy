import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/Navbar.module.css'


const NAV_LINK = [
	
	{
		path:'/',
		display:<div className={`${styles.active}`}>Home</div>
	},
	{
		path:'/',
		display:'Connect'
	},
	{
		path:'/',
		display:'Learn'
	},
	{
		path:'/',
		display:'Earn'
	},
	{
		path:'/',
		display:'Menu'
	},	

]


const Navbar = () =>{

	return(


		<>

			<div className='container-fluid bg-white'>
				<div className='row'>
					<div className={`${styles.menu} ml-3 mt-3`}>
						<div className={`${styles.active}`}>
							<div className=''>
								<i className='bi-house fa-3x'></i>
							</div>
							<div>
								Home
							</div>
						</div>

						<div className={`${styles.links}`}>
							<div className=''>
								<i className='bi-chat-dots fa-3x'></i>
							</div>
							<div>
								Connect
							</div>
						</div>

						<div className={`${styles.links}`}>
							<div className=''>
								<i className='bi-house fa-3x'></i>
							</div>
							<div>
								Learn
							</div>
						</div>

						<div className={`${styles.links}`}>
							<div className=''>
								<i className='bi-currency-exchange fa-3x'></i>
							</div>
							<div>
								Earn
							</div>
						</div>

						<div className={`${styles.links}`}>
							<div className=''>
								<i className='bi-filter-left fa-3x'></i>
							</div>
							<div>
								Menu
							</div>
						</div>
					</div>
				</div>
			</div>

		{/*mobile menu*/}

		<div>
			
		</div>

		</>

	)
}

export default Navbar