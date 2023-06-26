/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import ImageElement from './ImageElement';
import ChatIcon from './icons/chatIconColored.svg?component';
import { useParams } from 'react-router-dom';
import GeneralModal from './GeneralModal';
import ModalSuspendUser from './ModalSuspendUser';
import ModalDelete from './ModalDelete';
import { useState } from 'react';

const UserReportUserCard = ({ className }) => {
	const [isOpenSuspension, setIsOpenSuspension] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);

	let srcImg = 'https://source.unsplash.com/400x400/?portrait';
	const { userId } = useParams();

	return (
		<div className={`py-5 px-2 sm:px-20 w-full ${className}`}>
			<div className='flex flex-col sm:flex-row items-center justify-between gap-3'>
				<div className='flex items-center justify-between w-full px-2 sm:px-0 gap-4'>
					<div className='relative'>
						<div className='relative bg-white rounded-full h-20 w-20 sm:h-32 sm:w-32 border border-gray-300 overflow-hidden sm:self-start'>
							<ImageElement
								imgSrc={srcImg}
								imgTitle={'userName'}
							/>
						</div>
						{/* This should be returned if the user is flagged */}
						<span className='hidden sm:block absolute top-1/2 -left-1/2 translate-x-[20%] -translate-y-1/2 border border-red-text bg-red-light text-red-text font-bold rounded-full px-2 py-1 text-xs sm:text-sm'>
							Flagged
						</span>
					</div>

					<div className='flex-1'>
						<NavLink
							to={'/reports/users/1/' + 12}
							className='font-bold text-lg sm:text-2xl'
						>
							Store or User
						</NavLink>

						<p>
							EmailOfUserHere
							<ChatIcon className='ml-3 inline' />
						</p>
						{userId && <p>Date user Joined</p>}
					</div>
				</div>
				{userId && (
					<button
						type='button'
						className='px-3 py-1 text-xs sm:text-sm sm:px-4 sm:py-2 border border-primary-700 text-primary-700 font-semibold rounded-full items-start whitespace-nowrap'
					>
						Recent Activities
					</button>
				)}
			</div>

			{!userId && (
				<aside className='flex items-center justify-center gap-2 lg:gap-5 text-white mt-4'>
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

			<GeneralModal
				isOpen={isOpenSuspension}
				setIsOpen={setIsOpenSuspension}
			>
				<ModalSuspendUser setIsOpenSuspension={setIsOpenSuspension} />
			</GeneralModal>
			<GeneralModal isOpen={isOpenDelete} setIsOpen={setIsOpenDelete}>
				<ModalDelete setOpenDelete={setIsOpenDelete} value={'User'} />
			</GeneralModal>
		</div>
	);
};
export default UserReportUserCard;
