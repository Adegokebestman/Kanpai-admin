/* eslint-disable react/prop-types */

import { useState } from 'react';
import ModalSuccess from './ModalSuccess';

const ModalDeclinePayment = ({ setOpenDecline, value, declined }) => {
	// click decline sends a request to decline the data
	const [decline, setDecline] = useState(false);

	const deleteProduct = () => {
		setDecline(true);
	};
	return (
		<article className='space-y-8'>
			{!decline ? (
				<>
					<div className='flex items-center justify-between'>
						{declined ? (
							<h4 className='hidden capitalize'>Approve {value}</h4>
						) : (
							<h4 className='hidden capitalize'>Decline {value}</h4>
						)}
					</div>

					{declined ? (
						<h4 className='text-lg sm:text-xl font-bold text-center w-[90%]'>
                        Are you sure you to Approve {value} payout for {value}
						</h4>
					) : (
						<h4 className='text-lg sm:text-xl font-bold text-center w-[90%]'>
							Are you sure you want to decline this {value}
						</h4>
					)}

					<div className='flex items-center justify-around gap-10'>
						<button
							onClick={() => setOpenDecline(false)}
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
					action={setOpenDecline}
					label={
						declined ? value + ' Approve' : value + ' Decline'
					}
				/>
			)}
		</article>
	);
};
export default ModalDeclinePayment;
