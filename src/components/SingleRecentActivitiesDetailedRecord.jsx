/* eslint-disable react/prop-types */
import { useState } from 'react';
import SmallDownloadIcon from './icons/download.svg?component';
import LargeDownloadIcon from './icons/downloadXL.svg?component';
import GeneralModal from './GeneralModal';

const SingleRecentActivitiesDetailedRecord = () => {
	const [isOpen, setIsOpen] = useState(false);
	// this is just for trial, it will only open when download is complete
	return (
		<article
			className={`flex flex-col-reverse sm:flex-row items-center justify-between p-2 sm:px-8 w-[90%] mx-auto gap-5 text-black border-b border-gray-300 `}
		>
			<aside className='flex flex-col sm:flex-row items-center gap-3 py-2 sm:py-0 sm:gap-5 overflow-hidden px-3 sm:px-10 bg-gray-200 w-full flex-1'>
				<div className='flex-1'>
					<p className='font-bold capitalize text-sm'>
						Sender:{' '}
						<span className='text-primary-700'>Senders name</span>
					</p>
					<p className='font-bold capitalize text-sm'>
						Payment Receipt:{' '}
						<span className='text-primary-700'>Senders name</span>
					</p>
					<p className='font-bold capitalize text-sm'>10/12/2024</p>
				</div>
				<p className='border border-gray-300 h-[90px] w-[2px] hidden sm:block'></p>
				<div className='flex-1 '>
					<p className='font-bold capitalize text-sm'>
						Payment Confirmation:{' '}
						<span className={`text-green-text`}>Status</span>
					</p>
					<p className='font-bold capitalize text-sm'>
						Product Remark:{' '}
						<span className={`text-red-text`}>Not Sent</span>
					</p>
				</div>
			</aside>
			<div className='bg-gray-200 border border-black rounded-full flex items-center justify-center p-2 sm:p-3 cursor-pointer'>
				<SmallDownloadIcon onClick={() => setIsOpen(!isOpen)} />
				<GeneralModal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					className={
						'flex items-center justify-center flex-col gap-10 py-8 px-10 sm:py-16 sm:px-20 text-center font-bold '
					}
				>
					<LargeDownloadIcon />
					<p>Downloaded as CSV file</p>
				</GeneralModal>
			</div>
		</article>
	);
};
export default SingleRecentActivitiesDetailedRecord;
