import React from 'react'
import styles from '../styles/Welcomeback.module.css'



const Welcomeback = () =>{


	return(

		<>

			<div className={`${styles.main}`}>

				<div className={`${styles.back}`}>
					<a href=''>Back</a>
				</div>

				<img src='/images/crb52.png' />

				<div className={`${styles.maintext} text-center`}>
					Hello Cryptobud! Welcome BACK. To proceed, log in with your username and password
				</div>

				<div className={`${styles.buttons} mt-4`}>
					<button className='secondarybtn p-3'>
						Sign Up
					</button>

					<button className='primarybtn p-3 mt-3'>
						Log in
					</button>
				</div>

				<div className={`${styles.forgot}`}>
					<a href=''>Forgot Password?</a>
				</div>
			</div>


		</>

	)

}


export default Welcomeback