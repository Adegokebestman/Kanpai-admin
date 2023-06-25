/* eslint-disable react/prop-types */
const Input = ({ label, type, name, value, onChange, className }) => {
	return (
		<label
			htmlFor={name}
			className='capitalize flex flex-col justify-start'
		>
			<p className='font-bold text-sm sm:text-base whitespace-nowrap'>
				{label}
			</p>
			{type !== 'textarea' ? (
				<input
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					className={`border border-primary-700 rounded-lg p-2 ${className}`}
				/>
			) : (
				<textarea
					name={name}
					value={value}
					onChange={onChange}
					className={`border border-primary-700 rounded-lg p-2 ${className}`}
				/>
			)}
		</label>
	);
};
export default Input;
