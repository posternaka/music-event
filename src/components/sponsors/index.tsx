import Image1 from '@/assets/partners/img-1.png';
import Image2 from '@/assets/partners/img-2.png';
import Image3 from '@/assets/partners/img-3.png';
import Image4 from '@/assets/partners/img-4.png';
import Image5 from '@/assets/partners/img-5.png';
import Image6 from '@/assets/partners/img-6.png';
import Image7 from '@/assets/partners/img-7.png';
import Image8 from '@/assets/partners/img-8.png';
import '@/components/sponsors/sponsors.css';

type Props = {};

const Sponsors = (props: Props) => {
	return (
		<section id='sponsors' className='section section__sponsors'>
			<div className='container'>
				<div className='wrapper flex flex-center flex-col'>
					<h2 className='title title--sponsors'>Our Sponsors</h2>

					<div className='sponsors__block flex'>
						<div className='sponsors__loop'>
							<img src={Image1} alt='sponsor-1' className='sponsors__img' />
							<img src={Image2} alt='sponsor-2' className='sponsors__img' />
							<img src={Image3} alt='sponsor-3' className='sponsors__img' />
							<img src={Image4} alt='sponsor-4' className='sponsors__img' />
						</div>
						<div className='sponsors__loop'>
							<img src={Image1} alt='sponsor-1' className='sponsors__img' />
							<img src={Image2} alt='sponsor-2' className='sponsors__img' />
							<img src={Image3} alt='sponsor-3' className='sponsors__img' />
							<img src={Image4} alt='sponsor-4' className='sponsors__img' />
						</div>
						<div className='sponsors__gradient'></div>
					</div>
					<div className='sponsors__block flex'>
						<div className='sponsors__loop sponsors__loop--reverse'>
							<img src={Image5} alt='sponsor-5' className='sponsors__img' />
							<img src={Image6} alt='sponsor-6' className='sponsors__img' />
							<img src={Image7} alt='sponsor-7' className='sponsors__img' />
							<img src={Image8} alt='sponsor-8' className='sponsors__img' />
						</div>
						<div className='sponsors__loop sponsors__loop--reverse'>
							<img src={Image5} alt='sponsor-5' className='sponsors__img' />
							<img src={Image6} alt='sponsor-6' className='sponsors__img' />
							<img src={Image7} alt='sponsor-7' className='sponsors__img' />
							<img src={Image8} alt='sponsor-8' className='sponsors__img' />
						</div>
						<div className='sponsors__gradient'></div>
					</div>

					<button className='button button--main'>Become a Sponsor</button>
				</div>
			</div>
		</section>
	);
};

export default Sponsors;
