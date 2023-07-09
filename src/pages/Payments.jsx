/* eslint-disable react/prop-types */
import InputFilter from '../components/InputFilter';
import TableComponent from '../components/TableComponent';
import { NavLink } from 'react-router-dom';

// import Button from '../components/Button';
const Payments = () => {
	const columns = [
		{
			name: '',
			selector: (row) => row.userName,
		},
		{
			name: '',
			selector: (row) => row.email,
		},
		{
			name: '',
			selector: (row) => row.amount,

			// sortable: true,
		},

		{
			name: '',
			selector: (row) => row.date,
		},
		{
			name: '',
			selector: (row) => (
				<button className='border-green-bg border text-green-bg px-3 py-2 rounded-full'>
					{row.approve}
				</button>
			),
		},
		{
			name: '',
			selector: (row) => (
				<NavLink to={`${row.id.toString()}`}>
					<button className='border-red-text border text-red-200 px-3 py-2 rounded-full'>
						{row.decline}
					</button>
				</NavLink>
			),
		},
	];

	const dataArray = [];

	for (let i = 0; i < 30; i++) {
		const userName = `Loyd${i + 1}Francis`;
		const email = `user${i + 1}@example.com`;
		const amount = `$1000${i + 1}`;
		const date = new Date().toLocaleDateString('en-US');
		const id = i + 1;

		const object = {
			id: id,
			userName: userName,
			amount: amount,
			email: email,
			date,
			approve: 'Approve',
			decline: 'Decline',
		};

		dataArray.push(object);
	}

	return (
		<div className='border-[1px] rounded-xl border-gray-900 mx-auto md:w-[95%] py-10'>
			<div className='flex justify-center'>
				<InputFilter action={'Pay Out Requests'} filter={false} />
			</div>
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
export default Payments;

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
			textTransform: 'uppercase',
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
			margin: '0 auto',
		},
	},
};
