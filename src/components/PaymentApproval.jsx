import { useState } from 'react';

import ImageElement from './ImageElement';
import Option from './icons/optionsIcon.svg?component';
import SingleRecentActivitiesDetailedRecord from './SingleRecentActivitiesDetailedRecord';
import ModalApprovePayment from './ModalApprovePayment';
import ModalDeclinePayment from './ModalDeclinePayment';
import GeneralModal from './GeneralModal';

const PaymentApproval = () => {
	const [openOptions, setOpenOptions] = useState(false);
    const [openApproved, setOpenApproved] = useState(false);
    const [openDecline, setOpenDecline] = useState(false);


	let srcImg = 'https://source.unsplash.com/400x400/?portrait';
	return (
		<section className='mt-4'>
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
						Name of user
					</h2>
					<p className='text-xs lg:text-sm'>EmailOfUserHere</p>
				</div>
				<div className='flex items-center justify-between overflow-scroll md:overflow-hidden flex-1 md:w-full w-11/12'>
					<p className='text-left px-4 text-xs sm:text-sm'>
                    Loyd Francis is requested a payout of <b>$4,000</b>
					</p>


                    <div className='gap-4 flex'>
                        <button onClick={() => setOpenApproved(true)} className='py-2 px-3 border rounded-full text-white bg-green-bg'>Approve</button>
                        <button onClick={() => setOpenDecline(true)} className='py-2 px-3 border rounded-full text-white bg-red-text'>Decline</button>
                    </div>
					<div className='flex items-center text-xs sm:text-sm'>
                    <p className='text-left px-4 text-xs sm:text-sm'>
                    12/03/2022
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
			{openOptions && (
				<SingleRecentActivitiesDetailedRecord
					openOptions={openOptions}
				/>
			)}

            <GeneralModal
				isOpen={openApproved}
				setIsOpen={setOpenApproved}
			>
				<ModalApprovePayment setIsOpenSuspension={setOpenApproved} />
			</GeneralModal>
			<GeneralModal isOpen={openDecline} setIsOpen={setOpenDecline}>
				<ModalDeclinePayment setOpenDelete={setOpenDecline} value={'User'} />
			</GeneralModal>

		</section>
	);
};
export default PaymentApproval;
