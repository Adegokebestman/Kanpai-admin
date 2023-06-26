/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButtonNavigation from './BackButtonNavigation';
import GeneralModal from './GeneralModal';
import ModalSuspendUser from './ModalSuspendUser';
import ModalDelete from './ModalDelete';

const UserReportDetailHeader = () => {
	const { userId } = useParams();
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const [isOpenSuspension, setIsOpenSuspension] = useState(false);

	return (
		<>
			<header className='flex items-center justify-between'>
				<BackButtonNavigation />
				{userId && (
					<aside className='flex items-center justify-start gap-2 lg:gap-5 text-white'>
						<button
							className='font-bold text-sm sm:text-base border border-red-box rounded-full px-2 py-1 sm:px-4 sm:py-2 text-red-box'
							onClick={() => setIsOpenSuspension(true)}
						>
							Suspend User
						</button>
						<button
							className='font-bold text-sm sm:text-base border-none rounded-full px-2 py-1 sm:px-4 sm:py-2 bg-red-box text-white'
							onClick={() => setIsOpenDelete(true)}
						>
							Block User
						</button>
					</aside>
				)}
			</header>
			<GeneralModal
				isOpen={isOpenSuspension}
				setIsOpen={setIsOpenSuspension}
			>
				<ModalSuspendUser setIsOpenSuspension={setIsOpenSuspension} />
			</GeneralModal>
			<GeneralModal isOpen={isOpenDelete} setIsOpen={setIsOpenDelete}>
				<ModalDelete setOpenDelete={setIsOpenDelete} value={'User'} />
			</GeneralModal>
		</>
	);
};
export default UserReportDetailHeader;
