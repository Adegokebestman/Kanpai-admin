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
		<div className='md:flex md:flex-col-3 justify-between items-center mx-auto mt-3'>
			<article className='flex flex-col sm:flex-row items-center gap-4'>
				<div className='bg-white rounded-full h-20 w-20 sm:h-32 sm:w-32 border border-gray-300 overflow-hidden sm:self-start'>
					<ImageElement
						imgSrc={userData.photo}
						imgTitle={userData.name}
					/>
				</div>
				<div>
					<h1 className='font-medium text-lg md:text-2xl'>
						{userData.name}
					</h1>
					<span className='flex items-center  gap-4 leading-8'>
						<p className='text-gray-700 text-base md:text-xl'>
							{userData.email}
						</p>
						<RiMessage2Line
							className='text-primary-700'
							onClick={handleClick}
						/>
					</span>
					<p className='text-xs md:text-sm'>Joined 6th March, 2022</p>
				</div>
			</article>
		</div>
	);
};

export default UserProfile;
