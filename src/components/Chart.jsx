import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Link } from 'react-router-dom';
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

const dummyData = [
  { month: '2022-01', totalSales: 10 },
  { month: '2022-02', totalSales: 40 },
  { month: '2022-03', totalSales: 50 },
  { month: '2022-04', totalSales: 15 },
  // Add more dummy data entries as needed
];

const LineChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const filteredData = dummyData.map(sale => ({
      x: sale.month,
      y: sale.totalSales
    }));
    setChartData(filteredData);
  }, []);

  const options = {
    plugins: {
      legend: false
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: value => value + 'k'
        },
        border: {
          dash: [10]
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          family: 'sans-serif',
          size: '16px',
          stepSize: 2
        }
      }
    }
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
							<ul className='block text-right text-gray-400'>
								<li>
									<Link to=''
										href='#'
										className='block px-3 py-2 hover:bg-gray-200'
									>
										Month
									</Link>
								</li>
								<li>
									<Link to=''
										href='#'
										className='block px-3 py-2 hover:bg-gray-200'
									>
										Day
									</Link>
								</li>
								<li>
									<Link to=''
										href='#'
										className='block px-3 py-2 hover:bg-gray-200'
									>
										Week
									</Link>
								</li>
							</ul>
						</div>
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
                backgroundColor: 'rgba(255, 126, 32, 0.2)'
              }
            ]
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
