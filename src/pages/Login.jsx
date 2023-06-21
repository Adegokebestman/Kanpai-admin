import { useState } from 'react';
import LabelInput from '../components/LabelInput';
import WavingHand from '../components/icons/WavingHandIcon';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [formData, updateFormData] = useState();
	const navigate = useNavigate();

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};
	function handleSubmit(e) {
		e.preventDefault();
		//submit the data
		navigate('/auth/otp_verification', { replace: true });
	}

	return (
		<>
			<div className='space-y-3'>
				<WavingHand height={'2rem'} width={'2rem'} />
				<h1 className='font-bold text-3xl font-poppins'>Welcome</h1>
				<p className='font-poppins text-sm leading-relaxed'>
					Please login to gain access to your account
				</p>
				<form onSubmit={handleSubmit} className='pt-16'>
					<LabelInput
						label={'E-mail'}
						name={'email'}
						type={'email'}
						onChange={handleChange}
						placeholder={'Enter Email or Phone number'}
						classNames={
							'block w-full border-none bg-gray-100 p-2 rounded font-poppins mt-[10px] mb-[30px]'
						}
					/>
					<LabelInput
						label={'Password'}
						name={'password'}
						type={'password'}
						onChange={handleChange}
						placeholder={'Type your password'}
						classNames={
							'block w-full border-none bg-gray-100 p-2 rounded font-poppins mt-[10px]'
						}
					/>
					<button
						type='submit'
						className='text-white bg-primary-700 rounded-lg w-full py-2 mt-[30px]'
					>
						Sign Up
					</button>
				</form>
			</div>
		</>
	);
};
export default Login;
