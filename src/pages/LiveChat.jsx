import { useContext } from 'react';
import ChatContext from '../context/ChatContext';
import MessageArea from '../components/MessageArea';
import ChatSidebar from '../components/ChatSidebar';

const LiveChat = () => {
	const { userToChat } = useContext(ChatContext);

	return (
		<div className='liveChat__page md:flex md:gap-4'>
			<ChatSidebar />
			<MessageArea />
		</div>
	);
};
export default LiveChat;
