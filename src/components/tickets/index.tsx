import '@/components/tickets/tickets.css';

type Props = {};

const Tickets = (props: Props) => {
	return (
		<section id='ticket' className='section'>
			<div className='container'>
				<div className='wrapper'>
					<h2 className='title title--tickets'>
						Choose a Tier that’s right for you
					</h2>

					<div className='ticket__block flex'>
						<div className='ticket__item flex flex-center ticket__border-1 ticket__item-color-1'>
							<div className='ticket__info flex flex-center flex-col'>
								<p className='ticket__item-title'>Basic</p>
								<p className='ticket__cost'>$100</p>
								<p className='ticket__seat'>1 Seat Available</p>
								<p className='ticket__wifi ticket__text-line-through'>
									Access to Wifi Router
								</p>
								<p className='ticket__food ticket__text-line-through'>
									Free Food & Coffee
								</p>
							</div>

							<button className='button button--ticket'>Get Tickets</button>
						</div>

						<div className='ticket__item flex flex-center ticket__border-2 ticket__item-color-2'>
							<div className='ticket__info flex flex-center flex-col'>
								<p className='ticket__item-title'>Basic</p>
								<p className='ticket__cost'>$170</p>
								<p className='ticket__seat'>1 Seat Available</p>
								<p className='ticket__wifi'>Access to Wifi Router</p>
								<p className='ticket__food ticket__text-line-through'>
									Free Food & Coffee
								</p>
							</div>

							<button className='button button--ticket'>Get Tickets</button>
						</div>

						<div className='ticket__item flex flex-center ticket__border-3 ticket__item-color-3'>
							<div className='ticket__info flex flex-center flex-col'>
								<p className='ticket__item-title'>Basic</p>
								<p className='ticket__cost'>$250</p>
								<p className='ticket__seat'>2 Seat Available</p>
								<p className='ticket__wifi'>Access to Wifi Router</p>
								<p className='ticket__food'>Free Food & Coffee</p>
							</div>

							<button className='button button--ticket'>Get Tickets</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tickets;
