import ArrowRight from '@/assets/arrow-right.svg';
import SingersImg from '@/assets/singers-img.png';
import '@/components/singers/singers.css';

type Props = {};

const Singers = (props: Props) => {
	return (
		<section className='section'>
			<div className='container'>
				<div className='wrapper wrapper__singers flex flex-center'>
					<div className='singers__content'>
						<h2 className='title title--singers'>Singers</h2>
						<p className='text text--singers'>
							Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
							Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a
							augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus
							non neque suscipit luctus. Mauris et erat id ipsum condimentum
							cursus. Sed tempus enim non massa mattis iaculis. In quis massa
							risus
						</p>

						<button className='button button--main flex-center'>
							View All Singers
							<img src={ArrowRight} alt='arrow-right' className='arrow-right' />
						</button>
					</div>
					<div className='singers__block-img'>
						<img src={SingersImg} alt='singers-bg' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Singers;
