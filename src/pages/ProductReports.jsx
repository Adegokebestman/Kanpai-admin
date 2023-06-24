import { NavLink } from 'react-router-dom';
import TableComponent from '../components/TableComponent';

const ProductReports = () => {
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
			name: 'Product Name',
			selector: (row) => (
				<NavLink to={`${row.id.toString()}`}>{row.productName}</NavLink>
			),
			// sortable: true,
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
				<button className='bg-red-bg text-red-text px-3 py-2 rounded-full'>
					{row.flagged}
				</button>
			),
		},
	];

	const dataArray = [];

	for (let i = 0; i < 30; i++) {
		const randomURL = 'https://source.unsplash.com/100x100/?portrait';
		const productName = `Product ${i + 1}`;
		const email = `user${i + 1}@example.com`;
		const id = i + 1;
		const date = Date.now() + 1;

		const object = {
			id: id,
			img: randomURL,
			productName: productName,
			email: email,
			date,
			flagged: 'flagged',
		};

		dataArray.push(object);
	}

	// ! this takes in a component that returns a function
	// ?const actionsMemo = useMemo(() => <Export onExport={() => downloadCSV(data)} />, []);
	// ? pass this as props //actions={actionsMemo}
	return (
		<article>
			<TableComponent
				columns={columns}
				data={dataArray}
				fixedHeader
				selectableRows={false}
				customStyles={customStyles}
			/>
		</article>
	);
};
export default ProductReports;

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
