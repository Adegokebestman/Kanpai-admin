import { useEffect, useState } from 'react';
import UserReportUserCard from '../components/UserReportUserCard';
import { BiMenuAltRight } from 'react-icons/bi';
import { filterActivities } from '../lib/utils';
import FilterComponent from '../components/FilterComponent';
import SingleRecentActivityRecord from '../components/SingleRecentActivityRecord';
import { getUserActivities } from '../lib/apiEndPoints';
import { useParams } from 'react-router-dom';

// Dummy data

const UserReportUser = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [activities, setActivities] = useState([]);
	const { userId } = useParams();

	useEffect(() => {
		async function fetch() {
			const data = await getUserActivities(userId);
			if (data.requestSucessful) {
				setActivities(data.activities);
			}
		}
		fetch();
	}, [userId]);

	return (
		<div className='flex flex-col items-start justify-start gap-6 border border-gray-300 rounded-3xl overflow-hidden pt-2 sm:pt-5 mt-4 sm:mt-8'>
			<UserReportUserCard className={'bg-transparent rounded-t-3xl'} />
			<div className='relative w-full px-4'>
				<hr className='border border-gray-200' />
				<p className='absolute top-1/2 -translate-y-1/2 left-4 max-w-max bg-white pr-3 font-bold text-sm sm:text-base flex items-center gap-3'>
					<BiMenuAltRight
						className='text-gray-500 text-lg'
						onClick={() => setShowFilter(!showFilter)}
					/>
					All Activities
				</p>
				{showFilter && (
					<FilterComponent data={filterActivities} left={true} />
				)}
			</div>
			{activities &&
				activities
					.filter((act) => {
						const filter =
							act.type != 'login' &&
							act.type != '' &&
							act.type != undefined;
						return filter;
					})
					.map((activity) => (
						<SingleRecentActivityRecord
							key={activity._id}
							activity={activity}
						/>
					))}
		</div>
	);
};
export default UserReportUser;
