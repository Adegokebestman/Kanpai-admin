// import { useState } from 'react';

function PaymentMethod() {
	// const [name, setName] = useState('');
	// const [lastName, setLastName] = useState('');
	// const [billingAddress, setBillingAddress] = useState('');
	// const [companyName, setCompanyName] = useState('');
	// const [cardNumber, setCardNumber] = useState('');
	// const [expiryDate, setExpiryDate] = useState('');
	// const [cvv, setCvv] = useState('');

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
					name
				</div>
				<div className='mb-4 w-full px-4 py-2 border rounded-lg'>
					lastname
				</div>
				<div className='mb-4 w-full px-4 py-2 border rounded-lg'>
					address
				</div>
				<div className='mb-4 w-full px-4 py-2 border rounded-lg'>
					company
				</div>
				<div className='mb-4 w-full px-4 py-2 border rounded-lg'>
					card
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
