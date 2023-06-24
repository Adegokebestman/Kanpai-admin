import LineChart from '../components/Chart';
import InfoStats from '../components/InfoStats';
import InputFilter from '../components/InputFilter';
// import Search from "../components/Search";

const Dashboard = () => {
	return (
		<div className='mx-auto space-y-10'>
			<div className='flex items-center justify-evenly gap-4 bg-primary-700 py-7 rounded-xl max-w-[95%] sm:w-auto mx-auto'>
				<InfoStats title='buyers' number={600} />
				<InfoStats title='sellers' number={427} rate={13} />
				<InfoStats rate={22} title='truck drivers' />
			</div>
			{/* Chartjs */}
			<div className='border-2 rounded-xl border-gray-400 mx-auto w-[90%]'>
				<div className='flex justify-between items-center p-4 sm:p-10'>
					<p className='text-xl font-medium'>Analytics</p>

					<div className='relative bg-gray-600 p-2 '>
						<input
							type='checkbox'
							id='sortbox'
							className='hidden absolute'
						/>
						<label
							htmlFor='sortbox'
							className='flex items-center space-x-1 cursor-pointer'
						>
							<span className='text-lg text-primary-700'>
								Sort By
							</span>
							<svg
								className='h-4 w-4 text-primary-700'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path d='M19 9l-7 7-7-7' />
							</svg>
						</label>

						<div
							id='sortboxmenu'
							className='absolute right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-600 border border-gray-400 transition delay-75 ease-in-out z-10'
						>
							<ul className='block text-right text-gray-900'>
								<li>
									<a
										href='#'
										className='block px-3 py-2 hover:bg-gray-200'
									>
										Month
									</a>
								</li>
								<li>
									<a
										href='#'
										className='block px-3 py-2 hover:bg-gray-200'
									>
										Day
									</a>
								</li>
								<li>
									<a
										href='#'
										className='block px-3 py-2 hover:bg-gray-200'
									>
										Week
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className=' w-full md:h-[500px] flex md:justify-center justify-end mb-4'>
					<LineChart />
				</div>
			</div>
			{/* Recent activities */}
			<div className='border-2 py-4 lg:py-6 px-3 rounded-xl border-gray-400 w-[95%] mx-auto'>
				<InputFilter />

				{/* customer table */}
				<section>
					<div className='flex flex-col justify-center h-full'>
						{/* <!-- Table --> */}
						<div className='w-full mx-auto'>
							<div className='p-3'>
								<div className='overflow-x-auto'>
									<table className='table-auto w-full'>
										<thead className='text-xs uppercase text-gray-400 bg-gray-50'>
											<tr className='font-bold capitalize'>
												<th className='p-2 whitespace-nowrap'>
													{''}
												</th>
												<th className='p-2 whitespace-nowrap text-left text-base'>
													Suppliers Name
												</th>
												<th className='p-2 whitespace-nowrap text-left text-base'>
													Suppliers Email
												</th>
												<th className='p-2 whitespace-nowrap text-left text-base'>
													Date Flagged
												</th>
												<th className='p-2 whitespace-nowrap text-left text-base'>
													Status
												</th>
											</tr>
										</thead>
										<tbody className='text-sm divide-y divide-gray-100'>
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
											<TableData />
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
export default Dashboard;

const TableData = () => {
	return (
		<tr>
			<td className='p-2 whitespace-nowrap'>
				<div className='flex items-center'>
					<div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
						<img
							className='rounded-full'
							src='https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg'
							width='40'
							height='40'
							alt='Alex Shatov'
						/>
					</div>
				</div>
			</td>
			<td className='p-2 whitespace-nowrap'>
				<div className='font-medium text-gray-800'>Alex Shatov</div>
			</td>
			<td className='p-2 whitespace-nowrap'>
				<div className='text-left'>alexshatov@gmail.com</div>
			</td>
			<td className='p-2 whitespace-nowrap'>
				<div className='text-lg text-left'>12/06/2023</div>
			</td>
			<td className='p-2 whitespace-nowrap'>
				<div className=' text-center bg-red-300 py-2 rounded-full'>
					<p className='text-red-200 md:text-lg'>Flagged</p>
				</div>
			</td>
		</tr>
	);
};
