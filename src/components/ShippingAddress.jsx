import { useEffect, useState } from 'react';
import { getUserShippingInfo } from '../lib/apiEndPoints';
import { useParams } from 'react-router-dom';

function ThirdForm() {
	const [shippingAddress, setShippingAddress] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		async function fetch() {
			const data = await getUserShippingInfo(id);
			if (data.requestSucessful) {
				setShippingAddress(data.shippingInfo);
			}
		}
		fetch();
	}, [id]);

	return (
		<section>
			{shippingAddress && (
				<>
					<div className='mt-20 md:mt-10 grid grid-rows-1 grid-flow-col gap-4 justify-center items-center'>
						<div>
							<p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
								Shipping Address
							</p>
						</div>
					</div>
					<div className='max-w-md mt-4 mx-auto'>
						<div className='w-full px-2 py-2 mb-4 border-orange-500 border rounded'>
							<b> Street:</b> {shippingAddress.street}
						</div>
						<div className='w-full px-2 py-2 mb-4 border-orange-500 border rounded'>
							<b>Street Number: </b>
							{shippingAddress.streetNumber}
						</div>
						<div className='w-full px-2 py-2 mb-4 border-orange-500 border rounded'>
							<b>Country of Residence: </b>
							{shippingAddress.country}
						</div>
						<div className='w-full px-2 py-2 mb-4 border-orange-500 border rounded'>
							<b>City of Residence:</b> {shippingAddress.city}
						</div>
						<div className='w-full px-2 py-2 mb-4 border-orange-500 border rounded'>
							<b>Postal Code: </b> {shippingAddress.postalCode}
						</div>
					</div>
				</>
			)}
		</section>
	);
}

export default ThirdForm;
