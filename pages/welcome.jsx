import React from 'react'
import Styles from '../styles/Welcome.module.css'

const Welcome = () =>{

	return(

		<>

			<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<Slider {...settings}>

							<div className={`${styles.wrapper} text-center`}>
								lorem
							</div>

						</Slider>
					</div>
				</div>

				
			<div className={`${styles.wrap}`}> 
					<div className={`${styles.logo_circle}`}>
						Cryptobuddy
					</div>
				</div>

				<div className={`${styles.greet} container mt-50`}>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className={`${styles.greet_bigtext}`}>
								Hello
							</div>

							<div className={`${styles.greet_bigtext} text-dark`}>
								Welcome to
							</div>

							<div className={`${styles.greet_smalltext} w-72 text-dark`}>
								Cryptobuddy. We are so excited to have you here
							</div>
						</div>

						<div className='col-lg-6'>
							<div className='flex-v-new2'>
								<img src='/images/lady-img.jpg' width='60%' />
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles.greet} container mt-50`}>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className={`${styles.greet_bigtext}`}>
								CONNECT
							</div>

							<div className={`${styles.greet_smalltext2} w-72 text-dark`}>
								Make Friends with crypto enthusiasts
							</div>
						</div>

						<div className='col-lg-6'>
							<div className='flex-v-new2'>
								<img src='/images/lady-img.jpg' width='60%' />
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles.greet} container mt-50`}>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className={`${styles.greet_bigtext}`}>
								LEARN
							</div>

							<div className={`${styles.greet_smalltext2} w-100 text-dark`}>
								Stay updated with basic, latest all to know information about Cryptocurrency
							</div>
						</div>

						<div className='col-lg-6'>
							<div className='flex-v-new2'>
								<img src='/images/lady-img.jpg' width='60%' />
							</div>
						</div>
					</div>
				</div>
			

		</>
	)
}

export default Welcome