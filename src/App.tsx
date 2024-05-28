import About from '@/components/about';
import Explore from '@/components/explore';
import Home from '@/components/home';
import Navbar from '@/components/navbar';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Home />
			<Explore />
			<About />
		</div>
	);
}

export default App;
