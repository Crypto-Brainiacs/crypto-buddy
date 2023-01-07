import React, {useState, useEffect, useRef} from 'react'
import styles from '../../styles/Navbar.module.css'


const NAV_LINK = [
	
	{
		path:'/',
		display:<div className='flex-h-new5'>
					<i className='bi-person mr-3'></i>
					<div>Profile</div>
				</div>
	},
	{
		path:'/',
		display:<div className='flex-h-new5'>
					<i className='bi-brightness-high mr-3'></i>
					<div>Light Mode</div>
				</div>
	},
	{
		path:'/',
		display:<div className='flex-h-new5'>
					<i className='bi-bell mr-3'></i>
					<div>Notifications</div>
				</div>
	},
	{
		path:'/',
		display:<div className='flex-h-new5'>
					<i className='bi-gear mr-3'></i>
					<div>Settings</div>
				</div>
	},
	{
		path:'/',
		display:<div className='flex-h-new5'>
					<i className='bi-power mr-3'></i>
					<div>Logout</div>
				</div>
	},	

]


const Navbar = () =>{


	const [sidebar, setSidebar] = useState(false);
	const openMenu = () => setSidebar(!sidebar);
	const closeMenu = () => setSidebar(!sidebar);

	return(


		<>

			<div className='container-fluid bg-white'>
				<div className='row'>
					<div className={`${styles.menu} ml-3 mt-3`}>

						<div className={`${styles.active} curp`}>
							<a href='/home' className={`${styles.active} curp`}>
								<div className=''>
									<i className='bi-house fa-3x'></i>
								</div>
								<div>
									Home
								</div>
							</a>
						</div>

						<div className={`${styles.links} curp`}>
							<a href='/connect'>
								<div className=''>
									<i className='bi-chat-dots fa-3x'></i>
								</div>
								<div>
									Connect
								</div>
							</a>
						</div>

						<div className={`${styles.links} curp`}>
							<a href='/learn'>
								<div className=''>
									<i className='bi-house fa-3x'></i>
								</div>
								<div>
									Learn
								</div>
							</a>
						</div>

						<div className={`${styles.links} curp`}>
							<a href='/earn'>
								<div className=''>
									<i className='bi-currency-exchange fa-3x'></i>
								</div>
								<div>
									Earn
								</div>
							</a>
						</div>

						<div className={`${styles.links} curp`}>
							<div className=''>
								<i className={sidebar ? '' : 'bi-filter-right fa-3x'} onClick={openMenu}></i>
							</div>
							<div>
								Menu
							</div>
						</div>
						
					</div>
				</div>
			</div>

		{/*mobile menu starts here*/}
				<div className={sidebar ? 'mob-navbar slideInRight zindex shadow-lg' : 'd-none'}>

					<div className='flex-h-new6 px-3 py-4'>
						<div className={`${styles.logo}`}>
							<img src='/images/crb-logo.png' />
						</div>

						<div>
							<i className='bi-x fa-3x curp' onClick={closeMenu}></i>
						</div>
					</div>

					<div className='py-4 px-3'>
						{
							NAV_LINK.map((item,index)=>(

								<div className='my-5'>
									<a href={item.path} key={index} className=''>{item.display}</a>
								</div>
							))
						}
					</div>
			</div>

		{/*mobile menu starts here*/}
		</>

	)
}

export default Navbar