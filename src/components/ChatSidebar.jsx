/* eslint-disable react/prop-types */
import { useContext } from 'react';
import InputFilter from './InputFilter';
import UserContactChat from './UserContactChat';
import ChatContext from '../context/ChatContext';

const ChatSidebar = ({ chatList }) => {
	const { userToChat } = useContext(ChatContext);
	return (
		<section
			className={`absolute z-50 top-0 left-0 md:relative md:w-[300px] w-full border border-gray-200 rounded-2xl overflow-hidden bg-white max-h-full ${
				userToChat._id ? 'hidden md:block' : ''
			} `}
		>
			<header className='border-b border-gray-200 p-3 mx-auto w-full h-[70px]'>
				<InputFilter filter={false} label={false} />
			</header>
			<div className='flex flex-col gap-2 mt-2 pb-5 overflow-y-auto h-[calc(100vh-170px)] md:h-[calc(100vh-200px)]'>
				{chatList.map((chat) => (
					<UserContactChat key={chat._id} chat={chat} />
				))}
			</div>
		</section>
	);
};

export default ChatSidebar;
