/* eslint-disable react/prop-types */
// this component takes in children which is a component that holds the information and styles you want.
import Modal from 'react-modal';

const GeneralModal = ({ children, isOpen, setIsOpen, className }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => {
				setIsOpen ? setIsOpen(false) : null;
			}}
			// style={customStyles}
			overlayClassName={
				'bg-gray-overlay min-h-screen h-full w-full fixed top-0 bottom-0 left-0 z-[50] flex items-center justify-center px-2 py-4'
			}
			className={`w-full sm:w-auto rounded-lg bg-white p-5 overflow-auto max-h-[90vh] ${className}`}
		>
			{children}
		</Modal>
	);
};
export default GeneralModal;
// const customStyles = {
// 	content: {
// 		position: 'static',
// 		padding: '0',
// 		border: 'none',
// 		borderRadius: '0',
// 		width: 'max-content',
// 		background: 'transparent',
// 	},
// };
