import EventLogo from '@/assets/event-logo.svg';
import '@/components/navbar/navbar.css';
import { useEffect, useState } from 'react';

type Props = {};

const Navbar = (props: Props) => {
	const [isPopup, setIsPopup] = useState(false);

	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setScrolled(false);
			} else {
				setScrolled(true);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={scrolled ? 'nav nav--scroll' : 'nav'}>
			<div className='container'>
				<div className='wrapper wrapper__nav'>
					<img src={EventLogo} alt='event-logo' className='logo' />

					<div className='nav__block flex flex-center'>
						<div className='nav__list flex flex-center'>
							<a href='#home' className='nav__item'>
								home
							</a>
							<a href='#explore' className='nav__item'>
								explore
							</a>
							<a href='#about' className='nav__item'>
								about
							</a>
							<a href='#singers' className='nav__item'>
								singers
							</a>
							<a href='#event' className='nav__item'>
								event
							</a>
							<a href='#ticket' className='nav__item'>
								ticket
							</a>
							<a href='#sponsors' className='nav__item'>
								sponsors
							</a>
							<a href='#testimonials' className='nav__item'>
								testimonials
							</a>
							<a href='#contact' className='nav__item'>
								contact
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
					<a href='#explore' className='nav__item'>
						explore
					</a>
					<a href='#about' className='nav__item'>
						about
					</a>
					<a href='#singers' className='nav__item'>
						singers
					</a>
					<a href='#event' className='nav__item'>
						event
					</a>
					<a href='#ticket' className='nav__item'>
						ticket
					</a>
					<a href='#sponsors' className='nav__item'>
						sponsors
					</a>
					<a href='#testimonials' className='nav__item'>
						testimonials
					</a>
					<a href='#contact' className='nav__item'>
						contact
					</a>
				</div>

				<button className='button button--nav'>GET TICKETS</button>
			</div>
		</nav>
	);
};

export default Navbar;
