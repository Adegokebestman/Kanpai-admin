/* eslint-disable react/prop-types */
import { AiOutlinePlus } from 'react-icons/ai';

const CreateNewButton = ({ role = 'buyer', action }) => {
	function handleAction() {
		action();
	}
	return (
		<button
			type='button'
			className='bg-primary-700 px-4 py-2 text-white inline-flex items-center space-x-2 rounded'
			onClick={handleAction}
		>
			<AiOutlinePlus className='text-white' />
			<span>Create {role} Account</span>
		</button>
	);
};
export default CreateNewButton;
