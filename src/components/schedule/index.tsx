import '@/components/schedule/schedule.css';
import { useState } from 'react';
import { scheduleInfo } from '../shared/InfoUser';

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
		<section id='event' className='section section__schedule'>
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
							<div className='table__header grid__table grid__table--open'>
								<p>Time</p>
								<p>Content</p>
								<p>Speakers</p>
								<p></p>
							</div>
							{scheduleInfo &&
								scheduleInfo.map((tab, indexTab) =>
									tab.map((info, indexInfo) => (
										<div
											key={info.record + indexInfo}
											className={
												isActive === indexTab + 1
													? 'table__body grid__table grid__table--open'
													: 'table__body grid__table'
											}
										>
											<p>{info.time}</p>
											<p>{info.description}</p>
											<div className='table__user-list flex'>
												{info.user.map((userInfo, indexUser) => (
													<div
														key={userInfo.name + indexUser}
														className='table__user-info flex'
													>
														<img src={userInfo.img} alt='photo' />
														<div>
															<p className='table__name'>{userInfo.name}</p>
															<p>
																Booth:{' '}
																<span className='table__place'>
																	{userInfo.place}
																</span>
															</p>
														</div>
													</div>
												))}
											</div>
											<p className='table__record'>{info.record}</p>
										</div>
									))
								)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Schedule;
