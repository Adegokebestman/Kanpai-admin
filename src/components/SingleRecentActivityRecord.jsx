import { useState } from 'react';

import ImageElement from './ImageElement';
import Option from './icons/optionsIcon.svg?component';
import SingleRecentActivitiesDetailedRecord from './SingleRecentActivitiesDetailedRecord';

const SingleRecentActivityRecord = () => {
	const [openOptions, setOpenOptions] = useState(false);

	let srcImg = 'https://source.unsplash.com/400x400/?portrait';
	return (
		<section>
			<div
				className={`flex p-2 sm:px-8 items-center justify-between  sm:gap-4 hover:shadow text-black ${
					openOptions && 'bg-gray-200'
				}`}
			>
				<div className='hidden sm:block w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden'>
					<ImageElement imgSrc={srcImg} />
				</div>
				<div className='hidden sm:block lg:mr-5'>
					<h2 className='font-bold text-sm lg:text-base'>
						Store or User
					</h2>
					<p className='text-xs lg:text-sm'>EmailOfUserHere</p>
				</div>
				<div className='flex items-center justify-between flex-1'>
					<p className='text-left px-4 text-xs sm:text-sm'>
						Just the main heading or the summary of the event that
						occurred
					</p>
					<div className='flex items-center text-xs sm:text-sm'>
						<p className='hidden sm:block'>occurrence</p>
						<span
							className='p-2 rounded-full bg-gray-50 ml-2 sm:ml-4 cursor-pointer'
							onClick={() => setOpenOptions(!openOptions)}
						>
							<Option />
						</span>
					</div>
				</div>
			</div>
			{openOptions && (
				<SingleRecentActivitiesDetailedRecord
					openOptions={openOptions}
				/>
			)}
		</section>
	);
};
export default SingleRecentActivityRecord;
