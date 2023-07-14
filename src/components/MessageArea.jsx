/* eslint-disable react/prop-types */
import MessageAreaHeader from './MessageAreaHeader';
import MessageAreaInput from './MessageAreaInput';
import MessagesContainer from './MessagesContainer';

const MessageArea = ({ action }) => {
	return (
		<section className='hidden border border-gray-200 rounded-2xl bg-white w-full flex-1 h-full overflow-hidden relative'>
			<MessageAreaHeader />
			<MessagesContainer />
			<MessageAreaInput action={action} />
		</section>
	);
};

export default MessageArea;
