import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Connect.module.css'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Search/Search'
import Logo from '../components/Logo/Logo'


const Connect = () =>{

	return(

		<>
			<Logo/>	
			<Navbar/>	
			<Search/>	



			<div className='container-fluid bg-white'>
				<div className='row'>
					<div className={`${styles.menu}`}>

						<div className='flex-h-new3'>
							<div className={`${styles.addStory}`}>
								<div>
									<i className='bi-plus fa-3x text-white'></i>
								</div>
								<div className=''>Add Buddy</div>
							</div>
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb38.jpg' />
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb39.jpg' />
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb40.jpg' />
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb41.jpg' />
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb42.jpg' />
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb43.jpg' />
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb44.jpg' />
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb45.jpg' />
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb46.jpg' />
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb24.jpg' />
						</div>

						<div className={`${styles.user}`}>
							<img src='/images/crb47.jpg' />
						</div>
						
					</div>
				</div>
			</div>

			<div className='container-fluid bg-white'>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div className={`${styles.chatbox} flex-h-new4`}>
							<div className={`${styles.chatbox_deets}`}>
								<img src='/images/crb38.jpg' />
								<div className='ml-3'>
									<div className={`${styles.username}`}>Felix Carr</div>
									<div>I checked the chatGPT website yesterday. Crazy</div>
								</div>
							</div>
							<div className={`${styles.chatbox_time}`}>
								4:28pm
							</div>
						</div>

						<div className={`${styles.chatbox} flex-h-new4 mt-5`}>
							<div className={`${styles.chatbox_deets}`}>
								<img src='/images/crb39.jpg' />
								<div className='ml-3'>
									<div className={`${styles.username}`}>Felix Carr</div>
									<div>I checked the chatGPT website yesterday. Crazy</div>
								</div>
							</div>
							<div className={`${styles.chatbox_time}`}>
								4:28pm
							</div>
						</div>

						<div className={`${styles.chatbox} flex-h-new4 mt-5`}>
							<div className={`${styles.chatbox_deets}`}>
								<img src='/images/crb40.jpg' />
								<div className='ml-3'>
									<div className={`${styles.username}`}>Felix Carr</div>
									<div>I checked the chatGPT website yesterday. Crazy</div>
								</div>
							</div>
							<div className={`${styles.chatbox_time}`}>
								4:28pm
							</div>
						</div>

						<div className={`${styles.chatbox} flex-h-new4 mt-5`}>
							<div className={`${styles.chatbox_deets}`}>
								<img src='/images/crb41.jpg' />
								<div className='ml-3'>
									<div className={`${styles.username}`}>Felix Carr</div>
									<div>I checked the chatGPT website yesterday. Crazy</div>
								</div>
							</div>
							<div className={`${styles.chatbox_time}`}>
								4:28pm
							</div>
						</div>

						<div className={`${styles.chatbox} flex-h-new4 mt-5`}>
							<div className={`${styles.chatbox_deets}`}>
								<img src='/images/crb42.jpg' />
								<div className='ml-3'>
									<div className={`${styles.username}`}>Felix Carr</div>
									<div>I checked the chatGPT website yesterday. Crazy</div>
								</div>
							</div>
							<div className={`${styles.chatbox_time}`}>
								4:28pm
							</div>
						</div>

						<div className={`${styles.chatbox} flex-h-new4 mt-5`}>
							<div className={`${styles.chatbox_deets}`}>
								<img src='/images/crb43.jpg' />
								<div className='ml-3'>
									<div className={`${styles.username}`}>Felix Carr</div>
									<div>I checked the chatGPT website yesterday. Crazy</div>
								</div>
							</div>
							<div className={`${styles.chatbox_time}`}>
								4:28pm
							</div>
						</div>

						<div className={`${styles.chatbox} flex-h-new4 mt-5`}>
							<div className={`${styles.chatbox_deets}`}>
								<img src='/images/crb44.jpg' />
								<div className='ml-3'>
									<div className={`${styles.username}`}>Felix Carr</div>
									<div>I checked the chatGPT website yesterday. Crazy</div>
								</div>
							</div>
							<div className={`${styles.chatbox_time}`}>
								4:28pm
							</div>
						</div>

						<div className={`${styles.chatbox} flex-h-new4 mt-5`}>
							<div className={`${styles.chatbox_deets}`}>
								<img src='/images/crb45.jpg' />
								<div className='ml-3'>
									<div className={`${styles.username}`}>Felix Carr</div>
									<div>I checked the chatGPT website yesterday. Crazy</div>
								</div>
							</div>
							<div className={`${styles.chatbox_time}`}>
								4:28pm
							</div>
						</div>

						<div className={`${styles.chatbox} flex-h-new4 mt-5`}>
							<div className={`${styles.chatbox_deets}`}>
								<img src='/images/crb24.jpg' />
								<div className='ml-3'>
									<div className={`${styles.username}`}>Felix Carr</div>
									<div>I checked the chatGPT website yesterday. Crazy</div>
								</div>
							</div>
							<div className={`${styles.chatbox_time}`}>
								4:28pm
							</div>
						</div>

						<div className={`${styles.chatbox} flex-h-new4 mt-5`}>
							<div className={`${styles.chatbox_deets}`}>
								<img src='/images/crb47.jpg' />
								<div className='ml-3'>
									<div className={`${styles.username}`}>Felix Carr</div>
									<div>I checked the chatGPT website yesterday. Crazy</div>
								</div>
							</div>
							<div className={`${styles.chatbox_time}`}>
								4:28pm
							</div>
						</div>
					</div>
				</div>
			</div>

		</>

	)
}

export default Connect