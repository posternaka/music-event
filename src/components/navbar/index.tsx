import EventLogo from '@/assets/event-logo.svg';
import '@/components/navbar/navbar.css';

type Props = {};

const Navbar = (props: Props) => {
	const handleToggleMenuBurger = () => {
		console.log('da');

		const menu = document.querySelector('.nav__mobile');
		menu?.classList.toggle('nav__mobile--open');
	};

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
						onClick={() => handleToggleMenuBurger()}
					>
						<div className='menu__item menu__item--1'></div>
						<div className='menu__item menu__item--2'></div>
						<div className='menu__item menu__item--3'></div>
					</div>
				</div>
			</div>

			<div className='nav__mobile flex flex-mobile'>
				<div className='nav__list flex flex-center flex-mobile'>
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
