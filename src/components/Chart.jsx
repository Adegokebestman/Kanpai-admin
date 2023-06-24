import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

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
    </>
  );
};

export default LineChart;
