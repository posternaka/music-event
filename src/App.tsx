import About from '@/components/about';
import ContactUs from '@/components/contactUs';
import Explore from '@/components/explore';
import Home from '@/components/home';
import Navbar from '@/components/navbar';
import Schedule from '@/components/schedule';
import Shots from '@/components/shots';
import Singers from '@/components/singers';
import Sponsors from '@/components/sponsors';
import Testimonials from '@/components/testimonials';
import Tickets from '@/components/tickets';
import Footer from '@/components/footer';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Home />
			<Explore />
			<About />
			<Singers />
			<Schedule />
			<Tickets />
			<Sponsors />
			<Testimonials />
			<Shots />
			<ContactUs />
			<Footer />
		</div>
	);
}

export default App;
