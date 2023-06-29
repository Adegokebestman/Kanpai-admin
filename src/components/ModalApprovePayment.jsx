/* eslint-disable react/prop-types */

import { useState } from 'react';
import ModalSuccess from './ModalSuccess';

const ModalApprovePayment = ({ setOpenApproved, value, approved }) => {
	// click Approve sends a request to approve the data
	const [approve, setApprove] = useState(false);

	const deleteProduct = () => {
		setApprove(true);
	};
	return (
		<article className='space-y-8'>
			{!approve ? (
				<>
					<div className='flex items-center justify-between'>
						{approved ? (
							<h4 className='hidden capitalize'> Decline {value}</h4>
						) : (
							<h4 className='hidden capitalize'>Aprove {value}</h4>
						)}
					</div>

					{approved ? (
						<h4 className='text-lg sm:text-xl font-bold text-center w-[90%]'>
                        Are you sure you want to delete this {value}
						</h4>
					) : (
						<h4 className='text-lg sm:text-xl font-bold text-center w-[90%]'>

                            Are you sure you to Approve {value} payout for $600 {value}
						</h4>
					)}

					<div className='flex items-center justify-around gap-10'>
						<button
							onClick={() => setOpenApproved(false)}
							className='bg-none border border-gray-300 text-gray-300 rounded-md px-10 py-2'
						>
							Back
						</button>
						<button
							onClick={deleteProduct}
							className='bg-red-text text-white rounded-md px-10 py-2'
						>
							Yes
						</button>
					</div>
				</>
			) : (
				<ModalSuccess
					action={setOpenApproved}
					label={
						approved ? value + 'Declined ' : value + ' Approved '
					}
				/>
			)}
		</article>
	);
};
export default ModalApprovePayment;
