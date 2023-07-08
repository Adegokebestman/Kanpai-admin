import { useContext } from 'react';
import ImageElement from './ImageElement';
import ChatContext from '../context/ChatContext';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MessageAreaHeader = () => {
	const { userToChat, updateChat, defaultChatState, setMessages } =
		useContext(ChatContext);

	function handleClick() {
		setMessages([]);
		updateChat(defaultChatState);
	}

	return (
		<header className='flex justify-between items-center w-full border-b border-gray-200 p-2 px-1 md:px-4 h-[70px]'>
			<aside className='flex gap-2 items-center'>
				<AiOutlineArrowLeft
					className='cursor-pointer'
					onClick={handleClick}
				/>
				<div className='h-10 w-10 rounded-full overflow-hidden'>
					<ImageElement imgSrc={userToChat.photo} />
				</div>
				<div className='flex flex-col justify-between items-start justify-self-end flex-1'>
					<h2 className='font-bold text-sm sm:text-lg capitalize'>
						{userToChat.name}
					</h2>
					<p className='text xs sm:text-sm capitalize'>
						{userToChat.roles}
					</p>
				</div>
			</aside>
			<aside className='flex gap-4 items-center px-3 py-1 rounded-2xl bg-primary-700 text-white'>
				<div className='hidden md:block h-10 w-10 rounded-full overflow-hidden'>
					<ImageElement />
				</div>
				<p className='capitalize'>country</p>
			</aside>
		</header>
	);
};
export default MessageAreaHeader;
