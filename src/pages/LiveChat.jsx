import MessageArea from '../components/MessageArea';
import ChatSidebar from '../components/ChatSidebar';
// import { io } from 'socket.io-client';

const LiveChat = () => {
	return (
		<div className='liveChat__page md:flex md:gap-4'>
			<ChatSidebar />
			<MessageArea />
		</div>
	);
};
export default LiveChat;
