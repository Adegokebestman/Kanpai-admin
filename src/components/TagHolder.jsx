/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const TagHolder = ({ val1 = 2, val2 = 1 }) => {
	val1;
	return (
		<div className='bg-gray-800 lg:py-[10px] p-2 lg:px-4 rounded-full flex items-center justify-center gap-3 max-w-max capitalize'>
			<NavLink
				to={'products'}
				className={({ isActive }) =>
					isActive
						? 'bg-white p-1 lg:px-3 lg:py-2 text-xs lg:text-base whitespace-nowrap rounded-full'
						: 'bg-transparent text-xs lg:text-base whitespace-nowrap'
				}
			>
				Product Flagged
			</NavLink>

			{val2 && (
				<NavLink
					to={'users'}
					className={({ isActive }) =>
						isActive
							? 'bg-white p-1 lg:px-3 lg:py-2 text-xs lg:text-base whitespace-nowrap rounded-full'
							: 'bg-transparent text-xs lg:text-base whitespace-nowrap'
					}
				>
					Users Flagged
				</NavLink>
			)}
		</div>
	);
};
export default TagHolder;
