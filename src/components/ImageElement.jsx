/* eslint-disable react/prop-types */
const ImageElement = ({ imgSrc, imgTitle }) => {
	return (
		<img
			src={imgSrc}
			alt={imgTitle}
			className='w-full h-full object-cover object-center'
		/>
	);
};
export default ImageElement;
