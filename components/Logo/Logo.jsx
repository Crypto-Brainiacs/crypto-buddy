import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/Logo.module.css'



const Logo = () =>{

	return(

		<>

			<div className='container-fluid bg-white'>
				<div className='row'>
					<div className='col-lg-12 mt-3'>
						<div className={`${styles.logo}`}>
							<img src='/images/crb-logo.png' />
						</div>
					</div>
				</div>
			</div>

		</>

	)
}

export default Logo