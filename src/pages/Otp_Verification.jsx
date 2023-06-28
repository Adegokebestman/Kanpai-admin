import { useState } from 'react';

const Otp_Verification = () => {
	const [otp, setOtp] = useState(new Array(5).fill(''));

	const handleChange = (element, index) => {
		if (isNaN(element.value)) return false;

		setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

		//Focus next input
		if (element.nextSibling) {
			element.nextSibling.focus();
		}
	};

	function handleSubmit(e) {
		e.preventDefault();
		const code = otp.join('');
		console.log(code);
		//submit the data
		// navigate('/auth/otp_verification', { replace: true });
	}
	return (
		<section className='px-6'>
			<h1 className='font-bold text-2xl font-poppins mb-2'>
				Email Verification
			</h1>
			<p className='font-poppins text-sm leading-relaxed'>
				Type in the sent to your mail
			</p>
			<form onSubmit={handleSubmit} className='mt-12 '>
				<div className='flex items-center justify-center gap-3 sm:gap-5'>
					{otp.map((data, index) => {
						return (
							<input
								className='w-9 h-9 border-b border-b-black outline-none text-center font-bold font-rubik'
								type='text'
								name='otp'
								maxLength='1'
								key={index}
								value={data}
								onChange={(e) => handleChange(e.target, index)}
								onFocus={(e) => e.target.select()}
							/>
						);
					})}
				</div>
				<button
					type='submit'
					className='text-white bg-primary-700 rounded-lg w-full py-2 mt-12'
				>
					Submit
				</button>
			</form>

			<p className='font-semibold mt-5'>
				Didn&apos;t get the code?{' '}
				<span className='text-primary-700'>resend</span>
			</p>
		</section>
	);
};
export default Otp_Verification;
