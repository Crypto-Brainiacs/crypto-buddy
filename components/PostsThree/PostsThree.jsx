import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/Post.module.css'


const PostThree = () =>{

	return(

		<>

			<div className={`${styles.post1_wrap}`}>
				<div className={`${styles.post1_name} ml-4`}>
					<div className={`${styles.post1_user_img}`}></div>
					<div className={`${styles.post1_user_img_text} ml-3 mt-4`}>
						<div>
							Kelvin Drew
						</div>
						<div>
							Posted 2 hours ago
						</div>
					</div>
				</div>

				<div className={`${styles.write_up} ml-90 mt-3`}>
					<div className=''>
						Why the metaverse is the next big thing
					</div>
					<div className='mt-2 w-85'>
						So i went to a furniture store to pick out furniture for my workspace setup. I went on atour that lasted for almost an hour before eventually picking out one. As i drove back home  <a href='' className='ml-2'>Read More....</a>
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

export default PostThree