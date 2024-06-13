import AboutImg from '@/assets/about-img.png';
import ArrowRight from '@/assets/arrow-right.svg';
import '@/components/about/about.css';

type Props = {};

const About = (props: Props) => {
	return (
		<section id='about' className='section'>
			<div className='container'>
				<div className='wrapper wrapper__about flex flex-center'>
					<div className='about__block-img'>
						<img src={AboutImg} alt='about-bg' />
					</div>
					<div className='about__content'>
						<h2 className='title title--about'>About Music</h2>
						<p className='text text--about'>
							Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
							Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a
							augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus
							non neque suscipit luctus. Mauris et erat id ipsum condimentum
							cursus. Sed tempus enim non massa mattis iaculis. In quis massa
							risus
						</p>

						<button className='button button--main flex-center'>
							Learn More
							<img src={ArrowRight} alt='arrow-right' className='arrow-right' />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
