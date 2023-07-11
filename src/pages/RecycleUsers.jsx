import { useState, useEffect } from 'react';
import SingleRecycleItem from '../components/SingleRecycleItem';
import { getSuspendedUsers } from '../lib/apiEndPoints';
import { Oval } from 'react-loader-spinner';

const RecycleUsers = () => {
	const [suspendedUsers, setSuspendedUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		async function fetch() {
			setLoading(true);
			const { requestSucessful, suspendedUsers } =
				await getSuspendedUsers();
			setSuspendedUsers(suspendedUsers);
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
			{suspendedUsers &&
				suspendedUsers.map((suspendedUser, i) => (
					<SingleRecycleItem
						key={i - suspendedUser}
						value={suspendedUser}
					/>
				))}
		</div>
	);
};
export default RecycleUsers;
