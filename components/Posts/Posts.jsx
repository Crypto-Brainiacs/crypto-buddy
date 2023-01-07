import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/Post.module.css'


const Post = () =>{

	return(

		<>

			<div className={`${styles.post1_wrap}`}>
				<div className={`${styles.post1_name} ml-4`}>
					<div className={`${styles.post1_user_img}`}></div>
					<div className={`${styles.post1_user_img_text} ml-3 mt-4`}>
						<div>
							Tito Omoniyi
						</div>
						<div>
							Posted 12 mins ago
						</div>
					</div>
				</div>

				<div className={`${styles.write_up} ml-90 mt-3`}>
					<div className=''>
						Hey Guys,
					</div>
					<div className='mt-2 w-95'>
						Looking to collaborate with web 3 enthusiasts on a project. Please leave a direct message if you're interested or comment below. Thank you!
					</div>
				</div>

				<div className={`${styles.post1_img_1} ml-90 mt-4`}></div>

				<div className={`${styles.post1_img_2} ml-90 mt-4`}>
					<div className={`${styles.post1_img_21}`}></div>

					<div className={`${styles.post1_img_22}`}></div>

					<div className={`${styles.post1_img_23}`}></div>
				</div>

				<div className={`${styles.reactions} ml-110 mt-3 w-80 mb-20`}>
					<div className='mx-2'>
						<i className='bi-hand-thumbs-up  text-dark'></i>
					</div>
					<div className='mx-2'>
						<i className='bi-chat-left  text-dark'></i>
					</div>
					<div className='mx-2'>
						<i className='bi-share  text-dark'></i>
					</div>
				</div>
			</div>


			<div className={`${styles.post1_wrap}`}>
				<div className={`${styles.post1_name} ml-4`}>
					<div className={`${styles.post2_user_img}`}>
						<img src='/images/crb37.jpg' />
					</div>
					<div className={`${styles.post1_user_img_text} ml-3 mt-4`}>
						<div>
							Glory Gates
						</div>
						<div>
							Posted 47 mins ago
						</div>
					</div>
				</div>

				<div className={`${styles.write_up} ml-90 mt-3`}>
					<div className=''>
						The way out of Nigeria's cash withdrawal limit crisis
					</div>
					<div className='mt-2 w-85'>
						Cryptocurrency remains the future both in developed, developing and underdeveloped countries the new policy on Nigeria's cash withdrawal limits on its paper money which is as a result of the new notes <a href='' className='ml-2'>Read More....</a>
					</div>
				</div>

				<div className={`${styles.post2_img_1} ml-90 mt-4`}>
					<div className={`${styles.post2_img_11}`}></div>

					<div className={`${styles.post2_img_12}`}></div>
				</div>

				<div className={`${styles.post1_img_2} ml-90 mt-4`}>
					<div className={`${styles.post2_img_21}`}></div>

					<div className={`${styles.post2_img_22}`}></div>

					<div className={`${styles.post2_img_23}`}></div>
				</div>

				<div className={`${styles.reactions} ml-110 mt-3 w-80 mb-20`}>
					<div className='mx-2'>
						<i className='bi-hand-thumbs-up  text-dark'></i>
					</div>
					<div className='mx-2'>
						<i className='bi-chat-left  text-dark'></i>
					</div>
					<div className='mx-2'>
						<i className='bi-share  text-dark'></i>
					</div>
				</div>
			</div>



		</>

	)
}


export default Post