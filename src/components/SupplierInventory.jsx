/* eslint-disable react/prop-types */
import { useState } from 'react';
import TableComponent from '../components/TableComponent';
import { RiDeleteBinLine } from 'react-icons/ri';
import { LuEdit3 } from 'react-icons/lu';
import ModalEditProduct from './ModalEditProduct';
import GeneralModal from './GeneralModal';
import ModalDelete from './ModalDelete';

const SupplierInventory = () => {
  const [openDelete, setOpenDelete] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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
					<h1 className='text-sm md:text-base whitespace-break-spaces'>
						{row.userName}
					</h1>
				</div>
			),
		},

		{
			name: 'Unit Price',
			selector: (row) => (
				<div>
					<h1 className='text-sm md:text-base'>{row.amount}</h1>
				</div>
			),
		},

		{
			name: 'Available Unit',
			selector: (row) => (
				<div>
					<h1 className='text-sm md:text-base'>{row.available}</h1>
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
				<div className='text-sm md:text-2xl text-primary-700 flex items-center gap-3'>
					<LuEdit3 className='cursor-pointer hover:text-gray-300' onClick={() => setIsEditModalOpen(true)} />
					<RiDeleteBinLine className='cursor-pointer hover:text-gray-300' onClick={() => setOpenDelete(true)} />
				</div>
			),
		},
	];

	const dataArray = [];

	for (let i = 0; i < 30; i++) {
		const userName = `Heineken ${i + 1}Blitz`;
		const email = `user${i + 1}@example.com`;
		const amount = `$ ${1000 + i}`;
		const available = 2001 + i;
		const date = new Date().toLocaleDateString('en-US');
		const id = i + 1;
		const imageSrc = 'https://source.unsplash.com/400x400/?portrait';

		const object = {
			id: id,
			userName: userName,
			amount: amount,
			available: available,
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
		<div className='border-[1px] rounded-xl border-gray-900 mx-auto md:w-[95%] py-3 mt-4'>
			<TableComponent
				columns={columns}
				data={dataArray}
				fixedHeader
				selectableRows={false}
				customStyles={customStyles}
			/>
       <GeneralModal isOpen={isEditModalOpen} setIsOpen={setIsEditModalOpen}>
        <ModalEditProduct setOpenDelete={setIsEditModalOpen} />
      </GeneralModal>

 <GeneralModal isOpen={openDelete} setIsOpen={setOpenDelete}>
					<ModalDelete
						setOpenDelete={setOpenDelete}
						value={'Product'}
					/>
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
	cells: {
		style: {
			margin: '0 auto',
		},
	},
};
