/* eslint-disable react/prop-types */
import { useState } from 'react';
import CancelIcon from './icons/cancelIcon.svg?component';
import ModalSuccess from './ModalSuccess';

const ModalSuspendUser = ({ setIsOpenSuspension }) => {
	const [showSuccess, setShowSuccess] = useState(false);
	const [selected, setSelected] = useState('');

	function suspendUser() {
		setShowSuccess(true);
	}
	return (
		<>
			{!showSuccess ? (
				<article
					className={
						'flex items-center justify-center flex-col gap-10 py-4 px-5 sm:py-8 sm:px-12 text-center font-bold w-full'
					}
				>
					<div className='flex items-center justify-between w-full '>
						<h2 className='text-lg font-bold'>Suspension</h2>
						<CancelIcon
							onClick={() => setIsOpenSuspension(false)}
						/>
					</div>
					<div className='w-full'>
						<p>Select Suspension Duration</p>
						<select
							onChange={(e) => setSelected(e.target.value)}
							className='bg-gray-200 w-full outline-none p-2 rounded-xl text-red-text'
						>
							<option defaultValue='select'>Select</option>
							<option
								value='oneWeek'
								className='bg-red-300 text-black'
							>
								One Week
							</option>
							<option
								value='oneMonth'
								className='bg-red-300 text-black'
							>
								One Month
							</option>
							<option
								value='sixMonth'
								className='bg-red-300 text-black'
							>
								Six Month
							</option>
						</select>
					</div>
					<div>
						<h3 className='font-bold'>
							Follow up mail to{' '}
							<span className='text-primary-700'>userEmail</span>{' '}
							? (optional)
						</h3>
						<textarea className='w-full bg-gray-200 border border-gray-300 rounded-xl p-3 outline-none min-h-[120px] mt-4 font-normal' />
					</div>
					<div className='flex items-center justify-around gap-10'>
						<button
							onClick={() => setIsOpenSuspension(false)}
							className='bg-none border border-gray-300 text-gray-300 rounded-md px-10 py-2'
						>
							Back
						</button>
						<button
							onClick={suspendUser}
							className='bg-red-text text-white rounded-md px-10 py-2'
						>
							Yes
						</button>
					</div>
				</article>
			) : (
				<ModalSuccess
					action={setShowSuccess}
					closeSecond={setIsOpenSuspension}
					label={'User has been added to Recycle>Suspension List'}
				/>
			)}
		</>
	);
};
export default ModalSuspendUser;
