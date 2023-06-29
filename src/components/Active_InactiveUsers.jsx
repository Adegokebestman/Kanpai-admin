/* eslint-disable react/prop-types */
const Active_InactiveUsers = ({ active, number = 200 }) => {
	return (
		<div
			className={`px-3 py-1 rounded flex items-center justify-start max-w-max gap-2 ${
				active ? 'bg-primary-100' : 'bg-gray-100'
			}`}
		>
			<span
				className={`rounded px-2 py-[2px] text-white text-sm ${
					active ? 'bg-primary-700' : 'bg-gray-200'
				}`}
			>
				{number}
			</span>
			<span className='font-bold text-sm'>
				{active ? 'Active' : 'Inactive'}
			</span>
		</div>
	);
};
export default Active_InactiveUsers;
