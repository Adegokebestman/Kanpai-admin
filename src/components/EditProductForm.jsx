/* eslint-disable react/prop-types */
import Input from './Input';
import ImagePreview from './ImagePreview';
import ToggleButton from './ToggleButton';

const EditProductForm = ({ formValues, setFormValues, handleSubmit }) => {
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleToggleChange = () => {
		setFormValues({ ...formValues, status: !formValues.status });
	};

	return (
		<form
			className='flex flex-col justify-center lg:flex-row lg:items-start lg:justify-start lg:gap-10 mx-auto'
			onSubmit={handleSubmit}
		>
			<ImagePreview
				formValues={formValues}
				setFormValues={setFormValues}
			/>
			{/* form */}
			<div className='flex flex-col gap-3'>
				<Input
					label={'Product Name'}
					name={'name'}
					type={'text'}
					value={formValues.name}
					onChange={handleInputChange}
				/>
				<Input
					label={'description'}
					name={'description'}
					type={'textarea'}
					value={formValues.description}
					onChange={handleInputChange}
				/>
				<div className='flex items-center justify-between gap-5'>
					<Input
						label={'price'}
						name={'price'}
						type={'number'}
						value={formValues.price}
						onChange={handleInputChange}
						className='w-full'
					/>
					<Input
						label={'quantity'}
						name={'quantity'}
						type={'number'}
						value={formValues.quantity}
						onChange={handleInputChange}
						className='w-full'
					/>
				</div>
				<div className='flex items-center justify-between gap-5'>
					<Input
						label={'Minimum order'}
						name={'miniOrderAmount'}
						type={'number'}
						value={formValues.miniOrderAmount}
						onChange={handleInputChange}
						className='w-full'
					/>
					<Input
						label={'Delivery Cost'}
						name={'deliveryCost'}
						type={'number'}
						value={formValues.deliveryCost}
						onChange={handleInputChange}
						className='w-full'
					/>
				</div>
				<div className='flex items-center justify-between gap-5 flex-col sm:flex-row'>
					<ToggleButton
						label='Make Available'
						checked={formValues.status}
						onToggle={handleToggleChange}
					/>
					<button
						type='submit'
						className='bg-primary-700 text-white font-bold px-6 py-2 rounded-md'
					>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};
export default EditProductForm;
