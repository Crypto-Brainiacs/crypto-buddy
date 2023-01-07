import React from 'react'
import styles from '../styles/Welcomeback.module.css'


const Authentication = () =>{

	return(

		<>

			<div className={`${styles.main}`}>

				<div className={`${styles.back}`}>
					<a href=''>Back</a>
				</div>

				<img src='/images/crb54.png' />

				<div className={`${styles.maintext} text-center`}>
					Log in with your prefered option
				</div>

				<div className={`${styles.buttons} mt-3`}>
					<button className='secondarybtn p-3'>
						Log in with email
					</button>

					<div className='mt-3'>
						Or
					</div>

					<div className={`${styles.auth} mt-3`}>
						<a href=''>
							<img src='/images/crb61.png' className='mx-2' width='15px' />
						</a>
						<a href=''>
							<img src='/images/crb65.png' className='mx-2' width='17px' />
						</a>
						<a href=''>
							<img src='/images/crb67.png' className='mx-2' width='15px' />
						</a>
					</div>
				</div>

				<div className={`${styles.forgot}`}>
					<a href=''>Forgot Password?</a>
				</div>
			</div>

		</>

	)


}

export default Authentication