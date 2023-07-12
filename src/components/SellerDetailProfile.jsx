import { useContext } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import OtherContext from '../context/OtherContext';

const SellerDetailProfile = () => {
	const { userData } = useContext(OtherContext);

	return (
		<div>
			<div className='mt-20 md:mt-10 grid grid-rows-1 grid-flow-col gap-4 justify-center items-center'>
				<div>
					<button className='mr-4 text-black text-xl md:text-2xl border border-white sidebar rounded-lg p-2'>
						<Link to='/'>
							<IoIosArrowBack />
						</Link>
					</button>
					<p className='font-semibold text-xl md:text-2xl inline-block ml-2'>
						Personal Information
					</p>
				</div>
			</div>

			<div className='mt-10 grid grid-rows-2 grid-flow-col justify-center items-center'>
				<div>
					<img
						src={userData.photo}
						alt={userData.name}
						className='w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square'
					/>
				</div>

				<div>
					<p className='font-semibold text-2xl inline-block ml-2'>
						{userData.name}
					</p>
					<div>
						<p className='font-medium text-lg inline-block ml-2'>
							{userData.phone}
						</p>
					</div>
				</div>
			</div>

			<div className='w-full mx-auto'>
				<h2 className='text-xl font-semibold sm:text-2xl'>
					Bar description
				</h2>

				<div className='mt-4 bg-white rounded-md border-2 border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white first-letter:uppercase border-y-primary-700'>
					{userData.description === '' ? (
						<p className='text-red-text uppercase'>
							No Description available for this users
						</p>
					) : (
						userData.description
					)}
				</div>
			</div>
		</div>
	);
};

export default SellerDetailProfile;
{
	/*
	import { BiPencil } from 'react-icons/bi';
import { BsCamera } from 'react-icons/bs';

	<div className='mt-10 grid grid-rows-2 grid-flow-col justify-center items-center'>
				<div>
					<img
						src={userData.photo}
						alt=''
						className='w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square'
					/>

					{/* <div className='border bg-white w-10 h-10 p-2 ml-40 camera -mt-10 text-black rounded-full'>
						<label htmlFor='photo'>
							<BsCamera
								onClick={handleEditClick}
								className='text-2xl cursor-pointer'
							/>
						</label>
						{isEditing && (
							<input
								style={{ display: 'none' }}
								type='file'
								id='photo'
								accept='photo/*'
								onChange={handleImageUpload}
							/>
						)}
					</div>
				</div>

				<div>
					{/* {isEditing ? (
						<input
							className='border border-primary-700 sidebar rounded-lg p-2 mb-2'
							type='text'
							name='name'
							placeholder='Name'
							value={userData.name}
							onChange={handleInputChange}
						/>
					) : (
					<p className='font-semibold text-2xl inline-block ml-2'>
						{userData.name}
						{/* <button
								onClick={}
								className='font-medium ml-4 text-black text-2xl border border-white sidebar rounded-lg p-2 mb-2'
							>
								<BiPencil />
							</button>
					</p>
					{/* )}

					<div>
						{/* {isEditing ? (
							<input
								className='border border-primary-700 sidebar rounded-lg p-2 mb-2'
								type='number'
								placeholder='Phone Number'
								name='phone'
								value={userData.phone}
								onChange={handleInputChange}
							/>
						) : (
						<p className='font-medium text-lg inline-block ml-2'>
							{userData.phone}
							{/* <button
									onClick={handleEditClick}
									className='font-medium ml-4 text-black text-2xl border border-white sidebar rounded-lg p-2'
								>
									<BiPencil />
								</button>
						</p>
						{/* // )}
					</div>
				</div>
			</div>

			<div className='w-11/12 md:w-9/12 px-3 mb-2 mt-2 md:ml-20'>
				<h2 className='text-xl font-semibold sm:text-2xl'>
					Bar description
				</h2>
				{/* {isEditing ? (
					<textarea
						className='mt-4 bg-white rounded-2xl sidebar border border-gray-400 leading-normal resize-none w-full msg py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'
						name='description'
						value={userData.description}
						placeholder={barInfo.description}
						onChange={handleInputChange}
					/>
				) : (
				<div className='mt-4 bg-white rounded-2xl sidebar border border-gray-400 leading-normal resize-none w-full msg py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white first-letter:uppercase'>
					{userData.description}
				</div>
				{/* )}

				{/* <div>
					{isEditing ? (
						<button
							onClick={handleSaveClick}
							className='py-2 px-10 bg-transparent text-xl md:text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0'
						>
							Save
						</button>
					) : (
						<button
							onClick={handleEditClick}
							className='py-2 justify-center flex px-10 bg-transparent text-xl md:text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0'
						>
							Edit
						</button>
					)}
				</div>
			</div> */
}
