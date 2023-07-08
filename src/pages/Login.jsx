import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import AuthContext from '../context/AuthContext';
import { loginUser } from '../lib/apiEndPoints';

import LabelInput from '../components/LabelInput';
import WavingHand from '../components/icons/WavingHandIcon';

const Login = () => {
	const [formData, updateFormData] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const { setUserData } = useContext(AuthContext);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};
	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		const email = formData.email.toLowerCase();
		const password = formData.password;
		//submit the data
		const res = await loginUser({ email, password });
		if (res.requestSuccessful) {
			sessionStorage.setItem('token', res.accessToken);
			setUserData({ ...res.UserInfo });

			navigate('/', { replace: true });
			setLoading(false);
		} else if (res.message) {
			setError(res.message.message);
			setLoading(false);
		} else {
			setError(res.message);
			setLoading(false);
		}
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
					{error && (
						<p className='text-red-text font-bold first-letter:capitalize'>
							{error}
						</p>
					)}
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
						disabled={loading}
						className='text-white bg-primary-700 rounded-lg w-full py-2 mt-[30px] flex items-center justify-center'
					>
						{loading && (
							<Oval
								height={20}
								width={20}
								color='#F9F8F8'
								wrapperStyle={{}}
								wrapperClass=''
								visible={true}
								ariaLabel='oval-loading'
								secondaryColor='#B3B3B3'
								strokeWidth={2}
								strokeWidthSecondary={2}
							/>
						)}
						Sign Up
					</button>
				</form>
			</div>
		</>
	);
};
export default Login;
