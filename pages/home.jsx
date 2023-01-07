import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import Logo from '../components/Logo/Logo'
import Post from '../components/Posts/Posts'
import PostTwo from '../components/PostsTwo/PostsTwo'
import PostThree from '../components/PostsThree/PostsThree'


const Homepage = () =>{

	return(

		<>

			<Logo/>
			<Navbar/>
			<Search/>


			<div className='container-fluid bg-white mt-3 py-3'>
				<div className='row justify-content-center'>
					<div className={`${styles.stories_wrap} mt-3`}>
						<div className={`${styles.story1}`}>
							<i className='bi-playstation fa-3x'></i>
							<div className='mt-2'>
								Games
							</div>
						</div>

						<div className={`${styles.story2}`}>
							<div className={`${styles.story_pill}`}>
								 1
							</div>
							<div className='mb-10'>
								Anthony Ugo
							</div>
						</div>

						<div className={`${styles.story3}`}>
							<div className={`${styles.story_pill}`}>
								 4
							</div>
							<div className='mb-10'>
								Kunle Fashakin
							</div>
						</div>

						<div className={`${styles.story4}`}>
							<div className={`${styles.story_pill}`}>
								 4
							</div>
							<div className='mb-10'>
								Carmia Marshall
							</div>
						</div>

						<div className={`${styles.story5}`}>
							<div className={`${styles.story_pill}`}>
								 4
							</div>
							<div className='mb-10'>
								Pelumi
							</div>
						</div>

						<div className={`${styles.story6}`}>
							<div className={`${styles.story_pill}`}>
								 4
							</div>
							<div className='mb-10'>
								Anthony Ugo
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container-fluid mt-3 bg-white mt-2'>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div className={`${styles.intro_text} mt-2`}>
							Connect with fellow Cryptobuddies
						</div>
					</div>
				</div>
			</div>

			<div className='container-fluid bg-white'>
				<div className='row justify-content-center'>
					<div className={`${styles.request_wrap}`}>
						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb10.jpg'  width='100%'/>
							</div>

							<div className='mt-3 ml-3'>
								Melonie Brown
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb11.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Joy Ifeaojuku
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb22.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Ntare
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>
					</div>

					<div className='mt-3 text-center'>
						See all
					</div>

				</div>
			</div>

			<Post/>

			<div className='container-fluid mt-3 bg-white mt-5'>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div className={`${styles.intro_text} mt-2`}>
							Connect with fellow Cryptobuddies
						</div>
					</div>
				</div>
			</div>

			<div className='container-fluid bg-white'>
				<div className='row justify-content-center'>
					<div className={`${styles.request_wrap2}`}>
						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb21.jpg'  width='100%'/>
							</div>

							<div className='mt-3 ml-3'>
								Melonie Brown
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb21.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Joy Ifeaojuku
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/crb21.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Ntare
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

					{/*	<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/man-img2.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Ntare
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>

						<div className={`${styles.request}`}>
							<div className='mt-3'>
								<img src='/images/man-img1.jpg' width='100%' />
							</div>

							<div className='mt-3 ml-3'>
								Ntare
							</div>

							<div>
								<button className='friendbtn mt-3 ml-3'>
									Add Buddy
								</button>
							</div>
						</div>*/}
					</div>

					<div className='mt-3 text-center'>
						See all
					</div>

				</div>
			</div>

			<PostTwo/>

			<div className='container-fluid bg-white mt-3 py-3'>
				<div className='row justify-content-center'>
					<div className={`${styles.stories_wrap} mt-3`}>
						<div className={`${styles.story1}`}>
							<i className='bi-playstation fa-3x'></i>
							<div className='mt-2'>
								Games
							</div>
						</div>

						<div className={`${styles.story2}`}>
							<div className={`${styles.story_pill}`}>
								 1
							</div>
							<div className='mb-10'>
								Anthony Ugo
							</div>
						</div>

						<div className={`${styles.story3}`}>
							<div className={`${styles.story_pill}`}>
								 4
							</div>
							<div className='mb-10'>
								Kunle Fashakin
							</div>
						</div>

						<div className={`${styles.story4}`}>
							<div className={`${styles.story_pill}`}>
								 4
							</div>
							<div className='mb-10'>
								Carmia Marshall
							</div>
						</div>

						<div className={`${styles.story5}`}>
							<div className={`${styles.story_pill}`}>
								 4
							</div>
							<div className='mb-10'>
								Pelumi
							</div>
						</div>

						<div className={`${styles.story6}`}>
							<div className={`${styles.story_pill}`}>
								 4
							</div>
							<div className='mb-10'>
								Anthony Ugo
							</div>
						</div>
					</div>
				</div>
			</div>

			<PostThree/>

		</>

	)
}


export default Homepage