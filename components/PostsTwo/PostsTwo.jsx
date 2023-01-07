import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/Post.module.css'

const PostTwo = () =>{

	return(

		<>
			
			<div className={`${styles.post3_wrap}`}>
				<div className={`${styles.post1_name} ml-4`}>
					<div className={`${styles.post2_user_img}`}>
						<img src='/images/crb36.jpg' />
					</div>
					<div className={`${styles.post1_user_img_text} ml-3 mt-4`}>
						<div>
							Emily West
						</div>
						<div>
							Posted 55 mins ago
						</div>
					</div>
				</div>

				<div className={`${styles.write_up} ml-90 mt-3`}>
					<div className=''>
						The Revolutionary technologies
					</div>
					<div className='mt-2 w-100'>
						Artificial intelligence, machine learning, deep learning, web 3.0, Blockchain, Cryptocurrency, Augmented virtual and mixed reality <a href=''>Read More...</a>
					</div>
				</div>

				<div className={`${styles.post3_img} ml-90 mt-4`}>
					<div className={`${styles.post3_img_1}`}>
						<div className={`${styles.post3_img_11} mb-20`}>
							<div className={`${styles.post3_img_111}`}>
								<img src='/images/crb26.jpg' />
							</div>							
							<div className={`${styles.post3_img_112}`}>
								<img src='/images/rb27.jpg' />
							</div>							
						</div>

						<div className={`${styles.post3_img_12}`}></div>
					</div>

					<div className={`${styles.post3_img_2} ml-3`}></div>
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

export default PostTwo