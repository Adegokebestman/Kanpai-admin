/* eslint-disable react/prop-types */

import { useState } from 'react';
import CancelIcon from './icons/cancelIcon.svg?component';
import ModalSuccess from './ModalSuccess';
import { approvePayment, declinePayment } from '../lib/apiEndPoints';

const ModalPayments = ({ setOpenDelete, id, accept }) => {
	// click delete sends a request to delete the data
	const [completed, setCompleted] = useState(false);

	const deleteProduct = async () => {
		if (accept) {
			const fetch = async () => {
				const res = await approvePayment(id);
				if (res.requestSucessful) {
					setCompleted(true);
				}
			};

			fetch();
		} else {
			const fetch = async () => {
				const res = await declinePayment(id);
				if (res.requestSucessful) {
					setCompleted(true);
				}
			};

			fetch();
		}
	};
	return (
		<article className='space-y-8'>
			{!completed ? (
				<>
					<div className='flex items-center justify-between'>
						<h4 className='capitalize'>Payments</h4>

						<CancelIcon onClick={() => setOpenDelete(false)} />
					</div>

					{accept ? (
						<h4 className='text-lg sm:text-xl text-center w-[90%]'>
							Are you sure you want to{' '}
							<span className='text-green-bg font-bold'>
								APPROVE
							</span>{' '}
							this payment
						</h4>
					) : (
						<h4 className='text-lg sm:text-xl text-center w-[90%]'>
							Are you sure you want to{' '}
							<span className='text-red-text font-bold'>
								Decline
							</span>{' '}
							this payment
						</h4>
					)}

					<div className='flex items-center justify-around gap-10'>
						<button
							onClick={() => setOpenDelete(false)}
							className='bg-none border border-gray-300 text-gray-300 rounded-md px-10 py-2'
						>
							Back
						</button>
						<button
							onClick={deleteProduct}
							className={`text-white rounded-md px-10 py-2 ${
								accept ? 'bg-green-bg' : 'bg-red-text'
							}`}
						>
							Yes
						</button>
					</div>
				</>
			) : (
				<ModalSuccess
					action={setOpenDelete}
					label={accept ? 'Payment Accepted' : 'Payment Declined'}
				/>
			)}
		</article>
	);
};
export default ModalPayments;
