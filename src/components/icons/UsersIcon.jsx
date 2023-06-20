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
			strokeWidth={1.5}
			d='M14 17.128a9.379 9.379 0 0 0 2.625.372 9.336 9.336 0 0 0 4.121-.952 4.126 4.126 0 0 0-7.533-2.493M14 17.128v-.003c0-1.113-.286-2.16-.787-3.07M14 17.128v.106A12.318 12.318 0 0 1 7.624 19c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M11 4.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
		/>
	</svg>
);
export default SvgComponent;
