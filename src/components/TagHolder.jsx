/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { reportTags } from '../lib/utils';

const TagHolder = () => {
	return (
		<>
			<div className='bg-gray-800 lg:py-[10px] p-2 lg:px-4 rounded-full flex items-center justify-center gap-3 max-w-max capitalize'>
				{reportTags.map((tag, i) => (
					<NavLink
						key={Math.random() + i}
						to={tag.url}
						className={({ isActive }) =>
							isActive
								? 'bg-white p-1 lg:px-3 lg:py-2 text-xs lg:text-base whitespace-nowrap rounded-full font-bold'
								: 'bg-transparent text-xs lg:text-base whitespace-nowrap'
						}
					>
						{tag.title}
					</NavLink>
				))}
			</div>
		</>
	);
};
export default TagHolder;
