/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ImageElement from './ImageElement';
import EditIcon from './icons/editIcon.svg?component';
import DeleteIcon from './icons/deleteIcon.svg?component';
import ModalEditUser from './ModalEditUser';
import GeneralModal from './GeneralModal';
import ModalDelete from './ModalDelete';
import OtherContext from '../context/OtherContext';

const UsersList = ({ data }) => {
	const [openOptions, setOpenOptions] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const { setUserData } = useContext(OtherContext);
	const navigate = useNavigate();

	function handleClick() {
		setUserData({ ...data });
		navigate(`${location.pathname}/${data._id}`);
	}

	return (
		<>
			<div
				className={`scrollBarContainer flex items-center mt-3 justify-between gap-3 md:gap-8 hover:text-primary-700 hover:bg-primary-100 overflow-x-auto py-2`}
			>
				<div className='flex items-center justify-center w-full gap-2 md:gap-4'>
					<div className='w-10 h-10 sm:w-20 sm:h-20 rounded-full overflow-hidden '>
						<ImageElement imgSrc={data.photo} />
					</div>
					<span>
						<div>
							<h1
								className='font-medium text-base m:text-xl'
								onClick={handleClick}
							>
								{data.lastName + ' ' + data.name}
							</h1>
							<p className='text-gray-400 text-sm md:text-base'>
								{data.email}
							</p>
						</div>
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
						{data.phone}
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
