/* eslint-disable react/prop-types */
import { useState } from 'react';
import CancelIcon from './icons/cancelIcon.svg?component';
import EditUserForm from './EditUserForm';

const ModalEditUser = ({ setOpenDelete }) => {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		image: '',
		phone: '',
        password: '',
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
				Edit User
			</h2>

			<EditUserForm
				handleSubmit={handleSubmit}
				setFormValues={setFormValues}
				formValues={formValues}
			/>
		</div>
	);
};
export default ModalEditUser;

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
