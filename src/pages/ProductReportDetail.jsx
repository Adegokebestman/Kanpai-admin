/* eslint-disable react/prop-types */

import ProductReportComplaintContainer from '../components/ProductReportComplaintContainer';
import ProductReportDetailHeader from '../components/ProductReportDetailHeader';
import ProductReportProductContainer from '../components/ProductReportProductContainer';
import TableComponent from '../components/TableComponent';
import InputFilter from '../components/InputFilter';
import GeneralModal from '../components/GeneralModal';
import { useState } from 'react';
import ModalDeleteProduct from '../components/ModalDeleteProduct';
import ModalEditProduct from '../components/ModalEditProduct';

const ProductReportDetail = () => {
	const [openDelete, setOpenDelete] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	return (
		<section className='space-y-6'>
			<ProductReportDetailHeader />

			<section className='overflow-hidden space-y-16 border border-gray-100 rounded-t-2xl pb-20'>
				<ProductReportProductContainer
					openDelete={setOpenDelete}
					openEdit={setIsEdit}
				/>

				<ProductReportComplaintContainer />
				<InputFilter />

				<GeneralModal isOpen={openDelete} setIsOpen={setOpenDelete}>
					<ModalDeleteProduct setOpenDelete={setOpenDelete} />
				</GeneralModal>

				<GeneralModal isOpen={isEdit} setIsOpen={setIsEdit}>
					<ModalEditProduct setOpenDelete={setIsEdit} />
				</GeneralModal>

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
