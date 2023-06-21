const Box = () => {
	return <div style={style} className='hidden lg:block'></div>;
};
export default Box;

const style = {
	height: '70vh',
	minWidth: '450px',
	maxWidth: '576px',
	borderRadius: '20px',
	padding: '10px',
	background:
		'linear-gradient(180.75deg, #FF7E20 0.64%, rgba(255, 126, 32, 0.27) 121.91%)',
};
