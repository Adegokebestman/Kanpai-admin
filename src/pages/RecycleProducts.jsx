import { useState, useEffect } from 'react';
import SingleRecycleItem from '../components/SingleRecycleItem';
import { getSuspendedProducts } from '../lib/apiEndPoints';
import { Oval } from 'react-loader-spinner';

const RecycleProducts = () => {
	const [suspendedProducts, setSuspendedProducts] = useState([]);
	const [loading, setLoading] = useState([]);
	useEffect(() => {
		async function fetch() {
			setLoading(true);
			const { requestSucessful, suspendedProducts } =
				await getSuspendedProducts();
			setSuspendedProducts(suspendedProducts);
			if (requestSucessful) {
				setLoading(false);
			}
		}
		fetch();
	}, []);
	return (
		<div className='flex flex-col gap-3'>
			{loading && (
				<Oval
					height={80}
					width={80}
					color='#F9F8F8'
					wrapperStyle={{}}
					wrapperClass='bg-gray-fade w-full flex items-center justify-center h-full py-20'
					visible={true}
					ariaLabel='oval-loading'
					secondaryColor='#B3B3B3'
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
			)}
			{suspendedProducts &&
				suspendedProducts.map((suspendedUser, i) => (
					<SingleRecycleItem
						key={i}
						value={suspendedUser}
						user={false}
					/>
				))}
		</div>
	);
};
export default RecycleProducts;
