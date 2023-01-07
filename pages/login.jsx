import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Login.module.css'


const Login = () =>{


	// const [form, setForm] = useState({
	// 	email: '',
	// 	password: '',

	// })

	// function onSubmit(e){


	// 	e.preventDefault()


	// 	const formdata = new FormData()
	// 		formdata.append('email', form.email)
	// 		formdata.append('password', form.password)

	// 		window.location('http://localhost:3000/dashboard')

	// 		fetch('http://localhost/cryptobuddy/login.php', {method: 'POST', body: formdata})
	// 		.then(e => e.json())
	// 		.then((type, data) => notify({
	// 			type: 'error',
	// 			message: 'Welcome back Cryptobud!!'
	// 		}))
	// 		console.log(form)
	// 		document.querySelector('#form').reset()
	// }


	return(

		<>

			<form id='form' method='POST'>				
				<div className={`${styles.main}`}>

					<div className={`${styles.back}`}>
						<a href='/home'>Back</a>
					</div>

					<img src='/images/crb55.png' />

					<div className={`${styles.maintext} text-center`}>
						Enter your registered email and password
					</div>

					<div className={`${styles.buttons} mt-3`}>

						<input type='email' placeholder='Enter email' className='p-3  rounded d-block'  name='email'/>

						<input type='password' placeholder='Enter password' className='p-3  rounded d-block mt-3' name='password'/>

						<button className='secondarybtn p-3 mt-3' type='submit'>
							<a href='/dashboard'>
								Log in
							</a>
						</button>
					</div>

					<div className={`${styles.forgot}`}>
						<a href='/authentication'>Forgot Password?</a>

						<a href='/signup'>Sign Up</a>
					</div>
				</div>
			</form>

		</>

	)


}

export default Login

