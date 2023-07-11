import { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';
import { getAllDrivers } from '../lib/apiEndPoints';
import { Oval } from 'react-loader-spinner';

const TruckDriver = () => {
	const [allUsers, setAllUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetch() {
			setLoading(true);
			const data = await getAllDrivers();
			if (data.requestSucessful) {
				setAllUsers(data.allDrivers);
				setLoading(false);
			}
		}
		fetch();
	}, []);
	return (
		<>
			{loading ? (
				<Oval
					height={30}
					width={30}
					color='#F9F8F8'
					wrapperStyle={{}}
					wrapperClass='bg-gray-fade w-full flex items-center justify-center h-full py-20'
					visible={true}
					ariaLabel='oval-loading'
					secondaryColor='#B3B3B3'
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
			) : (
				<div className='flex flex-col gap-3'>
					{allUsers.map((user) => (
						<UsersList key={user._id} value={'user'} data={user} />
					))}
				</div>
			)}
		</>
	);
};
export default TruckDriver;
