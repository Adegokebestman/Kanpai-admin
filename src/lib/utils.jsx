import { NavLink } from 'react-router-dom';

export const filterActivities = [
	{
		tag: 'All Activities',
		url: '?activities=all',
	},
	{
		tag: 'Recent Activities',
		url: '?activities=recent',
	},
	{
		tag: 'Recent uploads',
		url: '?activities=uploads',
	},
	{
		tag: 'pending order',
		url: '?activities=pendingOrder',
	},
];

export const filterProducts = [
	{
		tag: 'pending order',
		url: '?order=pendingOrder',
	},
	{
		tag: 'delivered order',
		url: '?order=pendingOrder',
	},
];

export function tableData(user) {
	const columns = [
		{
			name: '',
			selector: (row) => (
				<div className='h-16 w-16 rounded-full object-contain'>
					<img
						src={row.img}
						alt={row.productName}
						className='max-w-full min-w-full'
					/>
				</div>
			),
			center: true,
		},
		{
			name: 'Suppliers Name',
			selector: (row) => (
				<NavLink to={`${row.id.toString()}`}>
					{row.suppliersName}
				</NavLink>
			),
			sortable: true,
		},
		{
			name: 'Suppliers Email',
			selector: (row) => row.email,
		},

		{
			name: 'Date Flagged',
			selector: (row) => row.date,
		},
		{
			name: '',
			selector: (row) => (
				<NavLink
					to={`${row.id.toString()}`}
					className='bg-red-bg text-red-text px-4 py-2 rounded-full block capitalize'
				>
					{row.flagged}
				</NavLink>
			),
		},
	];

	const dataArray = [];

	for (let i = 0; i < 30; i++) {
		const randomURL = 'https://source.unsplash.com/100x100/?portrait';
		const suppliersName = !user
			? `Product ${i + 1}`
			: `Suppliers Name ${i + 1}`;
		const email = `user${i + 1}@example.com`;
		const id = i + 1;
		const date = Date.now() + 1;

		const object = {
			id: id,
			img: randomURL,
			suppliersName,
			email,
			date,
			flagged: 'flagged',
		};

		dataArray.push(object);
	}
	return { columns, dataArray };
}
