import Shot1 from '@/assets/shots/shot-1.png';
import Shot2 from '@/assets/shots/shot-2.png';
import Shot3 from '@/assets/shots/shot-3.png';
import Shot4 from '@/assets/shots/shot-4.png';
import Shot5 from '@/assets/shots/shot-5.png';
import '@/components/shots/shots.css';
import Flickity from 'react-flickity-component';

type Props = {};

const Shots = (props: Props) => {
	const flickityOptions = {
		groupCells: 3,
		lazyLoad: true,
		wrapAround: true,
		pageDots: false,
		initialIndex: 1,
		prevNextButtons: true,
	};

	return (
		<section className='section section--shots'>
			<div className='container'>
				<h2 className='title'>See our Best Shots</h2>
			</div>
			<div className='shots__slider'>
				{/* <div className='shots__arrows flex'>
					<div className='shots__arrow flex flex-center'>
						<svg
							width='12'
							height='19'
							viewBox='0 0 12 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M4.51482 9.15569L11.4448 16.0857L9.46522 18.0653L0.555625 9.15569L9.46523 0.246094L11.4448 2.22569L4.51482 9.15569Z'
								fill='#222222'
							/>
						</svg>
					</div>

					<div className='shots__arrow flex flex-center'>
						<svg
							width='12'
							height='19'
							viewBox='0 0 12 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7.48615 9.15534L0.556152 2.22534L2.53575 0.245739L11.4454 9.15534L2.53575 18.0649L0.556152 16.0853L7.48615 9.15534Z'
								fill='#222222'
							/>
						</svg>
					</div>
				</div> */}

				<Flickity
					elementType={'div'}
					options={flickityOptions}
					disableImagesLoaded={false}
					reloadOnUpdate
					static
				>
					<div className='shots__slide'>
						<img src={Shot1} alt='shot-1' className='slide__img' />
						<div className='shots__analytic flex'>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-heart'
								>
									<path d='M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z' />
								</svg>
								<span className='shots__heart-text'>412</span>
							</div>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-message'
								>
									<path d='M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM10 14H12C12.7879 14 13.5681 13.8448 14.2961 13.5433C15.0241 13.2417 15.6855 12.7998 16.2426 12.2426C16.7998 11.6855 17.2417 11.0241 17.5433 10.2961C17.8448 9.56815 18 8.78793 18 8C18 7.21207 17.8448 6.43185 17.5433 5.7039C17.2417 4.97595 16.7998 4.31451 16.2426 3.75736C15.6855 3.20021 15.0241 2.75825 14.2961 2.45672C13.5681 2.15519 12.7879 2 12 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 11.61 4.462 13.966 10 16.48V14Z' />
								</svg>
								<span className='shots__message-text'>140</span>
							</div>
						</div>
						<p className='shots__slide-title'>Lorem Ipsum Amet</p>
						<p className='shots__tags'>
							#music #concert #conference #london #event #artist #dj #soundtrack
							#dance
						</p>
					</div>

					<div className='shots__slide'>
						<img src={Shot2} alt='shot-2' className='slide__img' />
						<div className='shots__analytic flex'>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-heart'
								>
									<path d='M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z' />
								</svg>
								<span className='shots__heart-text'>412</span>
							</div>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-message'
								>
									<path d='M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM10 14H12C12.7879 14 13.5681 13.8448 14.2961 13.5433C15.0241 13.2417 15.6855 12.7998 16.2426 12.2426C16.7998 11.6855 17.2417 11.0241 17.5433 10.2961C17.8448 9.56815 18 8.78793 18 8C18 7.21207 17.8448 6.43185 17.5433 5.7039C17.2417 4.97595 16.7998 4.31451 16.2426 3.75736C15.6855 3.20021 15.0241 2.75825 14.2961 2.45672C13.5681 2.15519 12.7879 2 12 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 11.61 4.462 13.966 10 16.48V14Z' />
								</svg>
								<span className='shots__message-text'>140</span>
							</div>
						</div>
						<p className='shots__slide-title'>Lorem Ipsum Amet</p>
						<p className='shots__tags'>
							#music #concert #conference #london #event #artist #dj #soundtrack
							#dance
						</p>
					</div>

					<div className='shots__slide'>
						<img src={Shot3} alt='shot-3' className='slide__img' />
						<div className='shots__analytic flex'>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-heart'
								>
									<path d='M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z' />
								</svg>
								<span className='shots__heart-text'>412</span>
							</div>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-message'
								>
									<path d='M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM10 14H12C12.7879 14 13.5681 13.8448 14.2961 13.5433C15.0241 13.2417 15.6855 12.7998 16.2426 12.2426C16.7998 11.6855 17.2417 11.0241 17.5433 10.2961C17.8448 9.56815 18 8.78793 18 8C18 7.21207 17.8448 6.43185 17.5433 5.7039C17.2417 4.97595 16.7998 4.31451 16.2426 3.75736C15.6855 3.20021 15.0241 2.75825 14.2961 2.45672C13.5681 2.15519 12.7879 2 12 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 11.61 4.462 13.966 10 16.48V14Z' />
								</svg>
								<span className='shots__message-text'>140</span>
							</div>
						</div>
						<p className='shots__slide-title'>Lorem Ipsum Amet</p>
						<p className='shots__tags'>
							#music #concert #conference #london #event #artist #dj #soundtrack
							#dance
						</p>
					</div>

					<div className='shots__slide'>
						<img src={Shot4} alt='shot-4' className='slide__img' />
						<div className='shots__analytic flex'>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-heart'
								>
									<path d='M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z' />
								</svg>
								<span className='shots__heart-text'>412</span>
							</div>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-message'
								>
									<path d='M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM10 14H12C12.7879 14 13.5681 13.8448 14.2961 13.5433C15.0241 13.2417 15.6855 12.7998 16.2426 12.2426C16.7998 11.6855 17.2417 11.0241 17.5433 10.2961C17.8448 9.56815 18 8.78793 18 8C18 7.21207 17.8448 6.43185 17.5433 5.7039C17.2417 4.97595 16.7998 4.31451 16.2426 3.75736C15.6855 3.20021 15.0241 2.75825 14.2961 2.45672C13.5681 2.15519 12.7879 2 12 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 11.61 4.462 13.966 10 16.48V14Z' />
								</svg>
								<span className='shots__message-text'>140</span>
							</div>
						</div>
						<p className='shots__slide-title'>Lorem Ipsum Amet</p>
						<p className='shots__tags'>
							#music #concert #conference #london #event #artist #dj #soundtrack
							#dance
						</p>
					</div>

					<div className='shots__slide'>
						<img src={Shot5} alt='shot-5' className='slide__img' />
						<div className='shots__analytic flex'>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-heart'
								>
									<path d='M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z' />
								</svg>
								<span className='shots__heart-text'>412</span>
							</div>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-message'
								>
									<path d='M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM10 14H12C12.7879 14 13.5681 13.8448 14.2961 13.5433C15.0241 13.2417 15.6855 12.7998 16.2426 12.2426C16.7998 11.6855 17.2417 11.0241 17.5433 10.2961C17.8448 9.56815 18 8.78793 18 8C18 7.21207 17.8448 6.43185 17.5433 5.7039C17.2417 4.97595 16.7998 4.31451 16.2426 3.75736C15.6855 3.20021 15.0241 2.75825 14.2961 2.45672C13.5681 2.15519 12.7879 2 12 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 11.61 4.462 13.966 10 16.48V14Z' />
								</svg>
								<span className='shots__message-text'>140</span>
							</div>
						</div>
						<p className='shots__slide-title'>Lorem Ipsum Amet</p>
						<p className='shots__tags'>
							#music #concert #conference #london #event #artist #dj #soundtrack
							#dance
						</p>
					</div>

					<div className='shots__slide'>
						<img src={Shot2} alt='shot-2' className='slide__img' />
						<div className='shots__analytic flex'>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-heart'
								>
									<path d='M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z' />
								</svg>
								<span className='shots__heart-text'>412</span>
							</div>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-message'
								>
									<path d='M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM10 14H12C12.7879 14 13.5681 13.8448 14.2961 13.5433C15.0241 13.2417 15.6855 12.7998 16.2426 12.2426C16.7998 11.6855 17.2417 11.0241 17.5433 10.2961C17.8448 9.56815 18 8.78793 18 8C18 7.21207 17.8448 6.43185 17.5433 5.7039C17.2417 4.97595 16.7998 4.31451 16.2426 3.75736C15.6855 3.20021 15.0241 2.75825 14.2961 2.45672C13.5681 2.15519 12.7879 2 12 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 11.61 4.462 13.966 10 16.48V14Z' />
								</svg>
								<span className='shots__message-text'>140</span>
							</div>
						</div>
						<p className='shots__slide-title'>Lorem Ipsum Amet</p>
						<p className='shots__tags'>
							#music #concert #conference #london #event #artist #dj #soundtrack
							#dance
						</p>
					</div>

					<div className='shots__slide'>
						<img src={Shot3} alt='shot-3' className='slide__img' />
						<div className='shots__analytic flex'>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-heart'
								>
									<path d='M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z' />
								</svg>
								<span className='shots__heart-text'>412</span>
							</div>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-message'
								>
									<path d='M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM10 14H12C12.7879 14 13.5681 13.8448 14.2961 13.5433C15.0241 13.2417 15.6855 12.7998 16.2426 12.2426C16.7998 11.6855 17.2417 11.0241 17.5433 10.2961C17.8448 9.56815 18 8.78793 18 8C18 7.21207 17.8448 6.43185 17.5433 5.7039C17.2417 4.97595 16.7998 4.31451 16.2426 3.75736C15.6855 3.20021 15.0241 2.75825 14.2961 2.45672C13.5681 2.15519 12.7879 2 12 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 11.61 4.462 13.966 10 16.48V14Z' />
								</svg>
								<span className='shots__message-text'>140</span>
							</div>
						</div>
						<p className='shots__slide-title'>Lorem Ipsum Amet</p>
						<p className='shots__tags'>
							#music #concert #conference #london #event #artist #dj #soundtrack
							#dance
						</p>
					</div>

					<div className='shots__slide'>
						<img src={Shot4} alt='shot-4' className='slide__img' />
						<div className='shots__analytic flex'>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-heart'
								>
									<path d='M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z' />
								</svg>
								<span className='shots__heart-text'>412</span>
							</div>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-message'
								>
									<path d='M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM10 14H12C12.7879 14 13.5681 13.8448 14.2961 13.5433C15.0241 13.2417 15.6855 12.7998 16.2426 12.2426C16.7998 11.6855 17.2417 11.0241 17.5433 10.2961C17.8448 9.56815 18 8.78793 18 8C18 7.21207 17.8448 6.43185 17.5433 5.7039C17.2417 4.97595 16.7998 4.31451 16.2426 3.75736C15.6855 3.20021 15.0241 2.75825 14.2961 2.45672C13.5681 2.15519 12.7879 2 12 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 11.61 4.462 13.966 10 16.48V14Z' />
								</svg>
								<span className='shots__message-text'>140</span>
							</div>
						</div>
						<p className='shots__slide-title'>Lorem Ipsum Amet</p>
						<p className='shots__tags'>
							#music #concert #conference #london #event #artist #dj #soundtrack
							#dance
						</p>
					</div>

					<div className='shots__slide'>
						<img src={Shot5} alt='shot-5' className='slide__img' />
						<div className='shots__analytic flex'>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-heart'
								>
									<path d='M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z' />
								</svg>
								<span className='shots__heart-text'>412</span>
							</div>
							<div className='flex flex-center'>
								<svg
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
									className='shots__analytic-icon icon-message'
								>
									<path d='M8 0H12C14.1217 0 16.1566 0.842855 17.6569 2.34315C19.1571 3.84344 20 5.87827 20 8C20 10.1217 19.1571 12.1566 17.6569 13.6569C16.1566 15.1571 14.1217 16 12 16V19.5C7 17.5 0 14.5 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0ZM10 14H12C12.7879 14 13.5681 13.8448 14.2961 13.5433C15.0241 13.2417 15.6855 12.7998 16.2426 12.2426C16.7998 11.6855 17.2417 11.0241 17.5433 10.2961C17.8448 9.56815 18 8.78793 18 8C18 7.21207 17.8448 6.43185 17.5433 5.7039C17.2417 4.97595 16.7998 4.31451 16.2426 3.75736C15.6855 3.20021 15.0241 2.75825 14.2961 2.45672C13.5681 2.15519 12.7879 2 12 2H8C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 11.61 4.462 13.966 10 16.48V14Z' />
								</svg>
								<span className='shots__message-text'>140</span>
							</div>
						</div>
						<p className='shots__slide-title'>Lorem Ipsum Amet</p>
						<p className='shots__tags'>
							#music #concert #conference #london #event #artist #dj #soundtrack
							#dance
						</p>
					</div>
				</Flickity>
			</div>
		</section>
	);
};

export default Shots;
