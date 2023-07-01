import MessageAreaHeader from './MessageAreaHeader';
import MessageAreaInput from './MessageAreaInput';
import MessagesContainer from './MessagesContainer';

const MessageArea = () => {
	return (
		<section className='border border-gray-200 rounded-2xl bg-white w-full flex-1 h-full overflow-hidden relative'>
			<MessageAreaHeader />
			<MessagesContainer />
			<MessageAreaInput />
		</section>
	);
};

export default MessageArea;
