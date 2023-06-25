import {AiOutlinePlus} from 'react-icons/ai'
const Buyers = () => {
	return (
	<div>
	<div className="flex justify-between">
		<h1 className='font-semibold text-xl'>Buyers Details</h1>
		<button className="bg-primary-700 px-4 py-2  text-white inline-flex items-center space-x-2 rounded">
		<AiOutlinePlus className='text-white'/>
        <span>Create a User Account</span>
    </button>
	</div>
	</div>
	);
};
export default Buyers;
