/* eslint-disable react/prop-types */
const ToggleButton = ({ label, checked, onToggle }) => (
	<label className='flex items-center justify-between gap-5'>
		<div className='flex items-center'>
			<span className='relative'>
				<input
					id='Toggle1'
					checked={checked}
					onChange={onToggle} // Pass the event directly to the parent handler
					type='checkbox'
					className='hidden peer'
				/>
				<div className='w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-primary-700'></div>
				<div className='absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white'></div>
			</span>
			<p className='ml-2 font-medium'>{label}</p>
		</div>
	</label>
);
export default ToggleButton;
