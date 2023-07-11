/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import DriverProfile from '../components/DriverProfile';
import UserActivity from '../components/UserActivity';
import { BiMenuAltRight } from 'react-icons/bi';
import { filterActivities } from '../lib/utils';
import FilterComponent from '../components/FilterComponent';
import { useParams } from 'react-router-dom';
import { getUserActivities } from '../lib/apiEndPoints';

const DriverActivities = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [activities, setActivities] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		async function fetch() {
			const data = await getUserActivities(id);
			if (data.requestSucessful) {
				setActivities(data.activities);
			}
		}
		fetch();
	}, [id]);
	return (
		<div className='mt-4'>
			<DriverProfile />

			<div className='flex flex-col items-start justify-start gap-6 overflow-hidden pt-2 sm:pt-5 mt-4 sm:mt-8'>
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

				{activities && <UserActivities data={activities} />}
			</div>
		</div>
	);
};

export default DriverActivities;

const UserActivities = ({ data }) => {
	const sortedData = data.sort((b, a) => new Date(a.date) - new Date(b.date));
	return (
		<div className='px-2 sm:px-3 py-4 pb-8 border-l border-l-gray-200 w-[95%] mx-auto flex flex-col gap-3'>
			{sortedData.map((act) => (
				<UserActivity key={act._id} activity={act} />
			))}
		</div>
	);
};
