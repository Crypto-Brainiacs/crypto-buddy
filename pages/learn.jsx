import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Learn.module.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import Logo from '../components/Logo/Logo'


const Learn = () =>{

	return(


		<>
			<Logo/>
			<Navbar/>
			<Search/>


			<div className={`${styles.wrap}`}>
				<div className={`${styles.slides}`}>
					<div>
						<img src='/images/crb32.jpg' />
					</div>
					<div>
						<img src='/images/crb48.jpg' />
					</div>
				</div>

				<div className={`${styles.slides} mt-3`}>
					<div>
						<img src='/images/crb30.jpg' />
					</div>
					<div>
						<img src='/images/crb49.jpg' />
					</div>
				</div>

				<div className={`${styles.slides} mt-3`}>
					<div>
						<img src='/images/crb50.jpg' />
					</div>
					<div>
						<img src='/images/crb51.jpg' />
					</div>
				</div>
			</div>

		</>

	)

}



export default Learn