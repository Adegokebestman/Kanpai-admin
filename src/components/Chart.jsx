/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';
import {
	getMonthlyTransactions,
	getWeeklyTransactions,
	getYearlyTransactions,
} from '../lib/apiEndPoints';
import { useContext } from 'react';
import OtherContext from '../context/OtherContext';

ChartJS.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const LineChart = () => {
	const { chartData, setChartData } = useContext(OtherContext);
	const [period, setPeriod] = useState('day');

	useEffect(() => {
		const fetch = async () => {
			const { sales } =
				period == 'day'
					? await getWeeklyTransactions()
					: period == 'month'
					? await getMonthlyTransactions()
					: period == 'year' && (await getYearlyTransactions());
			const filteredData = sales.map((sale) => ({
				x:
					period == 'day'
						? sale.day
						: period == 'month'
						? sale.month
						: period == 'year' && sale.year,
				y: sale.totalSales,
			}));

			setChartData(filteredData);
		};
		fetch();
	}, [period]);

	const options = {
		plugins: {
			legend: false,
		},
		scales: {
			y: {
				min: 0,
				max: 100,
				ticks: {
					callback: (value) => value + 'k',
				},
				border: {
					dash: [10],
				},
			},
			x: {
				grid: {
					display: false,
				},
				ticks: {
					family: 'sans-serif',
					size: '16px',
					stepSize: 2,
				},
			},
		},
	};

	return (
		<>
			<div className='flex items-center mb-6 -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100'>
				{/* Buttons for selecting data */}
			</div>

			<div className='border-2 rounded-xl border-gray-900 mx-auto w-[95%]'>
				<div className='flex justify-between items-center p-4 sm:p-10'>
					<p className='text-xl font-medium'>Analytics</p>

					<div className='relative bg-gray-600 p-2 '>
						<select
							id='duration'
							onChange={(e) => setPeriod(e.target.value)}
						>
							<option defaultValue='day' value={'day'}>
								Weekly
							</option>
							<option value='month'>Monthly</option>
							<option value='year'>Yearly</option>
						</select>
					</div>
				</div>

				<div className=' w-full md:h-[500px] flex md:justify-center justify-end mb-4'>
					{chartData ? (
						<Line
							options={options}
							data={{
								datasets: [
									{
										label: 'Delivery (Entrega)',
										data: chartData,
										borderColor: '#FF7E20',
										pointBorderWidth: 0,
										pointBorderColor: 'transparent',
										tension: 0.4,
										fill: true,
										backgroundColor:
											'rgba(255, 126, 32, 0.2)',
									},
								],
							}}
						/>
					) : (
						<p>Loading chart data...</p>
					)}
				</div>
			</div>
		</>
	);
};

export default LineChart;
