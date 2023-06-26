/* eslint-disable react/prop-types */
import { useState } from 'react';

import ProductReportDetailHeader from '../components/ProductReportDetailHeader';
import ProductReportProductContainer from '../components/ProductReportProductContainer';
import ReportComplaintContainer from '../components/ReportComplaintContainer';
import InputFilter from '../components/InputFilter';
import GeneralModal from '../components/GeneralModal';
import ModalDelete from '../components/ModalDelete';
import ModalEditProduct from '../components/ModalEditProduct';
import TableComponent from '../components/TableComponent';
import { tableData } from '../lib/utils';

const ProductReportDetail = () => {
	const [openDelete, setOpenDelete] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const { columns, dataArray } = tableData();
	return (
		<section className='space-y-6'>
			<ProductReportDetailHeader />

			<section className='overflow-hidden space-y-16 border border-gray-100 rounded-t-2xl pb-20'>
				<ProductReportProductContainer
					openDelete={setOpenDelete}
					openEdit={setIsEdit}
				/>

				<ReportComplaintContainer />
				<InputFilter />

				<GeneralModal isOpen={openDelete} setIsOpen={setOpenDelete}>
					<ModalDelete
						setOpenDelete={setOpenDelete}
						value={'Product'}
					/>
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
