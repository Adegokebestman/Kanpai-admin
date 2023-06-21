/* eslint-disable react/prop-types */
const LabelInput = ({
	label,
	name,
	placeholder,
	type,
	classNames,
	onChange,
}) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input
				autoComplete={type == 'email' ? 'username' : 'current-password'}
				required
				type={type ?? 'text'}
				name={name}
				placeholder={placeholder ?? 'enter text'}
				className={classNames}
				onChange={onChange}
			/>
		</>
	);
};
export default LabelInput;
