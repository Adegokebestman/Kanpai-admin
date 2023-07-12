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
			<label htmlFor={name}>
				{label}
				<input
					autoComplete={
						type == 'password' ? 'current-password' : type
					}
					required
					type={type ?? 'text'}
					id={name}
					name={name}
					placeholder={placeholder ?? 'enter text'}
					className={classNames}
					onChange={onChange}
				/>
			</label>
		</>
	);
};
export default LabelInput;
