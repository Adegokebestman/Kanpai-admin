/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageElement from './ImageElement';
import EditIcon from './icons/editIcon.svg?component';
import DeleteIcon from './icons/deleteIcon.svg?component';
import ModalEditUser from './ModalEditUser'
import GeneralModal from './GeneralModal';
import ModalDelete from './ModalDelete';

const DriverList = ({id}) => {
	const [openOptions, setOpenOptions] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

	let srcImg = 'https://source.unsplash.com/400x400/?portrait';
	return (
		<>
			<div
				className={`flex items-center mt-3 justify-between gap-10 overflow-scroll md:overflow-scroll hover:text-primary-700 hover:bg-primary-100`}
			>
            <div className='flex items-center justify-center w-full gap-10 '>
                <div className='w-10 h-10 sm:w-20 sm:h-20 rounded-full overflow-hidden '>
                <ImageElement imgSrc={srcImg} /></div>
                <span>
                <Link to={`${id}`}>
                <h1 className='font-medium text-xl'> Allen Whatson 1</h1>
                <p className='text-gray-400'>  user1@example.com</p>
                </Link>
                </span>

            </div>

            <div className='block items-center w-full '>
                <h1 className='font-medium text-xl'>Oct 01, 2022</h1>
                <span> <p className='text-gray-400'>Subscribed date</p></span>

            </div>

            <div className='block items-center  w-full '>
                <h1 className='font-medium text-xl'>07045678950</h1>
                <p className='text-gray-400'>Number</p>
            </div>

            <div className='block items-center cursor-pointer  w-full '>
                <EditIcon onClick={()=> setIsEdit(true)} />
            </div>

            <div className='block items-center cursor-pointer  w-full '>
                <DeleteIcon onClick={() => setOpenOptions(!openOptions)} />
            </div>



			</div>

            <GeneralModal isOpen={isEdit} setIsOpen={setIsEdit}>
					<ModalEditUser setOpenDelete={setIsEdit} />
				</GeneralModal>


			<GeneralModal isOpen={openOptions} setIsOpen={setOpenOptions}>
				<ModalDelete
					recycle={true}
					setOpenDelete={setOpenOptions}
					value={'user account'}
				/>
			</GeneralModal>
		</>
	);
};

export default DriverList;
