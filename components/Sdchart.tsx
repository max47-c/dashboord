// components/MonthlySubscribersDonorsChart.tsx
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlySubscribersDonorsChart: React.FC = () => {
  const [year, setYear] = useState('2024');
  const [subscriberType, setSubscriberType] = useState('All');
  const [dataView, setDataView] = useState('both');

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Subscribers',
        data: [30, 20, 50, 70, 45, 60, 80, 55, 70, 90, 100, 95],
        backgroundColor: 'rgba(192, 57, 43, 0.6)',
        borderColor: 'rgba(192, 57, 43, 1)',
        borderWidth: 1,
      },
      {
        label: 'Donors',
        data: [10, 15, 20, 25, 35, 40, 60, 65, 75, 85, 90, 80],
        backgroundColor: 'rgba(39, 174, 96, 0.6)',
        borderColor: 'rgba(39, 174, 96, 1)',
        borderWidth: 1,
      },
    ],
  };

  const applyFilters = () => {
    // Update chart data based on filters
    console.log(`Year: ${year}, Subscriber Type: ${subscriberType}, Data View: ${dataView}`);
  };

  return (
    <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Total Subscribers and Donors Per Month</h2>

      {/* Filter Section */}
      <div className="flex space-x-4 mb-4">
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="all">All Time</option>
        </select>
        <select
          value={subscriberType}
          onChange={(e) => setSubscriberType(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="All">All</option>
          <option value="Guest">Guest</option>
          <option value="Registered">Registered</option>
        </select>
        <select
          value={dataView}
          onChange={(e) => setDataView(e.target.value)}
          className="border border-gray-300 rounded p-2"
        >
          <option value="subscribers">Subscribers</option>
          <option value="donors">Donors</option>
          <option value="both">Both</option>
        </select>
        <button
          onClick={applyFilters}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500"
        >
          Apply Filters
        </button>
      </div>

      {/* Bar Chart */}
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default MonthlySubscribersDonorsChart;
