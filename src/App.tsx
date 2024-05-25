import Home from '@/components/home';
import Navbar from '@/components/navbar';
import Explore from './components/explore';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Home />
			<Explore />
		</div>
	);
}

export default App;
