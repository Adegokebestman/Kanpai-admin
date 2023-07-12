/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import TableComponent from '../components/TableComponent';
// import { RiDeleteBinLine } from 'react-icons/ri';
// import { LuEdit3 } from 'react-icons/lu';
import ModalEditProduct from './ModalEditProduct';
import GeneralModal from './GeneralModal';
import ModalDelete from './ModalDelete';
import OtherContext from '../context/OtherContext';
import { getProductDetails, getSupplierInventory } from '../lib/apiEndPoints';
import moment from 'moment';

const SupplierInventory = () => {
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
				<div>
					<h1 className='text-xs lg:text-base whitespace-break-spaces'>
						{row.productName}
					</h1>
				</div>
			),
		},
		{
			name: 'Unit Price',
			selector: (row) => (
				<div>
					<h1 className='text-xs lg:text-base'>{row.amount}</h1>
				</div>
			),
		},
		{
			name: 'Status',
			selector: (row) => (
				<div
					className={`px-2 py-1 rounded-full ${
						row.status == 'Flagged'
							? 'bg-red-bg text-red-text'
							: 'bg-green-bg text-green-text'
					}`}
				>
					<h1 className={`text-[10px] lg:text-sm`}>{row.status}</h1>
				</div>
			),
		},
		{
			name: 'Available Unit',
			selector: (row) => (
				<div>
					<h1 className='text-xs lg:text-base'>{row.available}</h1>
				</div>
			),
		},
		{
			name: 'Date Uploaded',
			selector: (row) => (
				<div>
					<h1 className='text-xs lg:text-base'>{row.date}</h1>
				</div>
			),
		},
		// {
		// 	name: '',
		// 	selector: () => (
		// 		<div className='text-xs lg:text-2xl text-primary-700 flex items-center gap-3'>
		// 			<LuEdit3
		// 				className='cursor-pointer hover:text-gray-300'
		// 				onClick={() => setIsEditModalOpen(true)}
		// 			/>
		// 			<RiDeleteBinLine
		// 				className='cursor-pointer hover:text-gray-300'
		// 				onClick={() => setOpenDelete(true)}
		// 			/>
		// 		</div>
		// 	),
		// },
	];

	const [openDelete, setOpenDelete] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const { userData } = useContext(OtherContext);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetch() {
			setLoading(true);
			const { requestSucessful, products } = await getSupplierInventory(
				userData._id
			);
			if (requestSucessful) {
				const tempArray = []; // Temporary array to accumulate the data objects

				for (const element of products) {
					const res = await getProductDetails(element._id);

					if (res.requestSucessful) {
						const object = {
							id: element._id,
							productName: element.productName,
							amount: element.price,
							available: element.available,
							date: moment(element.createdAt).format(
								'DD/MM/YYYY'
							),
							status: element.suspended
								? 'Flagged'
								: 'Not Flagged',
							imageSrc: element.photo,
						};

						tempArray.push(object);
					}
				}

				setProducts(tempArray);
				setLoading(false);
			}
		}
		fetch();
	}, [userData._id]);

	return (
		<div className='border-[1px] rounded-xl border-gray-900 mx-auto md:w-[95%] py-3 mt-4'>
			{loading ? (
				<p className='animate-pulse'>Loading...</p>
			) : (
				<>
					<TableComponent
						columns={columns}
						data={products}
						fixedHeader
						selectableRows={false}
						customStyles={customStyles}
						striped={true}
					/>
				</>
			)}

			<GeneralModal
				isOpen={isEditModalOpen}
				setIsOpen={setIsEditModalOpen}
			>
				<ModalEditProduct setOpenDelete={setIsEditModalOpen} />
			</GeneralModal>

			<GeneralModal isOpen={openDelete} setIsOpen={setOpenDelete}>
				<ModalDelete setOpenDelete={setOpenDelete} value={'Product'} />
			</GeneralModal>
		</div>
	);
};

export default SupplierInventory;

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
			textAlign: 'center',
		},
	},
};
