/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import CancelIcon from './icons/cancelIcon.svg?component';
import ModalSuccess from './ModalSuccess';
import moment from 'moment/moment';

const ModalSuspendUser = ({
	setIsOpenSuspension,
	flagId,
	userId,
	action,
	productId,
}) => {
	const [showSuccess, setShowSuccess] = useState(false);
	const [selected, setSelected] = useState('');
	const [reason, setReason] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const currentDate = moment(); // Get the current date

	const addOneWeek = () => {
		const futureDate = currentDate.add(1, 'week'); // Add one week

		return futureDate.valueOf(); // Return the timestamp
	};

	const addOneMonth = () => {
		const futureDate = currentDate.add(1, 'month'); // Add one month

		return futureDate.valueOf(); // Return the timestamp
	};

	const addSixMonths = () => {
		const futureDate = currentDate.add(6, 'months'); // Add six months

		return futureDate.valueOf(); // Return the timestamp
	};

	async function suspendUser() {
		setLoading(true);
		const res = await action({
			flagId,
			productId,
			userId,
			reason,
			suspensionExpiresAt: selected,
		});
		if (res.requestSucessful) {
			setLoading(false);
			setSelected('');
			setReason('');
			setShowSuccess(true);
			navigate('/reports');
		}
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
								value={addOneWeek()}
								className='bg-red-300 text-black'
							>
								One Week
							</option>
							<option
								value={addOneMonth()}
								className='bg-red-300 text-black'
							>
								One Month
							</option>
							<option
								value={addSixMonths()}
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
						<textarea
							value={reason}
							onChange={(e) => setReason(e.target.value)}
							className='w-full bg-gray-200 border border-gray-300 rounded-xl p-3 outline-none min-h-[120px] mt-4 font-normal'
						/>
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
							className='bg-red-text text-white rounded-md px-10 py-2 flex items-center justify-center gap-3'
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
							)}{' '}
							<span>Yes</span>
						</button>
					</div>
				</article>
			) : (
				<ModalSuccess
					action={setShowSuccess}
					closeSecond={setIsOpenSuspension}
					label={'User has been added to Recycle >  Suspension List'}
				/>
			)}
		</>
	);
};
export default ModalSuspendUser;
