import { useEffect } from 'react';
import LineChart from '../components/Chart';
import InfoStats from '../components/InfoStats';
import InputFilter from '../components/InputFilter';
import {
	getSuppliersNum,
	getDriversNum,
	getBuyersNum,
} from '../lib/apiEndPoints';
import { useState } from 'react';

const Dashboard = () => {
	const [allUsersNum, setAllUsersNum] = useState({
		drivers: '',
		buyers: '',
		suppliers: '',
	});

	useEffect(() => {
		let mount = true;
		const fetchAllNum = async () => {
			const suppliers = await getSuppliersNum();
			const buyers = await getBuyersNum();
			const drivers = await getDriversNum();
			if (
				drivers.requestSucessful &&
				buyers.requestSucessful &&
				suppliers.requestSucessful
			) {
				setAllUsersNum({
					...allUsersNum,
					drivers: drivers.drivers,
					buyers: buyers.buyers,
					suppliers: suppliers.suppliers,
				});
			}
		};

		if (mount) {
			fetchAllNum();
		}

		return () => {
			mount = false;
		};
	}, []);

	return (
		<div className='mx-auto space-y-10'>
			<div className='flex items-center justify-evenly gap-4 bg-primary-700 py-7 rounded-xl max-w-[95%] sm:w-auto mx-auto'>
				<InfoStats
					title='buyers'
					number={allUsersNum.buyers && allUsersNum.buyers}
					rate={null}
				/>
				<InfoStats
					title='sellers'
					number={allUsersNum.suppliers && allUsersNum.suppliers}
					rate={null}
				/>
				<InfoStats
					rate={null}
					title='truck drivers'
					number={allUsersNum.drivers && allUsersNum.drivers}
				/>
			</div>
			{/* Chartjs */}
			<LineChart />
			{/* Recent activities */}
			<div className='border-2 py-4 lg:py-6 px-3 rounded-xl border-gray-900 w-[95%] mx-auto'>
				<InputFilter action={'Recent Activities'} />

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
				<div className='font-bold '>Alex Shatov</div>
			</td>
			<td className='p-2 whitespace-nowrap'>
				<div className='text-left font-bold'>alexshatov@gmail.com</div>
			</td>
			<td className='p-2 whitespace-nowrap'>
				<div className=' text-left font-bold'>12/06/2023</div>
			</td>
			<td className='p-2 whitespace-nowrap'>
				<button className=' bg-red-bg text-red-text px-3 py-2 rounded-full font-medium'>
					Flagged
				</button>
			</td>
		</tr>
	);
};
