import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { filterActivities } from '../lib/utils';
import FilterComponent from '../components/FilterComponent';
import UserPaymentActivity from './UserPaymentActivity';
// Dummy data

const PaymentActivity = () => {
	const [showFilter, setShowFilter] = useState(false);

	return (
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
			<UserRecentRecord />
		</div>
	);
};
export default PaymentActivity;

const UserRecentRecord = () => {
	const arrayData = [1, 2, 3, 4, 5];
	return (
		<div className='px-2 sm:px-3 py-4 pb-8 border-l border-l-gray-200 w-[95%] mx-auto flex flex-col gap-3'>
			{arrayData.map((li) => (
				<UserPaymentActivity key={li} />
			))}
		</div>
	);
};
