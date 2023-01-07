import React, {useState, useEffect, useRef} from 'react'
import styles from '../styles/Signup.module.css'
import {notify} from '../notify'


const Signup = () =>{

	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		phoneNumber: '',
		gender: '',
		profession: '',
		bio: '',

	})

	function onSubmit(e){


		e.preventDefault()


		const formdata = new FormData()
			formdata.append('name', form.name)
			formdata.append('email', form.email)
			formdata.append('password', form.password)
			formdata.append('phoneNumber', form.phoneNumber)
			formdata.append('gender', form.gender)
			formdata.append('profession', form.profession)
			formdata.append('bio', form.bio)

			fetch('http://localhost/cryptobuddy/signup.php', {method: 'POST', body: formdata})
			.then(e => e.json())
			.then((type, data) => notify({
				type: 'error',
				message: 'Welcome to the family Cryptobud!!'
			}))
			// console.log(form)
			document.querySelector('#form').reset()
	}

	return(

		<>

				<div className={`${styles.main} mb-5`}>
					<div className={`${styles.back}`}>
						<a href='/home'>Back</a>
					</div>

					<img src='/images/crb53.png' />

					<div className={`${styles.maintext} text-center`}>
						Yayy, welcome Cryptobud! Get started by providing the right answers to the following information
					</div>

					<form className={`${styles.buttons} mt-3`} id='form' method='POST' onSubmit={onSubmit}>

						<div className={`${styles.inputs} mt-4`}>
							<div className='mb-3'>Name</div>
							<input type='text' placeholder='Enter full name here...' onChange={(e) => {setForm({...form, name: e.target.value})}} className='p-3 mt-1 rounded d-block' value={form.name} required name='name' />
						</div>

						<div className={`${styles.inputs} mt-4`}>
							<div className='mb-3'>Email</div>
							<input type='email' placeholder='Enter email here...' className='p-3 mt-1 rounded d-block' onChange={(e) => {setForm({...form, email: e.target.value})}} value={form.email} required name='email' />
						</div>

						<div className={`${styles.inputs} mt-4`}>
							<div className='mb-3'>Password</div>
							<input type='password' placeholder='Enter password here...' className='p-3 mt-1 rounded d-block' onChange={(e) => {setForm({...form, password: e.target.value})}} value={form.password} required name='password' />
						</div>

						<div className={`${styles.inputs} mt-4`}>
							<div className='mb-3'>Phone Number</div>
							<input type='number' placeholder='Enter phone number here...' className='p-3 mt-1 rounded d-block' onChange={(e) => {setForm({...form, phoneNumber: e.target.value})}}  value={form.phoneNumber} required name='phoneNumber' />
						</div>

						<div className={`${styles.inputsgender} mt-4`}>
							<div className='mb-4'>Gender</div>
							<select className=' py-3 px-1'  onChange={(e) => {setForm({...form, gender: e.target.value})}} value={form.gender} name='gender' required>
								<option>----</option>
								<option>Male</option>
								<option>Female</option>
								{/*<option>i'd rather not say</option>*/}
							</select>
						</div>
						
						<div className={`${styles.inputs} mt-4`}>
							<div className='mb-3'>Profession</div>
							<input type='text' placeholder='Tell us your profession...' className='p-3 mt-1 rounded d-block' onChange={(e) => {setForm({...form, profession: e.target.value})}}  value={form.profession} name='profession' required/>
						</div>

						<div className={`${styles.inputs} mt-4`}>
							<div className='mb-3'>Bio</div>

							<textarea className='pt-3 pr-5 pb-100 pl-3 mt-1 rounded d-block' placeholder='Tell us a little about yourself...' onChange={(e) => {setForm({...form, bio: e.target.value})}}  value={form.bio} name='bio' required type='text'>
								
							</textarea>
						</div>

						<button className='submitbtn p-3 mt-5' type='submit' href=''>
							Sign Up
						</button>
					</form>
				</div>

		</>

	)


}

export default Signup