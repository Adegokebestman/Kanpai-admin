/* eslint-disable react/prop-types */
import TableComponent from '../components/TableComponent';
import { NavLink } from 'react-router-dom';
import EditIcon from './icons/editIcon.svg?component';
import DeleteIcon from './icons/deleteIcon.svg?component';
import ModalEditUser from './ModalEditUser';
import GeneralModal from './GeneralModal';
import ModalDelete from './ModalDelete';

const SupplierProductsView = () => {
	const columns = [
		{
			name: '',
			selector: (row) => (
				<img
					src={row.imageSrc}
					alt={row.userName}
					className='w-10 h-10 sm:w-20 sm:h-20 rounded-full'
				/>
			),
			sortable: false,
		},
		{
			name: 'Product Name',
			selector: (row) => (
				<h1 className='text-sm md:text-base whitespace-break-spaces'>
					{row.userName}
				</h1>
			),
		},

		{
			name: 'Unit Price',
			selector: (row) => (
				<h1 className='text-sm md:text-base'>{row.amount}</h1>
			),
		},

		{
			name: 'Status',
			selector: (row) => (
				<div className='border-green-bg border text-green-bg px-3 py-2 rounded-full text-sm'>
					{row.status}
				</div>
			),
		},
		{
			name: 'Date Uploaded',
			selector: (row) => (
				<div>
					<h1 className='text-sm md:text-base'>{row.date}</h1>
				</div>
			),
		},
		{
			name: '',
			selector: () => (
				<div className='flex items-center gap-3'>
					<span className='p-2 rounded-full bg-gray-100 hover:bg-white flex items-center justify-center'>
						<EditIcon className='cursor-pointer' />
					</span>
					<span className='p-2 rounded-full bg-gray-100 hover:bg-white flex items-center justify-center'>
						<DeleteIcon className='cursor-pointer' />
					</span>
				</div>
			),
		},
	];

	const dataArray = [];

	for (let i = 0; i < 30; i++) {
		const userName = `Honey Badger ${i + 1}Blitz`;
		const email = `user${i + 1}@example.com`;
		const amount = `$1000${i + 1}`;
		const date = new Date().toLocaleDateString('en-US');
		const id = i + 1;
		const imageSrc = 'https://source.unsplash.com/400x400/?portrait';

		const object = {
			id: id,
			userName: userName,
			amount: amount,
			email: email,
			date: date,
			approve: 'Approve',
			status: 'Available',
			decline: 'Decline',
			imageSrc: imageSrc,
		};

		dataArray.push(object);
	}

	return (
		<div className='border-[1px] rounded-xl border-gray-900 mx-auto md:w-[95%] py-6 mt-4'>
			<TableComponent
				columns={columns}
				data={dataArray}
				fixedHeader
				selectableRows={false}
				customStyles={customStyles}
			/>
		</div>
	);
};

export default SupplierProductsView;

const customStyles = {
	rows: {
		style: {
			minHeight: '40px', // override the row height
			padding: '15px 0',
			fontWeight: 'bold',
			'&:hover': {
				backgroundColor: '#f9d7bf45',
			},
		},
	},
	headCells: {
		style: {
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
			textTransform: 'capitalize',
		},
	},
	cells: {
		style: {
			margin: '0 auto',
			width: 'max-content',
		},
	},
};
