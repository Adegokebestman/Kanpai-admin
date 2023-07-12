// import { useState } from 'react';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPaymentInfo } from '../lib/apiEndPoints';

function PaymentMethod() {
	// const [name, setName] = useState('');
	// const [lastName, setLastName] = useState('');
	// const [billingAddress, setBillingAddress] = useState('');
	// const [companyName, setCompanyName] = useState('');
	// const [cardNumber, setCardNumber] = useState('');
	// const [expiryDate, setExpiryDate] = useState('');
	// const [cvv, setCvv] = useState('');
	const { id } = useParams();

	useEffect(() => {
		async function fetch() {
			const data = await getPaymentInfo(id);
			if (data.requestSucessful) {
				//
			}
		}

		if (id) {
			fetch();
		}
	}, [id]);

	return (
		<div>
			<div className='mt-20 md:mt-10 grid grid-rows-1 grid-flow-col gap-4 justify-center items-center'>
				<div>
					<p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
						Payment Method
					</p>
				</div>
			</div>
			<div className='max-w-md  mt-4 mx-auto'>
				<div className='mb-4 w-full px-4 py-2 border rounded-lg'>
					<b>name</b>
				</div>
				<div className='mb-4 w-full px-4 py-2 border rounded-lg'>
					<b>lastname</b>
				</div>
				<div className='mb-4 w-full px-4 py-2 border rounded-lg'>
					<b>address</b>
				</div>
				<div className='mb-4 w-full px-4 py-2 border rounded-lg'>
					<b>company</b>
				</div>
				<div className='mb-4 w-full px-4 py-2 border rounded-lg'>
					<b>card</b>
				</div>
				<div className='flex mb-4 w-full px-4 py-2 border rounded-lg'>
					<div className='mr-4'>expiry</div>
					<div>cvv</div>
				</div>
			</div>
		</div>
	);
}

export default PaymentMethod;
