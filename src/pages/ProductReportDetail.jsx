/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import ProductReportDetailHeader from '../components/ProductReportDetailHeader';
import ProductReportProductContainer from '../components/ProductReportProductContainer';
import ReportComplaintContainer from '../components/ReportComplaintContainer';
import InputFilter from '../components/InputFilter';
import GeneralModal from '../components/GeneralModal';
import ModalDelete from '../components/ModalDelete';
import ModalEditProduct from '../components/ModalEditProduct';
import TableComponent from '../components/TableComponent';
import { useParams } from 'react-router-dom';
import {
	getAllProductOrders,
	getFlagItem,
	getProductDetails,
	suspendAProduct,
} from '../lib/apiEndPoints';
import { Oval } from 'react-loader-spinner';
import moment from 'moment';
import ModalSuspendUser from '../components/ModalSuspendUser';

const ProductReportDetail = () => {
	const [openDelete, setOpenDelete] = useState(false);
	const [dataArray, setDataArray] = useState([]);
	const [loading, setLoading] = useState(false);
	const [reports, setReports] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const [productDetail, setProductDetail] = useState();
	const { id } = useParams();

	useEffect(() => {
		const fetch = async () => {
			setLoading(true);
			const data = await getFlagItem(id);
			if (data.requestSucessful) {
				setReports(data.flag);
				const { product } = await getProductDetails(
					data.flag.flaggedId
				);
				setProductDetail(product);

				const fetchFlaggedProducts = async () => {
					const allOrders = await getAllProductOrders(
						data.flag.flaggedId
					);

					if (allOrders.requestSucessful) {
						for (const element of allOrders.orders) {
							const formattedDate = moment(
								element.createdAt
							).format('DD/MM/YYYY');
							const object = {
								id: element._id,
								productName: element.productName,
								price: element.price,
								quantity: element.minOrderAmount,
								date: formattedDate,
								status: element.status
									? 'Pending'
									: 'Delivered',
							};
							setDataArray([object]); // Set the accumulated data objects in dataArray
						}
					}
					setLoading(false);
				};

				fetchFlaggedProducts();
			}
		};
		fetch();
	}, [dataArray.length, id]);

	return (
		<>
			{loading ? (
				<Oval
					height={80}
					width={80}
					color='#F9F8F8'
					wrapperStyle={{}}
					wrapperClass='bg-gray-fade w-full flex items-center justify-center h-full py-20'
					visible={true}
					ariaLabel='oval-loading'
					secondaryColor='#B3B3B3'
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
			) : (
				<section className='space-y-6'>
					{productDetail && (
						<ProductReportDetailHeader
							id={productDetail.createdBy}
						/>
					)}

					<section className='overflow-hidden space-y-16 border border-gray-100 rounded-t-2xl pb-20'>
						{productDetail && (
							<ProductReportProductContainer
								openDelete={setOpenDelete}
								openEdit={setIsEdit}
								productImage={productDetail.photo}
								productAvailability={productDetail.available}
								productName={productDetail.productName}
								productPrice={productDetail.price}
							/>
						)}

						{reports && (
							<ReportComplaintContainer
								reports={reports.reports}
								productId={reports.flaggedId}
							/>
						)}

						<InputFilter action={'Recent Activities'} />

						<GeneralModal
							isOpen={openDelete}
							setIsOpen={setOpenDelete}
						>
							<ModalSuspendUser
								setIsOpenSuspension={setOpenDelete}
								flagId={id}
								productId={productDetail && productDetail._id}
								action={suspendAProduct}
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
			)}
		</>
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
		name: 'Status',
		selector: (row) => row.status,
		sortable: true,
	},
];

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
