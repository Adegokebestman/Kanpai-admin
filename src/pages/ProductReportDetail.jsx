/* eslint-disable react/prop-types */
import { useState } from 'react';

import ProductReportComplaintContainer from '../components/ProductReportComplaintContainer';
import ProductReportDetailHeader from '../components/ProductReportDetailHeader';
import ProductReportProductContainer from '../components/ProductReportProductContainer';
import TableComponent from '../components/TableComponent';
import SearchIcon from '../components/icons/searchIcon.svg?component';
import FilterIcon from '../components/icons/filterIcon.svg?component';

const ProductReportDetail = () => {
	const [showFilter, setShowFilter] = useState(false);

	return (
		<section className='space-y-6'>
			<ProductReportDetailHeader />
			<section className='overflow-hidden space-y-16 border border-gray-100 rounded-t-2xl pb-20'>
				<ProductReportProductContainer />
				<ProductReportComplaintContainer />
				<div>
					<h3 className='sm:hidden font-bold whitespace-nowrap'>
						Recent Activities
					</h3>
					<aside className='flex items-center justify-between sm:justify-center gap-3 sm:gap-5 mx-auto '>
						<h3 className='hidden sm:block font-bold whitespace-nowrap'>
							Recent Activities
						</h3>
						<form className='border border-primary-700 rounded-lg overflow-hidden p-1 flex items-center gap-1 sm;flex-1'>
							<input type='text' className='w-full px-2 py-1' />
							<button
								type='submit'
								className='bg-primary-700 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white text-sm lg:text-base'
							>
								<SearchIcon />
								<span className='hidden sm:inline'>Search</span>
							</button>
						</form>
						<div className='relative'>
							<div className='p-3 rounded-lg bg-primary-700'>
								<FilterIcon
									onClick={() => setShowFilter(!showFilter)}
								/>
							</div>
							{showFilter && <FilterComponent />}
						</div>
					</aside>
				</div>
				<TableComponent
					columns={columns}
					data={dataArray}
					fixedHeader
					selectableRows={false}
					customStyles={customStyles}
				/>
			</section>
		</section>
	);
};
export default ProductReportDetail;
const FilterComponent = () => {
	return (
		<ul className='absolute z-20 bg-white rounded-lg border border-gray-200 drop-shadow-2xl px-3 py-2 left-0  -translate-x-[100%] top-[100%] '>
			<h3 className='font-bold text-sm sm:text-lg whitespace-nowrap'>
				Sort By
			</h3>
			<li className='whitespace-nowrap py-3 text-xs sm:text-sm'>
				<input type='radio' name='pending' className='mr-2' />
				Pending Order
			</li>
			<li className='whitespace-nowrap py-3 text-xs sm:text-sm'>
				<input type='radio' name='delivered' className='mr-2' />
				Delivered Order
			</li>
		</ul>
	);
};

const columns = [
	{
		name: 'Product',
		selector: (row) => row.productName,
		// sortable: true,
	},
	{
		name: 'Unit Pirce',
		selector: (row) => <div>${row.price}</div>,
		center: true,
	},
	{
		name: 'Quantity',
		selector: (row) => row.quantity,
	},
	{
		name: 'Date',
		selector: (row) => row.date,
	},
	{
		name: 'Buyer',
		selector: (row) => row.buyer,
	},
	{
		name: 'Status',
		selector: (row) => row.status,
		sortable: true,
	},
];

const dataArray = [];

for (let i = 0; i < 30; i++) {
	const price = i * 1000;
	const quantity = (i * 1000) / 3;
	const productName = `Product ${i + 1}`;
	const buyer = `Buyer${i + 1}`;
	const id = i + 1;
	const date = Date.now() + 1;

	const object = {
		id: id,
		price,
		productName: productName,
		buyer,
		date,
		status: i % 2 == 0 ? 'Pending' : 'Delivered',
		quantity,
	};

	dataArray.push(object);
}

const customStyles = {
	headRow: {
		style: {
			backgroundColor: '#FF7E20',
			color: '#ffffff',
			fontWeight: 'bold',
		},
	},
	rows: {
		style: {
			minHeight: '40px', // override the row height
			padding: '15px 0',
			fontWeight: 'bold',
			'>:last-child>div:last-child': {
				backgroundColor: '#fd88885e',
				borderRadius: '20px',
				padding: '10px 20px',
				color: '#EB001B',
			},
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
