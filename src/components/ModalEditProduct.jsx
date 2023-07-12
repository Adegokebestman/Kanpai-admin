/* eslint-disable react/prop-types */
import { useState } from 'react';
import CancelIcon from './icons/cancelIcon.svg?component';
import EditProductForm from './EditProductForm';

const ModalEditProduct = ({ setOpenDelete }) => {
	const [formValues, setFormValues] = useState({
		name: '',
		description: '',
		price: '',
		quantity: '',
		miniOrderAmount: '',
		deliveryCost: '',
		image: '',
		status: false,
	});

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formValues);
	}

	return (
		<div className='relative'>
			<CancelIcon
				className='absolute -top-2 -right-4 cursor-pointer'
				onClick={() => setOpenDelete(false)}
			/>

			<h2 className='text-center text-xl sm:text-2xl mb-5'>
				Edit Product
			</h2>

			<EditProductForm
				handleSubmit={handleSubmit}
				setFormValues={setFormValues}
				formValues={formValues}
			/>
		</div>
	);
};
export default ModalEditProduct;
