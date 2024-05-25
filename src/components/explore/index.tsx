import Icon1 from '@/assets/explore-card-1.png';
import Icon2 from '@/assets/explore-card-2.png';
import Icon3 from '@/assets/explore-card-3.png';
import Icon4 from '@/assets/explore-card-4.png';
import Icon5 from '@/assets/explore-card-5.png';
import '@/components/explore/explore.css';

type Props = {};

const Explore = (props: Props) => {
	return (
		<section className='section'>
			<div className='container'>
				<h2 className='explore__title'>
					<span className='explore__title--color'>Explore</span> By Category
				</h2>
			</div>

			<div className='explore__cards flex flex-center'>
				<div className='explore__item explore__item--1'>
					<img src={Icon1} alt='explore-icon-1' className='explore__icon' />
					<p className='item__title'>Pop</p>
					<p className='item__description'>
						Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate
						vitae
					</p>
				</div>

				<div className='explore__item explore__item--2'>
					<img src={Icon2} alt='explore-icon-2' className='explore__icon' />
					<p className='item__title'>Folk</p>
					<p className='item__description'>
						Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate
						vitae
					</p>
				</div>

				<div className='explore__item explore__item--3'>
					<img src={Icon3} alt='explore-icon-3' className='explore__icon' />
					<p className='item__title'>Instrumental</p>
					<p className='item__description'>
						Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate
						vitae
					</p>
				</div>

				<div className='explore__item explore__item--4'>
					<img src={Icon4} alt='explore-icon-4' className='explore__icon' />
					<p className='item__title'>Rock</p>
					<p className='item__description'>
						Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate
						vitae
					</p>
				</div>

				<div className='explore__item explore__item--5'>
					<img src={Icon5} alt='explore-icon-5' className='explore__icon' />
					<p className='item__title'>Jazz</p>
					<p className='item__description'>
						Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate
						vitae
					</p>
				</div>
			</div>
		</section>
	);
};

export default Explore;
