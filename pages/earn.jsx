import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Earn.module.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import Logo from '../components/Logo/Logo'


const Earn = () =>{

	return(

		<>

			<Logo/>
			<Navbar/>
			<Search/>

			<div className={`${styles.wrapper}`}>
				<img src='/images/crb6.png' />

				<a href='/home'>Go to Home</a>
			</div>

		</>
	)

}


export default Earn