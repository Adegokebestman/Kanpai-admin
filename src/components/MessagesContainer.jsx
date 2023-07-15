/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import ChatContext from '../context/ChatContext';
import MessageBox from './MessageBox';
import { socket } from '../lib/apiEndPoints';

const MessagesContainer = () => {
	const { messages, chatId } = useContext(ChatContext);
	const token = sessionStorage.getItem('token');
	useEffect(() => {
		socket.emit('send-message', token, '', chatId);
	}, [chatId, token]);
	return (
		<section className='flex flex-col justify-normal gap-2 w-full px-2 md:px-4 pt-3 overflow-y-auto  h-[calc(100vh-220px)] md:h-[calc(100vh-250px)]'>
			{messages &&
				chatId &&
				messages.map((message) => (
					<MessageBox
						key={message._id}
						ownerId={message.sender}
						message={message.message}
					/>
				))}
		</section>
	);
};
export default MessagesContainer;
