/* eslint-disable react/prop-types */
import { useContext } from 'react';
import ChatContext from '../context/ChatContext';
import MessageBox from './MessageBox';

const MessagesContainer = () => {
	const { messages } = useContext(ChatContext);
	return (
		<section className='flex flex-col justify-normal gap-2 w-full px-2 md:px-4 pt-3 overflow-y-auto  h-[calc(100vh-220px)] md:h-[calc(100vh-250px)]'>
			{messages &&
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
