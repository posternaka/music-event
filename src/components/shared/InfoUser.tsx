import photo1 from '@/assets/event__user-1.png';
import photo2 from '@/assets/event__user-2.png';
import photo3 from '@/assets/event__user-3.png';
import photo4 from '@/assets/event__user-4.png';
import photo5 from '@/assets/event__user-5.png';

interface UserType {
	img: string;
	name: string;
	place: string;
}

interface InfoType {
	time: string;
	description: string;
	user: UserType[];
	record: string;
}

type Info = InfoType[][];

export const Info: Info = [
	[
		{
			time: '11:00 AM to 12:00 PM',
			description: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
			user: [
				{
					img: photo1,
					name: 'Yui Ronald',
					place: '2F12',
				},
			],
			record: 'Preview',
		},
		{
			time: '12:00 PM to 03:00 PM',
			description:
				'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.',
			user: [
				{
					img: photo2,
					name: 'Bob John',
					place: '3G12',
				},
				{
					img: photo1,
					name: 'Yui Ronald',
					place: '2F12',
				},
				{
					img: photo3,
					name: 'Emma Satoshi',
					place: '2A35',
				},
			],
			record: 'Live',
		},
		{
			time: '03:00 PM to 04:00 PM',
			description:
				'Vestibulum vel eros vel metus lacinia feugiat a nec metus. ',
			user: [
				{
					img: photo4,
					name: 'Sasha Jackson',
					place: '2F18',
				},
				{
					img: photo5,
					name: 'Diana Brock',
					place: '2F24',
				},
			],
			record: 'Upcoming',
		},
	],
	[
		{
			time: '03:00 PM to 04:00 PM',
			description:
				'Vestibulum vel eros vel metus lacinia feugiat a nec metus. ',
			user: [
				{
					img: photo4,
					name: 'Sasha Jackson',
					place: '2F18',
				},
				{
					img: photo5,
					name: 'Diana Brock',
					place: '2F24',
				},
			],
			record: 'Upcoming',
		},
		{
			time: '12:00 PM to 03:00 PM',
			description:
				'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.',
			user: [
				{
					img: photo2,
					name: 'Bob John',
					place: '3G12',
				},
				{
					img: photo1,
					name: 'Yui Ronald',
					place: '2F12',
				},
				{
					img: photo3,
					name: 'Emma Satoshi',
					place: '2A35',
				},
			],
			record: 'Live',
		},
	],
	[
		{
			time: '12:00 PM to 03:00 PM',
			description:
				'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex.',
			user: [
				{
					img: photo2,
					name: 'Bob John',
					place: '3G12',
				},
				{
					img: photo1,
					name: 'Yui Ronald',
					place: '2F12',
				},
				{
					img: photo3,
					name: 'Emma Satoshi',
					place: '2A35',
				},
			],
			record: 'Live',
		},
		{
			time: '11:00 AM to 12:00 PM',
			description: 'Vestibulum vel eros vel metus lacinia feugiat a nec metus.',
			user: [
				{
					img: photo1,
					name: 'Yui Ronald',
					place: '2F12',
				},
			],
			record: 'Preview',
		},
	],
];
