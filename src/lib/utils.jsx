import { NavLink } from 'react-router-dom';
import EditIcon from '../components/icons/editIcon.svg?component';
import DeleteIcon from '../components/icons/deleteIcon.svg?component';



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
		name: 'pending',
	},
	{
		tag: 'delivered order',
		url: '?order=pendingOrder',
		name: 'delivered',
	},
];

export const reportTags = [
	{
		title: 'Products Flagged',
		url: 'products',
	},
	{
		title: 'Users Flagged',
		url: 'users',
	},
];

export const buyersTags = [
	{
		title: 'Buyers Details',
		url: '.',
	},
	{
		title: 'Buyers Activity',
		url: 'activities',
	},
];
export const driversTags = [
	{
		title: 'Drivers Details',
		url: '.',
	},
	{
		title: 'Drivers Activity',
		url: 'activities',
	},
];
export const sellersTags = [
	{
		title: 'Seller Details',
		url: '.',
	},
	{
		title: 'Seller Activity',
		url: 'activities',
	},
	{
		title: 'Seller Inventory',
		url: 'inventory',
	},
];

// list of buyers
export function buyerList(user) {
	const handleDeleteClick = (id) =>{
			console.log({id})
	};
	const handleEditClick = (id) =>{
		console.log({id})
	};
	const columns = [
		{
			name: '',
			selector: (row) => (
				<div className='h-16 w-16 rounded-full object-contain'>
					<img
						src={row.img}
						alt={row.buyersName}
						className='max-w-full min-w-full'
					/>
				</div>

			),
			center: true,
		},
		{
			name: '',
			selector: (row) => (
				<NavLink to={`${row.id.toString()}`}>
				<h1 className='text-xl'>{row.buyersName}</h1>
			<p className='text-gray-700'> {row.email} </p>
			</NavLink>
			)
		},
		{
			name: '',
			selector: (row) => (

				<div className='px-4 py-2 '>
					<h1 className='text-xl'>{row.date} </h1>
					<p className='text-gray-700'>subscribed date</p>
					</div>
			),
			sortable: true,
		},
		{
			name: '',
			selector: (row) => (
				<div className='px-4 py-2 '>
				<h1 className='text-xl'>{row.phone} </h1>
			<p  className='text-gray-700'> Phone no </p>
			</div>
			)
		},

		{
			name: '',
			selector: (row) => (
				<div
					className=' px-4 py-2 rounded-full block capitalize'
				>
					<EditIcon onClick={() => handleEditClick(row.id)}/>
				</div>
			),
		},

		{
			name: '',
			selector: (row) => (
				<div
					className=' px-4 py-2 rounded-full block capitalize'
				>
					<DeleteIcon onClick={() => handleDeleteClick(row.id)} />
				</div>
			),
		},
	];

	const dataArray = [];

	for (let i = 0; i < 30; i++) {
		const randomURL = 'https://source.unsplash.com/100x100/?portrait';
		const buyersName = !user
			? `Allen Whatson ${i + 1}`
			: `Suppliers Name ${i + 1}`;
		const email = `user${i + 1}@example.com`;
		const phone = `08101743671`;
		const id = i + 1;
		const date = new Date().toLocaleDateString('en-US');

		const object = {
			id: id,
			img: randomURL,
			buyersName,
			email,
			phone: phone,
			date,
		};

		dataArray.push(object);
	}
	return { columns, dataArray };
}


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
		const date = new Date().toLocaleDateString('en-US');

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
