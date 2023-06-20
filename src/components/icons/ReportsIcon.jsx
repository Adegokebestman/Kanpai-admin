const SvgComponent = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='none'
		{...props}
	>
		<path
			fill='#000'
			fillRule='evenodd'
			stroke='#000'
			strokeWidth={0.5}
			d='M6.293.5h6.414L18 5.793v6.414L12.707 17.5H6.293L1 12.207V5.793L6.293.5Zm.414 1L2 6.207v5.586L6.707 16.5h5.586L17 11.793V6.207L12.293 1.5H6.707Z'
			clipRule='evenodd'
		/>
		<path fill='#000' d='M8.5 4h2v8h-2zM8.5 13h2v2h-2z' />
	</svg>
);
export default SvgComponent;
