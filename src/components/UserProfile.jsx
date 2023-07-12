import { RiMessage2Line } from 'react-icons/ri';
import ImageElement from './ImageElement';
import { useContext } from 'react';
import OtherContext from '../context/OtherContext';
import ChatContext from '../context/ChatContext';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
	const { userData } = useContext(OtherContext);
	const { updateChat } = useContext(ChatContext);
	const navigate = useNavigate();

	function handleClick() {
		updateChat(userData);
		navigate('/live-chat');
	}
	return (
		<div className='flex flex-col-reverse md:flex-row justify-between items-center mx-auto mt-3'>
			<div className='flex items-center gap-4'>
				<span className='hidden sm:block top-1/2 -right-[5%] translate-x-[20%] -translate-y-1/2 rounded-full bg-[#F0CFB6] text-[#A8591F] text-xs sm:text-sm relative py-1 px-2'>
					seller
				</span>
				<div className=' bg-white rounded-full h-16 w-16  sm:h-32 sm:w-32 border border-gray-300 overflow-hidden sm:self-start'>
					<ImageElement
						imgSrc={userData.photo}
						imgTitle={userData.name}
					/>
				</div>
				<div>
					<h1 className='font-medium text-base md:text-2xl capitalize'>
						{userData.lastName + ' ' + userData.name}
					</h1>
					<aside className='flex items-center  gap-4'>
						<p className='text-gray-700 text-sm md:text-xl'>
							{userData.email}
						</p>
						<div
							className='p-2 rounded-full bg-blue'
							onClick={handleClick}
						>
							<RiMessage2Line className='text-primary-700 text-xl' />
						</div>
					</aside>
					<p className='text-sm md:text-xl'>Joined 6th March, 2022</p>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
