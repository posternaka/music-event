import About from '@/components/about';
import Explore from '@/components/explore';
import Home from '@/components/home';
import Navbar from '@/components/navbar';
import Schedule from '@/components/schedule';
import Singers from '@/components/singers';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Home />
			<Explore />
			<About />
			<Singers />
			<Schedule />
		</div>
	);
}

export default App;
