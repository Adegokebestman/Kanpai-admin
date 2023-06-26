/* eslint-disable react/prop-types */

import { useState } from 'react';
import CancelIcon from './icons/cancelIcon.svg?component';
import ModalSuccess from './ModalSuccess';

const ModalDelete = ({ setOpenDelete, value }) => {
	// click delete sends a request to delete the data
	const [deleted, setDeleted] = useState(false);

	const deleteProduct = () => {
		setDeleted(true);
	};
	return (
		<article className='space-y-8'>
			{!deleted ? (
				<>
					<div className='flex items-center justify-between'>
						<h4 className='capitalize'>Delete {value}</h4>
						<CancelIcon onClick={() => setOpenDelete(false)} />
					</div>
					<h4 className='text-lg sm:text-xl font-bold text-center w-[90%]'>
						Are you sure you want to delete this {value}
					</h4>
					<div className='flex items-center justify-around gap-10'>
						<button
							onClick={() => setOpenDelete(false)}
							className='bg-none border border-gray-300 text-gray-300 rounded-md px-10 py-2'
						>
							Back
						</button>
						<button
							onClick={deleteProduct}
							className='bg-red-text text-white rounded-md px-10 py-2'
						>
							Yes
						</button>
					</div>
				</>
			) : (
				<ModalSuccess
					action={setOpenDelete}
					label={value + ' Deleted'}
				/>
			)}
		</article>
	);
};
export default ModalDelete;
