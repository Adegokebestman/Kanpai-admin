/* eslint-disable react/prop-types */
import { useState } from 'react';
import ImageElement from './ImageElement';
import GeneralModal from './GeneralModal';
import ModalDelete from './ModalDelete';

const SingleRecycleItem = ({ value }) => {
	const [openOptions, setOpenOptions] = useState(false);

	let srcImg = 'https://source.unsplash.com/400x400/?portrait';
	return (
		<>
			<div
				className={`flex flex-col sm:flex-row p-2 sm:py-4 sm:px-8 items-center justify-between sm:gap-4 hover:drop-shadow-xl hover:bg-primary-100 text-black hover:text-primary-700`}
			>
				<div className='flex items-center justify-between w-full'>
					<div className='w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden'>
						<ImageElement imgSrc={srcImg} />
					</div>
					<h2 className='font-bold text-sm lg:text-base'>
						Store or User
					</h2>
					<h2 className='font-bold text-sm lg:text-base'>
						EmailOfUser
					</h2>
				</div>

				<div className='flex items-center justify-end gap-8 sm:gap-0 sm:justify-around text-sm w-full'>
					<p>occurrence</p>
					<button
						className='px-3 py-1 sm:p-2 rounded-full bg-red-text text-white cursor-pointer text-xs sm:text-sm self-end'
						onClick={() => setOpenOptions(!openOptions)}
					>
						Unsuspend
					</button>
				</div>
			</div>
			<GeneralModal isOpen={openOptions} setIsOpen={setOpenOptions}>
				<ModalDelete
					recycle={true}
					setOpenDelete={setOpenOptions}
					value={value}
				/>
			</GeneralModal>
		</>
	);
};

export default SingleRecycleItem;
