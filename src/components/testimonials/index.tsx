import UserPhoto1 from '@/assets/testimonials/avatar-1.png';
import UserPhoto2 from '@/assets/testimonials/avatar-2.png';
import UserPhoto3 from '@/assets/testimonials/avatar-3.png';
import '@/components/testimonials/testimonials.css';
import Flickity from 'react-flickity-component';

type Props = {};

const Testimonials = (props: Props) => {
	const flickityOptions = {
		lazyLoad: true,
		wrapAround: true,
		autoPlay: 3000,
		draggable: true,
		pageDots: false,
		initialIndex: 2,
	};

	return (
		<section id='testimonials' className='section'>
			<div className='wrapper'>
				<h2 className='title title--testimonials'>Testimonials</h2>

				<div className='testimonials__slider'>
					<Flickity
						elementType={'div'}
						options={flickityOptions}
						disableImagesLoaded={false}
						reloadOnUpdate
						static
					>
						<div className='testimonials__slide flex flex-center'>
							<div className='testimonials__slide-content'>
								<p className='testimonials__slide-title'>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
							</div>
							<div className='testimonials__slide-user flex flex-center flex-col'>
								<img
									src={UserPhoto1}
									alt='user-1'
									className='testimonials__user-photo'
								/>
								<p className='testimonials__username'>Johnny Doe</p>
								<a href='ipsum.com' className='testimonials__user-link'>
									ipsum.com
								</a>
							</div>
						</div>

						<div className='testimonials__slide flex flex-center'>
							<div className='testimonials__slide-content'>
								<p className='testimonials__slide-title'>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
							</div>
							<div className='testimonials__slide-user flex flex-center flex-col'>
								<img
									src={UserPhoto2}
									alt='user-2'
									className='testimonials__user-photo'
								/>
								<p className='testimonials__username'>Ellie James</p>
								<a href='ipsum.com' className='testimonials__user-link'>
									ipsum.com
								</a>
							</div>
						</div>

						<div className='testimonials__slide flex flex-center'>
							<div className='testimonials__slide-content'>
								<p className='testimonials__slide-title'>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
							</div>
							<div className='testimonials__slide-user flex flex-center flex-col'>
								<img
									src={UserPhoto3}
									alt='user-3'
									className='testimonials__user-photo'
								/>
								<p className='testimonials__username'>Myne Barack</p>
								<a href='ipsum.com' className='testimonials__user-link'>
									ipsum.com
								</a>
							</div>
						</div>

						<div className='testimonials__slide flex flex-center'>
							<div className='testimonials__slide-content'>
								<p className='testimonials__slide-title'>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
							</div>
							<div className='testimonials__slide-user flex flex-center flex-col'>
								<img
									src={UserPhoto1}
									alt='user-3'
									className='testimonials__user-photo'
								/>
								<p className='testimonials__username'>Myne Barack</p>
								<a href='ipsum.com' className='testimonials__user-link'>
									ipsum.com
								</a>
							</div>
						</div>

						<div className='testimonials__slide flex flex-center'>
							<div className='testimonials__slide-content'>
								<p className='testimonials__slide-title'>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.
								</p>
							</div>
							<div className='testimonials__slide-user flex flex-center flex-col'>
								<img
									src={UserPhoto2}
									alt='user-3'
									className='testimonials__user-photo'
								/>
								<p className='testimonials__username'>Myne Barack</p>
								<a href='ipsum.com' className='testimonials__user-link'>
									ipsum.com
								</a>
							</div>
						</div>
					</Flickity>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
