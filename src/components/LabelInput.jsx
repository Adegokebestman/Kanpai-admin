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
				className={classNames}
				type={type ?? 'text'}
				name={name}
				placeholder={placeholder ?? 'enter text'}
				onChange={onChange}
			/>
		</>
	);
};
export default LabelInput;
