const SvgComponent = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='none'
		{...props}
	>
		<path
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M17.357 17.357H.643V.643h5.143v16.714-9h5.143v9V4.5h5.142v12.857'
		/>
	</svg>
);
export default SvgComponent;
