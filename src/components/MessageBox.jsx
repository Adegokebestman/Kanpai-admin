/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from 'react';
import ChatContext from '../context/ChatContext';

const MessageBox = ({ ownerId = 'myId' }) => {
	const messageRef = useRef(null);

	useEffect(() => {
		messageRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	const { myChatId } = useContext(ChatContext);
	return (
		<article
			ref={messageRef}
			className={`flex flex-col p-2 rounded-xl text-sm max-w-[60%] w-max ${
				myChatId !== ownerId ? 'self-end' : 'self-start'
			}`}
		>
			<span
				className={` p-2 rounded-xl ${
					myChatId !== ownerId ? 'self-start' : 'self-end'
				}`}
			>
				date
			</span>
			<div
				className={` p-2 rounded-xl ${
					myChatId !== ownerId
						? 'bg-red-bg rounded-br-none'
						: 'bg-gray-200 rounded-bl-none'
				}`}
			>
				<p>
					some messages from the user and allab fbdadba dkjabfjabfj
					jadbfjabwjbfa afbdjbfa ajbfdkjb anm dfabwgfr e fna
					dfbijabfde abjd
				</p>
			</div>
		</article>
	);
};
export default MessageBox;
