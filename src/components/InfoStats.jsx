/* eslint-disable react/prop-types */
const InfoStats = ({ title, number, period, rate }) => {
	return (
		<aside className='text-white'>
			<h3 className='text-sm sm:text-base font-bold capitalize'>
				{title}
			</h3>
			<p className='font-bold text-xl sm:text-3xl'>{number}</p>
			<div className='flex items-center justify-start gap-4 text-sm sm:text-base'>
				<p className='capitalize whitespace-nowrap hidden sm:block'>
					{period}
				</p>
				{rate && (
					<p
						className={`bg-white rounded-3xl text-xs sm:text-sm px-2 py-1 ${
							rate < 0 ? 'text-red-text' : 'text-green-text'
						}`}
					>
						{rate}
					</p>
				)}
			</div>
		</aside>
	);
};
export default InfoStats;
