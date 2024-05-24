import EventLogo from '@/assets/event-logo.svg';
import '@/components/navbar/navbar.css';
import { useState } from 'react';

type Props = {};

const Navbar = (props: Props) => {
	const [isPopup, setIsPopup] = useState(false);

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='wrapper wrapper__nav'>
					<img src={EventLogo} alt='event-logo' className='logo' />

					<div className='nav__block flex flex-center'>
						<div className='nav__list flex flex-center'>
							<a href='#home' className='nav__item'>
								home
							</a>
							<a href='#speakers' className='nav__item'>
								speakers
							</a>
							<a href='#schedule' className='nav__item'>
								schedule
							</a>
							<a href='#contactUs' className='nav__item'>
								contact Us
							</a>
						</div>

						<button className='button button--nav'>GET TICKETS</button>
					</div>

					<div
						className='menu__burger flex flex-center flex-mobile'
						onClick={() => setIsPopup(true)}
					>
						<div className='menu__item menu__item--1'></div>
						<div className='menu__item menu__item--2'></div>
						<div className='menu__item menu__item--3'></div>
					</div>
				</div>
			</div>

			<div
				className={
					isPopup
						? 'nav__mobile flex flex-mobile nav__mobile--open'
						: 'nav__mobile flex flex-mobile'
				}
			>
				<div className='nav__list flex flex-center flex-mobile'>
					<p className='nav__close-icon' onClick={() => setIsPopup(false)}>
						&#x2715;
					</p>
					<a href='#home' className='nav__item'>
						home
					</a>
					<a href='#speakers' className='nav__item'>
						speakers
					</a>
					<a href='#schedule' className='nav__item'>
						schedule
					</a>
					<a href='#contactUs' className='nav__item'>
						contact Us
					</a>
				</div>

				<button className='button button--nav'>GET TICKETS</button>
			</div>
		</nav>
	);
};

export default Navbar;
