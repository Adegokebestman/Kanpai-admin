/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import SupplierProfile from '../components/SupplierProfile';
import UserActivity from '../components/UserActivity';
import { BiMenuAltRight } from 'react-icons/bi';
import { filterActivities } from '../lib/utils';
import FilterComponent from '../components/FilterComponent';
import { useParams } from 'react-router-dom';
import { getUserActivities } from '../lib/apiEndPoints';
import { Oval } from 'react-loader-spinner';

const SupplierActivities = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [activities, setActivities] = useState([]);
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		async function fetch() {
			const data = await getUserActivities(id);
			if (data.requestSucessful) {
				setActivities(data.activities);
				setLoading(false);
			}
		}
		fetch();
	}, [id]);
	return (
		<div className='mt-4'>
			<SupplierProfile />

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
					<UserActivities data={activities} />
				)}
			</div>
		</div>
	);
};

export default SupplierActivities;

const UserActivities = ({ data }) => {
	const sortedData = data.sort((b, a) => new Date(a.date) - new Date(b.date));
	if (!sortedData.length) {
		return <h2 className='font-bold'>No Activity for this User yet</h2>;
	}
	return (
		<div className='px-2 sm:px-3 py-4 pb-8 border-l border-l-gray-200 w-[95%] mx-auto flex flex-col gap-3'>
			{sortedData.map((act) => (
				<UserActivity key={act._id} activity={act} />
			))}
		</div>
	);
};
