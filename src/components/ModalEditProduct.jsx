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

// const [searchParams] = useSearchParams();
// const searchId = searchParams.get('id');
// const navigate = useNavigate();

// useEffect(() => {
// 	const token = localStorage.getItem('accessToken');
// 	const fetch = async () => {
// 		const data = await getOnboardingProduct(token, searchId);
// 		if (data.requestSucessful) {
// 			const { product } = data;
// 			setProductName(product.productName);
// 			setDescription(product.description);
// 			setProductImagePreview(product.photo);
// 		}
// 	};

// 	let mounted = true;
// 	if (mounted && searchId) {
// 		fetch();
// 	}
// 	return () => {
// 		mounted = false;
// 	};
// }, [searchId]);

// 	const handleImageChange = (event) => {
// 	const file = event.target.files[0];
// 	// setImage(file);
// 	setProductImagePreview(URL.createObjectURL(file));
// };
