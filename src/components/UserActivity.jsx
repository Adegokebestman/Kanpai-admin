/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';

import ImageElement from './ImageElement';
import Option from './icons/optionsIcon.svg?component';
// import SingleRecentActivitiesDetailedRecord from './SingleRecentActivitiesDetailedRecord';
import OtherContext from '../context/OtherContext';
import moment from 'moment/moment';

const UserActivity = ({ activity }) => {
	const [openOptions, setOpenOptions] = useState(false);
	const { userData } = useContext(OtherContext);
	const formattedDate = moment(activity.date).format('DD/MM/YYYY');

	return (
		<section>
			<div
				className={`flex p-2 sm:px-8 items-center justify-between  sm:gap-4 hover:shadow text-black ${
					openOptions && 'bg-gray-200'
				}`}
			>
				<div className='hidden sm:block w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden'>
					<ImageElement
						imgSrc={userData.photo}
						imgTitle={userData.name}
					/>
				</div>
				<div className='hidden sm:block lg:mr-5'>
					<h2 className='font-bold text-sm lg:text-base'>
						{userData.name}
					</h2>
					<p className='text-xs lg:text-sm'>{userData.email}</p>
				</div>
				<div className='flex items-center justify-between overflow-auto md:overflow-hidden flex-1 md:w-full w-11/12'>
					<p className='text-left px-4 text-xs sm:text-sm'>
						{activity.activity}
					</p>

					<div className='flex items-center text-xs sm:text-sm'>
						<p className='text-left px-4 text-xs sm:text-sm'>
							{formattedDate}
						</p>
						<span
							className='p-2 rounded-full bg-gray-50 ml-2 sm:ml-4 cursor-pointer'
							onClick={() => setOpenOptions(!openOptions)}
						>
							<Option />
						</span>
					</div>
				</div>
			</div>
			{/* {openOptions && (
				<SingleRecentActivitiesDetailedRecord
					openOptions={openOptions}
				/>
			)} */}
		</section>
	);
};
export default UserActivity;
