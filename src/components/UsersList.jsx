/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ImageElement from './ImageElement';
import EditIcon from './icons/editIcon.svg?component';
import DeleteIcon from './icons/deleteIcon.svg?component';
import ModalEditUser from './ModalEditUser';
import GeneralModal from './GeneralModal';
import ModalDelete from './ModalDelete';

const UsersList = ({ id }) => {
	const [openOptions, setOpenOptions] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	let srcImg = 'https://source.unsplash.com/400x400/?portrait';
	return (
		<>
			<div
				className={`scrollBarContainer flex items-center mt-3 justify-between gap-3 md:gap-8 hover:text-primary-700 hover:bg-primary-100 overflow-x-auto py-2`}
			>
				<div className='flex items-center justify-center w-full gap-2 md:gap-4'>
					<div className='w-10 h-10 sm:w-20 sm:h-20 rounded-full overflow-hidden '>
						<ImageElement imgSrc={srcImg} />
					</div>
					<span>
						<NavLink to={`${id}`}>
							<h1 className='font-medium text-base m:text-xl'>
								Allen Whatson 1
							</h1>
							<p className='text-gray-400 text-sm md:text-base'>
								user1@example.com
							</p>
						</NavLink>
					</span>
				</div>

				<div className='block items-center w-full'>
					<h1 className='font-medium text-sm md:text-base whitespace-nowrap'>
						12/01/2022
					</h1>
					<span>
						<p className='text-gray-400 text-sm hidden md:block'>
							Subscribed date
						</p>
					</span>
				</div>

				<div className='block items-center  w-full'>
					<h1 className='font-medium text-sm md:text-base'>
						07045678950
					</h1>
					<p className='text-gray-400 text-xs md:text-sm'>Number</p>
				</div>

				<div className='flex items-center gap-3'>
					<EditIcon
						onClick={() => setIsEdit(true)}
						className='cursor-pointer'
					/>
					<DeleteIcon
						onClick={() => setOpenOptions(!openOptions)}
						className='cursor-pointer'
					/>
				</div>
			</div>

			<GeneralModal isOpen={isEdit} setIsOpen={setIsEdit}>
				<ModalEditUser setOpenDelete={setIsEdit} />
			</GeneralModal>

			<GeneralModal isOpen={openOptions} setIsOpen={setOpenOptions}>
				<ModalDelete
					setOpenDelete={setOpenOptions}
					value={'user account'}
				/>
			</GeneralModal>
		</>
	);
};

export default UsersList;
