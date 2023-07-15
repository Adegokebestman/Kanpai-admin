/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import InputFilter from './InputFilter';
import { getUserActivities } from '../lib/apiEndPoints';

const AdminActivity = () => {
	const userData = JSON.parse(localStorage.getItem('user'));
	const [loading, setLoading] = useState(false);
	const [activities, setActivities] = useState([]);
	useEffect(() => {
		async function fetch() {
			setLoading(true);
			const data = await getUserActivities(userData.id);
			if (data.requestSucessful) {
				setActivities(data.activities);
				setLoading(false);
			}
		}
		fetch();
	}, [userData.id]);
	return (
		<div className='border-2 py-4 lg:py-6 px-3 rounded-xl border-gray-900 w-[95%] mx-auto'>
			<InputFilter action={'Recent Activities'} />
			{!loading && <UserActivities data={activities} />}
			{loading && <p className='animate-pulse text-lg'>Loading...</p>}
		</div>
	);
};

export default AdminActivity;

const UserActivities = ({ data }) => {
	const sortedData = data
		.filter((d) => d.activity != 'Logged in')
		.sort((b, a) => new Date(a.date) - new Date(b.date));
	if (!sortedData.length) {
		return <h2 className='font-bold'>No Activity for this User yet</h2>;
	}
	console.log(sortedData);
	return (
		<div className='px-2 sm:px-3 py-4 pb-8 border-l border-l-gray-200 w-[95%] mx-auto flex flex-col gap-3'>
			{/* {sortedData.map((act) => (
				<UserActivity key={act._id} activity={act} />
			))} */}
		</div>
	);
};
