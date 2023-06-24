/* eslint-disable react/prop-types */

const SquareBox = ({
	number = 100,
	tag = 'flags',
	classnames = 'text-red-box',
}) => {
	return (
		<div
			className={`p-2 space-y-1 lg:p-3 lg:space-y-2 border rounded border-red-text max-w-max ${classnames}`}
		>
			<p className='font-semibold text-xl lg:text-4xl'>{number}</p>
			<h3 className='capitalize text-base lg:text-lg'>{tag}</h3>
		</div>
	);
};
export default SquareBox;

// SquareBox.prototype = {
//    number: PropTypes.string,
//    tag: PropTypes.string,
//    classnames:PropTypes.string
// }
