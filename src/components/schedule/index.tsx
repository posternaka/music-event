import '@/components/schedule/schedule.css';
import { useState } from 'react';

type Props = {};

interface DateType {
	title: string;
	subtitle: string;
}

const date: Array<DateType> = [
	{ title: 'Day 01', subtitle: '16 August' },
	{ title: 'Day 02', subtitle: '17 August' },
	{ title: 'Day 03', subtitle: '18 August' },
];

const Schedule = (props: Props) => {
	const [isActive, setIsActive] = useState<number>(1);

	return (
		<section className='section section__schedule'>
			<div className='container'>
				<div className='wrapper wrapper__schedule'>
					<h2 className='title title--schedule'>Event Schedule</h2>

					<div className='schedule__block'>
						<div className='schedule__nav'>
							{date &&
								date.map((day, index) => (
									<div
										key={day.title + index}
										className={
											isActive === index + 1
												? 'schedule__date schedule__date--active'
												: 'schedule__date'
										}
										onClick={() => setIsActive(index + 1)}
									>
										<p className='date__title'>{day.title}</p>
										<p className='date__subtitle'>{day.subtitle}</p>
									</div>
								))}
						</div>
						<div className='schedule__table flex'>
							<div className='table__header grid__table'>
								<p>Time</p>
								<p>Content</p>
								<p>Speakers</p>
								<p></p>
							</div>
							<th></th>

							<div className='table__body grid__table'>
								<p>03:00 PM to 04:00 PM</p>
								<p>
									Vestibulum vel eros vel metus lacinia feugiat a nec metus.{' '}
								</p>
								<div className='table__user-list flex'>
									<div className='table__user-info flex'>
										<img src={photo4} alt='photo' />
										<div>
											<p className='table__name'>Sasha Jackson</p>
											<p>
												Booth: <span className='table__place'>2F18</span>
											</p>
										</div>
									</div>
									<div className='table__user-info flex'>
										<img src={photo5} alt='photo' />
										<div>
											<p className='table__name'>Diana Brock</p>
											<p>
												Booth: <span className='table__place'>2F24</span>
											</p>
										</div>
									</div>
								</div>
								<p className='table__record'>Upcoming</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Schedule;
