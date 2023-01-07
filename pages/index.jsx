import React, {useState, useEffect, useRef} from 'react'
import { Fragment } from 'react'
import styles from '../styles/Welcome.module.css'
import Slider from 'react-slick'


const Home = () =>{


	const settings = {
      dots: true,
      autoplay:true,
      speed: 500,
      autoplaySpeed:2500,
      infinite: true,
      swipeToSlide:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true
    };

	return(

		<>

			<Slider {...settings} className={`${styles.wrapper}`}>
				<div className={`${styles.wrap}`}> 
					<div className={`${styles.logo_circle}`}>
						<div className={`${styles.logo}`}>
							<img src='/images/crb-logo.png'  />
						</div>
					</div>
				</div>

				<div className={`${styles.greet} container bg-white`}>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className={`${styles.greet_bigtext}`}>
								Hello
							</div>

							<div className={`${styles.greet_smalltext1} text-dark mt-5`}>
								Welcome to
							</div>

							<div className={`${styles.greet_smalltext1} text-dark`}>
								Cryptobuddy. We are so excited to have you here!
							</div>
						</div>

						<div className='col-lg-6'>
							<div className={`${styles.greet_img}`}>
								<img src='/images/crb1.png' width='85%' />
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles.greet} container bg-white`}>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className={`${styles.greet_bigtext}`}>
								CONNECT
							</div>

							<div className={`${styles.greet_smalltext2} w-72 text-dark mt-5`}>
								Make Friends with crypto enthusiasts
							</div>
						</div>

						<div className='col-lg-6'>
							<div className={`${styles.greet_img}`}>
								<img src='/images/crb2.png' width='85%' />
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles.greet} container`}>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className={`${styles.greet_bigtext}`}>
								LEARN
							</div>

							<div className={`${styles.greet_smalltext2} text-dark mt-5`}>
								Stay updated with basic, latest all to know information about Cryptocurrency
							</div>
						</div>

						<div className='col-lg-6'>
							<div className={`${styles.greet_img}`}>
								<img src='/images/crb3.png' width='70%' />
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles.greet} container`}>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className={`${styles.greet_bigtext}`}>
								EARN
							</div>

							<div className={`${styles.greet_smalltext3} text-dark mt-5`}>
								Provide solutions to crypto puzzles and earn
							</div>

							<div className='mt-4'>
								<button className='primarybtn'>
									See More
								</button>
								<button className='secondarybtn ml-3'>
									Get Started
								</button>
							</div>
						</div>

						<div className='col-lg-6'>
							<div className={`${styles.greet_img}`}>
								<img src='/images/crb4.png' width='100%' />
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles.greet} container`}>
					<div className='row justify-content-center'>

						<div className={`${styles.back}`}>
							<a href=''>
								Back
							</a>
						</div>

						<div className='col-lg-6'>
							

							<div className={`${styles.greet_smalltext4} text-dark mt-3`}>
								There is more. Just for you!
							</div>

							<div className={`${styles.greet_explore}  mt-3`}>
								Explore Game room
							</div>
						</div>

						<div className='col-lg-6'>
							<div className={`${styles.greet_img}`}>
								<img src='/images/crb5.png' width='85%' />
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles.greet} container`}>
					<div className='row justify-content-center'>
							<div className='col-lg-12'>
								<div className={`${styles.greet_smalltext5} flex-h text-dark text-center`}>
									Page temporarily
								</div>

								<div className='flex-h'>
									<img src='/images/crb6.png' />
								</div>

								<div className={`${styles.home} text-center`}>
								<a href='/home'>
									Go to Home
								</a>
							</div>
						</div>
					</div>
				</div>
			</Slider>

		</>
	)
}



export default Home