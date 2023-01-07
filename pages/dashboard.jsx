import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Dashboard.module.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import Logo from '../components/Logo/Logo'


const Dashboard = () =>{

	return(

		<>

			<div className={`${styles.wrapper}`}>
				<div className={`${styles.menu} flex-h-new1 px-2 text-white py-5 h-100 flex-1`}>
					<div className='bg-white p-2'>
						<img src='/images/crb-logo.png' width='200px' />
					</div>

					<div className='flex-h-new5 mt-65'>
						<i className='bi-person mr-3'></i>
						<div>Profile</div>
					</div>

					<div className='flex-h-new5 mt-65'>
						<i className='bi-brightness-high mr-3'></i>
						<div>Light Mode</div>
					</div>

					<div className='flex-h-new5 mt-65'>
						<i className='bi-bell mr-3'></i>
						<div>Notifications</div>
					</div>

					<div className='flex-h-new5 mt-65'>
						<i className='bi-gear mr-3'></i>
						<div>Settings</div>
					</div>

					<div className='flex-h-new5 mt-65'>
						<i className='bi-power mr-3'></i>
						<div>Logout</div>
					</div>
				</div>

				<div className={`${styles.page} flex-4 h-100`}>
					<div className={`${styles.greet_smalltext5} flex-h text-dark text-center`}>
						Page is temporarily
					</div>

					<img src='/images/crb6.png' />

					<a href='/home'>Go to Home</a>
				</div>
			</div>

		</>

	)
}

export default Dashboard