/* eslint-disable react/prop-types */
import SearchIcon from './icons/searchIcon.svg?component';
import FilterIcon from './icons/filterIcon.svg?component';
import { useState } from 'react';

const InputFilter = ({action}) => {
	const [showFilter, setShowFilter] = useState(false);
	return (
		<div>
			<h3 className='sm:hidden font-bold whitespace-nowrap'>
			{action}
			</h3>
			<aside className='flex items-center justify-between sm:justify-center gap-3 sm:gap-5 mx-auto '>
				<h3 className='hidden sm:block font-bold whitespace-nowrap'>
			{action}
				</h3>
				<form className='border border-primary-700 rounded-lg overflow-hidden p-1 flex items-center gap-1 sm;flex-1'>
					<input type='text' className='w-full px-2 py-1' />
					<button
						type='submit'
						className='bg-primary-700 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white text-sm lg:text-base'
					>
						<SearchIcon />
						<span className='hidden sm:inline'>Search</span>
					</button>
				</form>
				<div className='relative'>
					<div
						className='p-3 rounded-lg bg-primary-700'
						onClick={() => setShowFilter(!showFilter)}
					>
						<FilterIcon />
					</div>
					{showFilter && <FilterComponent />}
				</div>
			</aside>
		</div>
	);
};
export default InputFilter;

const FilterComponent = () => {
	return (
		<ul className='absolute z-20 bg-white rounded-lg border border-gray-200 drop-shadow-2xl px-3 py-2 left-0  -translate-x-[100%] top-[100%] '>
			<h3 className='font-bold text-sm sm:text-lg whitespace-nowrap'>
				Sort By
			</h3>
			<li className='whitespace-nowrap py-3 text-xs sm:text-sm'>
				<input type='checkbox' name='pending' className='mr-2' />
				Pending Order
			</li>
			<li className='whitespace-nowrap py-3 text-xs sm:text-sm'>
				<input type='checkbox' name='delivered' className='mr-2' />
				Delivered Order
			</li>
		</ul>
	);
};
