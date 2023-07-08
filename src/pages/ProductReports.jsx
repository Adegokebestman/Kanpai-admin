import { useState, useEffect } from 'react';
import TableComponent from '../components/TableComponent';
import { getFlaggedProducts, getProductDetails } from '../lib/apiEndPoints';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const ProductReports = () => {
	const [dataArray, setDataArray] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		let mount = true;

		const fetchFlaggedProducts = async () => {
			if (dataArray.length < 1) {
				setLoading(true);
			}

			const flagProducts = await getFlaggedProducts();

			if (flagProducts.requestSucessful) {
				const tempArray = []; // Temporary array to accumulate the data objects

				for (const element of flagProducts.flags) {
					const res = await getProductDetails(element.flaggedId);

					if (res.requestSucessful) {
						// Formatting the date as "dd/mm/yyyy"
						const formattedDate = moment(element.createdAt).format(
							'DD/MM/YYYY'
						);

						const object = {
							id: element._id,
							productId: element.flaggedId,
							img: res.product.photo,
							suppliersName: res.product.productName,
							date: formattedDate,
							flagged:
								element.status === 'open'
									? 'flagged'
									: 'closed',
						};

						tempArray.push(object);
					}
				}

				setDataArray(tempArray); // Set the accumulated data objects in dataArray
				setLoading(false);
			}
		};

		if (mount) {
			fetchFlaggedProducts();
		}

		return () => {
			mount = false;
		};
	}, [dataArray.length]);

	return (
		<article>
			<TableComponent
				columns={columns}
				data={dataArray}
				fixedHeader
				selectableRows={false}
				customStyles={customStyles}
				progressPending={loading}
			/>
		</article>
	);
};

export default ProductReports;

const columns = [
	{
		name: '',
		selector: (row) => (
			<div className='h-16 w-16 rounded-full object-contain'>
				<img
					src={row.img}
					alt={row.suppliersName}
					className='max-w-full min-w-full'
				/>
			</div>
		),
		center: true,
	},
	{
		name: 'Product Name',
		selector: (row) => (
			<NavLink to={`${row.id}`} className='text-xs sm:text-md'>
				{row.suppliersName}
			</NavLink>
		),
		sortable: true,
	},
	{
		name: 'Date Flagged',
		selector: (row) => <p className='text-xs sm:text-md'>{row.date}</p>,
	},
	{
		name: '',
		selector: (row) => (
			<NavLink
				to={`${row.id}`}
				className='bg-red-bg text-red-text px-4 py-2 rounded-full block capitalize text-xs sm:text-md'
			>
				{row.flagged}
			</NavLink>
		),
	},
];

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
			textTransform: 'capitalize',
		},
	},
	cells: {
		style: {
			margin: '0 auto',
		},
	},
};
