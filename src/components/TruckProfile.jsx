import OtherContext from '../context/OtherContext';
import ChatContext from '../context/ChatContext';
import ImageElement from './ImageElement';
import { RiMessage2Line } from 'react-icons/ri';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const TruckProfile = () => {
	const { userData } = useContext(OtherContext);
	const { updateChat } = useContext(ChatContext);
	const navigate = useNavigate();

	function handleClick() {
		updateChat(userData);
		navigate('/live-chat');
	}
	return (
		<div className='flex flex-col justify-center items-center mx-auto mt-3'>
			<article className='flex flex-col justify-center items-center gap-4'>
				<div className='bg-white rounded-full h-20 w-20 sm:h-32 sm:w-32 border border-gray-300 overflow-hidden sm:self-start'>
					<ImageElement
						imgSrc={userData.photo}
						imgTitle={userData.name}
					/>
				</div>
				<div className='space-y-3'>
					<h1 className='font-medium text-lg md:text-2xl'>
						{userData.name}
					</h1>
					<p className='text-gray-700 text-sm md:text-base'>
						{userData.email}
					</p>
					<p className='text-xs md:text-sm'>Joined 6th March, 2022</p>
					<span className='rounded-full p-2 flex gap-3 mt-2 bg-blue max-w-max'>
						<p className='text-white'>Chat User:</p>
						<RiMessage2Line
							className='text-primary-700 text-2xl'
							onClick={handleClick}
						/>
					</span>
				</div>
			</article>
		</div>
	);
};

export default TruckProfile;

// import  { useContext, useState } from 'react';
// import { IoIosArrowBack } from 'react-icons/io';
// import { Link, useNavigate } from 'react-router-dom';
// import { BiPencil } from 'react-icons/bi';
// import { BsCamera } from 'react-icons/bs';

//   const [userData, setUserData] = useState({
//     name: '',
//     phone: '',
//     description: '',
//     image: '',
//   });

//   const [barInfo, setBarInfo] = useState('');
//   const [productImagePreview, setProductImagePreview] = useState('');

//   const [isEditing, setIsEditing] = useState(false);
//   const [isEditDone, setIsEditDone] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setUserData({ ...userData, image: file });
//     setProductImagePreview(URL.createObjectURL(file));
//   };

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     // Save the edited profile data
//     setIsEditing(false);
//     setIsEditDone(true);
//     // Perform the necessary API call or data update
//     // ...
//   };

//   return (
//     <div>
//       <div className='mt-20 md:mt-10 grid grid-rows-1 grid-flow-col gap-4 justify-center items-center'>
//         <div>
//           <button className='mr-4 text-black text-xl md:text-2xl border border-white sidebar rounded-lg p-2'>
//             <Link to='/'>
//               <IoIosArrowBack />
//             </Link>
//           </button>
//           <p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
//             Personal Information
//           </p>
//         </div>
//       </div>

//       <div className='mt-10 grid grid-rows-2 grid-flow-col justify-center items-center'>
//         <div>
//           <img
//             src={productImagePreview || barInfo.photo}
//             alt=''
//             className='w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square'
//           />

//           <div className='border bg-white w-10 h-10 p-2 ml-40 camera -mt-10 text-black rounded-full'>
//             <label htmlFor='image'>
//               <BsCamera
//                 onClick={handleEditClick}
//                 className='text-2xl cursor-pointer'
//               />
//             </label>
//             {isEditing && (
//               <input
//                 style={{ display: 'none' }}
//                 type='file'
//                 id='image'
//                 accept='image/*'
//                 onChange={handleImageUpload}
//               />
//             )}
//           </div>
//         </div>

//         <div>
//           {isEditing ? (
//             <input
//               className='border border-white sidebar rounded-lg p-2 mb-2'
//               type='text'
//               name='name'
//               placeholder='Name'
//               value={userData.name}
//               onChange={handleInputChange}
//             />
//           ) : (
//             <p className='font-semibold text-2xl inline-block ml-2'>
//               {barInfo.name}
//               <button
//                 onClick={handleEditClick}
//                 className='font-medium ml-4 text-black text-2xl border border-white sidebar rounded-lg p-2 mb-2'
//               >
//                 <BiPencil />
//               </button>
//             </p>
//           )}

//           <div>
//             {isEditing ? (

//               <input
//                 className='border border-white sidebar rounded-lg p-2 mb-2'
//                 type='number'
//                 placeholder='Phone Number'
//                 name='phone'
//                 value={userData.phone}
//                 onChange={handleInputChange}
//               />
//             ) : (
//               <p className='font-medium text-lg inline-block ml-2'>
//                 {barInfo.phone}
//                 <button
//                   onClick={handleEditClick}
//                   className='font-medium ml-4 text-black text-2xl border border-white sidebar rounded-lg p-2'
//                 >
//                   <BiPencil />
//                 </button>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className='flex justify-center'>

//         <div>
//           {isEditing ? (
//             <button
//               onClick={handleSaveClick}
//               className='py-2 px-10 bg-transparent text-xl md:text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0'
//             >
//               Save
//             </button>
//           ) : (
//             <button
//               onClick={handleEditClick}
//               className='py-2 justify-center flex px-10 bg-transparent text-xl md:text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0'
//             >
//               Edit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
