/* eslint-disable react/prop-types */
import Input from './Input';
import ImagePreview from './ImagePreview';

const EditUserForm = ({ formValues, setFormValues, handleSubmit }) => {
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};



	return (
		<form
			className='flex flex-col justify-center md:px-14'
			onSubmit={handleSubmit}
		>
			<ImagePreview
				formValues={formValues}
				setFormValues={setFormValues}
			/>
			{/* form */}
			<div className='flex flex-col gap-3'>
				<Input
					label={' Name'}
					name={'name'}
					type={'text'}
					value={formValues.name}
					onChange={handleInputChange}
				/>
				<Input
					label={'Email'}
					name={'email'}
					type={'text'}
					value={formValues.email}
					onChange={handleInputChange}
				/>

					<Input
						label={'Phone'}
						name={'phone'}
						type={'number'}
						value={formValues.phone}
						onChange={handleInputChange}
						className='w-full'
					/>
					<Input
						label={'Password'}
						name={'password'}
						type={'password'}
						value={formValues.password}
						onChange={handleInputChange}
						className='w-full'
					/>


				<div className='flex items-center justify-between gap-5 flex-col sm:flex-row'>

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
export default EditUserForm;
