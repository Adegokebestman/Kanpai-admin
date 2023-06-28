import { useState } from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const FilterComponent = ({ data, title, toggle, left }) => {
	const [checked, setChecked] = useState(null);
	function handleChange(event) {
		const { value } = event.target;
		setChecked(value);
	}

	return (
		<div
			key={Math.random()}
			className={`absolute z-50 bg-white rounded-lg border border-gray-200 drop-shadow-2xl px-3 py-2 ${
				left ? 'left-0 top-4' : 'left-0 top-full -translate-x-full'
			}`}
		>
			{title && (
				<h3 className='font-bold text-sm sm:text-lg whitespace-nowrap'>
					Sort By
				</h3>
			)}
			{data.map((content) =>
				!content.name ? (
					<Link
						key={content.url}
						to={{
							pathname: location.pathname,
							search: content.url,
						}}
						className='whitespace-nowrap py-1 sm:py-2 text-xs sm:text-sm capitalize block'
					>
						{toggle && (
							<input
								type='checkbox'
								value={content.name}
								checked={checked === content.name}
								className='mr-2'
								onChange={handleChange}
							/>
						)}
						{content.tag}
					</Link>
				) : (
					<div
						key={content.name}
						className='whitespace-nowrap py-1 sm:py-2 text-xs sm:text-sm capitalize block'
					>
						{toggle && (
							<input
								type='checkbox'
								value={content.name}
								checked={checked === content.name}
								className='mr-2'
								onChange={handleChange}
							/>
						)}
						{content.tag}
					</div>
				)
			)}
		</div>
	);
};

export default FilterComponent;
