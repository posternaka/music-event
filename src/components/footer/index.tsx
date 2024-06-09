import Logo from '@/assets/event-logo.svg';
import '@/components/footer/footer.css';

type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className='footer'>
			<div className='container'>
				<img src={Logo} alt='main-logo' className='logo footer__logo' />

				<div className='wrapper wrapper__footer flex'>
					<nav className='nav__list flex'>
						<a href='#home' className='nav__item'>
							Home
						</a>
						<a href='#company' className='nav__item'>
							Company
						</a>
						<a href='#blog' className='nav__item'>
							Blog
						</a>
						<a href='#contactUs' className='nav__item'>
							Contact Us
						</a>
						<a href='#sitemap' className='nav__item'>
							Sitemap
						</a>
					</nav>

					<div className='footer__socials flex'>
						<div className='socials__block flex flex-center'>
							<a href='https://www.facebook.com' target='_blank'>
								<svg
									width='14'
									height='26'
									viewBox='0 0 14 26'
									xmlns='http://www.w3.org/2000/svg'
									className='social__link'
								>
									<path d='M9.5 14.875H12.625L13.875 9.875H9.5V7.375C9.5 6.0875 9.5 4.875 12 4.875H13.875V0.675C13.4675 0.62125 11.9287 0.5 10.3037 0.5C6.91 0.5 4.5 2.57125 4.5 6.375V9.875H0.75V14.875H4.5V25.5H9.5V14.875Z' />
								</svg>
							</a>
							<a href='https://x.com/' target='_blank'>
								<svg
									width='26'
									height='22'
									viewBox='0 0 26 22'
									xmlns='http://www.w3.org/2000/svg'
									className='social__link'
								>
									<path d='M25.7024 3.07015C24.7481 3.49227 23.7361 3.76949 22.6999 3.89265C23.7921 3.23944 24.6095 2.21142 24.9999 1.00015C23.9749 1.61015 22.8511 2.03765 21.6799 2.2689C20.8931 1.42713 19.8503 0.868856 18.7136 0.680883C17.5768 0.49291 16.4098 0.685766 15.394 1.22947C14.3781 1.77317 13.5704 2.63726 13.0963 3.68739C12.6222 4.73753 12.5083 5.91488 12.7724 7.0364C10.6938 6.93222 8.6603 6.39206 6.80399 5.45098C4.94768 4.50991 3.31004 3.18896 1.99738 1.5739C1.53275 2.37197 1.28858 3.27919 1.28988 4.20265C1.28988 6.01515 2.21238 7.6164 3.61488 8.5539C2.78489 8.52777 1.97317 8.30363 1.24738 7.90015V7.96515C1.24763 9.17228 1.66534 10.3422 2.42969 11.2765C3.19404 12.2108 4.25798 12.852 5.44113 13.0914C4.67065 13.3002 3.86277 13.331 3.07863 13.1814C3.41222 14.2204 4.06239 15.1292 4.93812 15.7803C5.81385 16.4314 6.87129 16.7924 7.96238 16.8127C6.87798 17.6643 5.63635 18.2939 4.30848 18.6654C2.98061 19.0369 1.59254 19.143 0.223633 18.9777C2.61325 20.5144 5.395 21.3303 8.23613 21.3277C17.8524 21.3277 23.1111 13.3614 23.1111 6.45265C23.1111 6.22765 23.1049 6.00015 23.0949 5.77765C24.1185 5.03786 25.0019 4.12143 25.7036 3.0714L25.7024 3.07015Z' />
								</svg>
							</a>
							<a href='https://www.linkedin.com' target='_blank'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
									className='social__link'
								>
									<path d='M19.9187 19.9238H16.5875V14.7025C16.5875 13.4575 16.5625 11.855 14.85 11.855C13.1137 11.855 12.8487 13.21 12.8487 14.6112V19.9238H9.51625V9.1875H12.7162V10.65H12.76C13.2075 9.8075 14.295 8.91625 15.92 8.91625C19.295 8.91625 19.92 11.1387 19.92 14.03V19.9238H19.9187ZM5.75375 7.71875C5.49944 7.71908 5.24757 7.66921 5.01258 7.57201C4.77758 7.4748 4.56408 7.33217 4.38432 7.15229C4.20456 6.97242 4.06207 6.75882 3.96501 6.52377C3.86796 6.28871 3.81826 6.03681 3.81875 5.7825C3.819 5.39979 3.93272 5.02575 4.14555 4.70768C4.35838 4.38961 4.66074 4.14179 5.01441 3.99557C5.36808 3.84934 5.75717 3.81127 6.13248 3.88618C6.50778 3.96108 6.85244 4.14559 7.12288 4.41638C7.39332 4.68717 7.57739 5.03208 7.65181 5.40748C7.72623 5.78288 7.68766 6.17192 7.54098 6.5254C7.39429 6.87888 7.14608 7.18092 6.82774 7.39334C6.50939 7.60575 6.13521 7.719 5.7525 7.71875H5.75375ZM7.42375 19.9238H4.0825V9.1875H7.425V19.9238H7.42375ZM21.5875 0.75H2.41125C1.49125 0.75 0.75 1.475 0.75 2.37125V21.6287C0.75 22.525 1.4925 23.25 2.41 23.25H21.5825C22.5 23.25 23.25 22.525 23.25 21.6287V2.37125C23.25 1.475 22.5 0.75 21.5825 0.75H21.5863H21.5875Z' />
								</svg>
							</a>
							<a href='https://www.instagram.com' target='_blank'>
								<svg
									width='26'
									height='26'
									viewBox='0 0 26 26'
									xmlns='http://www.w3.org/2000/svg'
									className='social__link'
								>
									<path d='M13 0.5C16.3963 0.5 16.82 0.5125 18.1525 0.575C19.4837 0.6375 20.39 0.84625 21.1875 1.15625C22.0125 1.47375 22.7075 1.90375 23.4025 2.5975C24.0381 3.22237 24.5299 3.97824 24.8438 4.8125C25.1525 5.60875 25.3625 6.51625 25.425 7.8475C25.4838 9.18 25.5 9.60375 25.5 13C25.5 16.3963 25.4875 16.82 25.425 18.1525C25.3625 19.4837 25.1525 20.39 24.8438 21.1875C24.5308 22.0222 24.0389 22.7783 23.4025 23.4025C22.7775 24.0379 22.0216 24.5297 21.1875 24.8438C20.3912 25.1525 19.4837 25.3625 18.1525 25.425C16.82 25.4838 16.3963 25.5 13 25.5C9.60375 25.5 9.18 25.4875 7.8475 25.425C6.51625 25.3625 5.61 25.1525 4.8125 24.8438C3.97791 24.5306 3.22191 24.0387 2.5975 23.4025C1.96176 22.7777 1.46991 22.0218 1.15625 21.1875C0.84625 20.3912 0.6375 19.4837 0.575 18.1525C0.51625 16.82 0.5 16.3963 0.5 13C0.5 9.60375 0.5125 9.18 0.575 7.8475C0.6375 6.515 0.84625 5.61 1.15625 4.8125C1.46905 3.97772 1.961 3.22165 2.5975 2.5975C3.22209 1.96154 3.97804 1.46966 4.8125 1.15625C5.61 0.84625 6.515 0.6375 7.8475 0.575C9.18 0.51625 9.60375 0.5 13 0.5ZM13 6.75C11.3424 6.75 9.75269 7.40848 8.58058 8.58058C7.40848 9.75269 6.75 11.3424 6.75 13C6.75 14.6576 7.40848 16.2473 8.58058 17.4194C9.75269 18.5915 11.3424 19.25 13 19.25C14.6576 19.25 16.2473 18.5915 17.4194 17.4194C18.5915 16.2473 19.25 14.6576 19.25 13C19.25 11.3424 18.5915 9.75269 17.4194 8.58058C16.2473 7.40848 14.6576 6.75 13 6.75V6.75ZM21.125 6.4375C21.125 6.0231 20.9604 5.62567 20.6674 5.33265C20.3743 5.03962 19.9769 4.875 19.5625 4.875C19.1481 4.875 18.7507 5.03962 18.4576 5.33265C18.1646 5.62567 18 6.0231 18 6.4375C18 6.8519 18.1646 7.24933 18.4576 7.54235C18.7507 7.83538 19.1481 8 19.5625 8C19.9769 8 20.3743 7.83538 20.6674 7.54235C20.9604 7.24933 21.125 6.8519 21.125 6.4375ZM13 9.25C13.9946 9.25 14.9484 9.64509 15.6517 10.3483C16.3549 11.0516 16.75 12.0054 16.75 13C16.75 13.9946 16.3549 14.9484 15.6517 15.6517C14.9484 16.3549 13.9946 16.75 13 16.75C12.0054 16.75 11.0516 16.3549 10.3483 15.6517C9.64509 14.9484 9.25 13.9946 9.25 13C9.25 12.0054 9.64509 11.0516 10.3483 10.3483C11.0516 9.64509 12.0054 9.25 13 9.25V9.25Z' />
								</svg>
							</a>
						</div>
						<p className='copyright'>© musik.com, 2021 </p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
