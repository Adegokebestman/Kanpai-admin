/* eslint-disable react/prop-types */
import SearchIcon from './icons/searchIcon.svg?component';
import FilterIcon from './icons/filterIcon.svg?component';
import { useState } from 'react';
import FilterComponent from './FilterComponent';
import { filterProducts } from '../lib/utils';

const InputFilter = ({ action }) => {
	const [showFilter, setShowFilter] = useState(false);
	const [searchText, setSearchText] = useState('');
	function handleSubmit(e) {
		e.preventDefault();
		// Function to submit Form
		alert(searchText);
	}
	return (
		<div>
			<h3 className='sm:hidden font-bold whitespace-nowrap'>{action}</h3>
			<aside className='flex items-center justify-between sm:justify-center gap-3 sm:gap-5 mx-auto '>
				<h3 className='hidden sm:block font-bold whitespace-nowrap'>
					{action}
				</h3>
				<form
					className='border border-primary-700 rounded-lg overflow-hidden p-1 flex items-center gap-1 sm;flex-1'
					onSubmit={handleSubmit}
				>
					<input
						type='text'
						className='w-full px-2 py-1'
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
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
					{showFilter && (
						<FilterComponent
							data={filterProducts}
							title={'sort by'}
							toggle={true}
							left={false}
						/>
					)}
				</div>
			</aside>
		</div>
	);
};
export default InputFilter;
