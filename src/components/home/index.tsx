import PlayIcon from '@/assets/play-logo.svg';
import '@/components/home/home.css';

type Props = {};

const Home = (props: Props) => {
	return (
		<section id='home' className='section__home flex flex-center flex-col'>
			<div className='wrapper__home'>
				<h1 className='home__title'>
					The Best experience of{' '}
					<span className='home__title--optional'>Music</span> in 2021
				</h1>
				<p className='home__subtitle'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					vitae ligula placerat, eleifend ex non, vehicula libero. Suspendisse
					eget tellus lectus.
				</p>

				<div className='home__btns'>
					<button className='button button--home'>Get Started</button>
					<button className='button button--video'>
						<img src={PlayIcon} alt='play-icon' />
						Watch Video
					</button>
				</div>
			</div>
		</section>
	);
};

export default Home;
