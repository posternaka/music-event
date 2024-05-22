import EventLogo from '@/assets/event-logo.svg';
import '@/components/navbar/navbar.css';

type Props = {};

const Navbar = (props: Props) => {
	const toggleMenuBurger = (): void => {
    const menuBurger = document.querySelector('.menu__burger') as HTMLElement | null;
    const item1 = menuBurger?.querySelector('.menu__item-1') as HTMLElement | null;
    const item2 = menuBurger?.querySelector('.menu__item-2') as HTMLElement | null;
    const item3 = menuBurger?.querySelector('.menu__item-3') as HTMLElement | null;

    menuBurger?.addEventListener('click', () => {
        if (item2) {
            item2.style.opacity = '0';
            item2.style.transform = 'translateX(-50px)';
        }

        if (item1) {
            item1.style.transform = 'rotate(45deg)';
        }

        if (item3) {
            item3.style.transform = 'rotate(-45deg)';
        }
    });
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
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
