import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/Search.module.css'


const Search = () =>{

	return(


		<>

			<div className='container-fluid  bg-white'>
				<div className='row'>
					<div className='col-lg-12 flex-h-new3 mt-5 mb-5'>
						<div className={`${styles.user}`}></div>
						<div className={`${styles.input}`}>
							<i className='bi-search ml-5 curp'></i>
							<input type='search' placeholder='Type what you want to share here' className='p-4 d-block' />
						</div>
					</div>
				</div>
			</div>

		</>

	)
}


export default Search