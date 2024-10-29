// components/Dashboard.tsx
"use client";
import Sdchart from '@/components/Sdchart';
import React, { useState } from 'react';


const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  interface User {
    name: string;
    email: string;
    subscriptionDate: string;
    status: 'Active' | 'Inactive';
    donorStatus: 'Donor' | 'Non-Donor';
}

const users: User[] = [
    { name: 'John Doe', email: 'johndoe@example.com', subscriptionDate: '2024-10-20', status: 'Active', donorStatus: 'Donor' },
    { name: 'Jane Smith', email: 'janesmith@example.com', subscriptionDate: '2024-10-19', status: 'Inactive', donorStatus: 'Non-Donor' },
    { name: 'Maxime Duclos', email: 'maxime@example.com', subscriptionDate: '2024-10-18', status: 'Active', donorStatus: 'Donor' },
    { name: 'Emily Johnson', email: 'emilyj@example.com', subscriptionDate: '2024-10-17', status: 'Active', donorStatus: 'Donor' },
    { name: 'Michael Brown', email: 'michaelb@example.com', subscriptionDate: '2024-10-16', status: 'Inactive', donorStatus: 'Non-Donor' },
];


  const userStatsData = {
    labels: ['Users', 'Donors'],
    datasets: [
      {
        data: [300, 150],
        backgroundColor: ['rgba(231, 76, 60, 0.2)', 'rgba(231, 76, 60, 0.2)'],
        borderColor: ['rgba(231, 76, 60, 1)', 'rgba(231, 76, 60, 1)'],
        borderWidth: 1,
      },
    ],
  };

 

  return (
    <div className="flex flex-col h-screen pt-[80px] pl-[20px] pr-[20px]">
      <div className="flex-1 p-4 ml-0 lg:ml-64 transition-all duration-300">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">DASHBOARD</h1>
        </header>

        {/* App Statistics Card */}
        <div className="flex flex-col items-center p-5 bg-gray-100 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {/* Total Users Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
          <div className="text-red-600 text-4xl mr-4">👥</div>
          <div className="flex-grow">
            <p className="text-lg font-bold">Total Users</p>
            <p className="text-2xl font-semibold text-gray-800">300</p>
          </div>
        </div>

        {/* Total Donors Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
          <div className="text-red-600 text-4xl mr-4">❤️</div>
          <div className="flex-grow">
            <p className="text-lg font-bold">Total Donors</p>
            <p className="text-2xl font-semibold text-gray-800">150</p>
          </div>
        </div>

        {/* Total Blood Banks Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
          <div className="text-red-600 text-4xl mr-4">🏥</div>
          <div className="flex-grow">
            <p className="text-lg font-bold">Total Blood Banks</p>
            <p className="text-2xl font-semibold text-gray-800">50</p>
          </div>
        </div>

        {/* Pending Blood Requests from Subscribers Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
          <div className="text-red-600 text-4xl mr-4">⏳</div>
          <div className="flex-grow">
            <p className="text-lg font-bold">Pending Blood Requests (Subscribers)</p>
            <p className="text-2xl font-semibold text-gray-800">15</p>
          </div>
        </div>

        {/* Pending Blood Requests from Guests Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
          <div className="text-red-600 text-4xl mr-4">⏳</div>
          <div className="flex-grow">
            <p className="text-lg font-bold">Pending Blood Requests (Guests)</p>
            <p className="text-2xl font-semibold text-gray-800">10</p>
          </div>
        </div>

        {/* Total Guests Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
          <div className="text-red-600 text-4xl mr-4">👤</div>
          <div className="flex-grow">
            <p className="text-lg font-bold">Total Guests</p>
            <p className="text-2xl font-semibold text-gray-800">200</p>
          </div>
        </div>
        
        {/* Donor Appointments Card */}
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
          <div className="text-red-600 text-4xl mr-4">📅</div>
          <div className="flex-grow">
            <p className="text-lg font-bold">Donor Appointments</p>
            <p className="text-2xl font-semibold text-gray-800">10</p>
          </div>
        </div>
      </div>
    </div>

    {/* Recently Subscribed Users Card */}
        <div className="container mx-auto p-6">
            <h1 className="text-3xl text-center text-red-600 mb-6">Recently Subscribed Users</h1>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-red-600 text-white">
                        <th className="py-3 px-4">Profile</th>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Subscription Date</th>
                        <th className="py-3 px-4">Donor Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                            <td className="py-3 px-4">
                                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">
                                    {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                                </div>
                            </td>
                            <td className="py-3 px-4">{user.name}</td>
                            <td className="py-3 px-4">{user.email}</td>
                            <td className="py-3 px-4">{user.subscriptionDate}</td>
                            <td className="py-3 px-4 flex items-center">
                                <span className={`w-3 h-3 rounded-full ${user.donorStatus === 'Donor' ? 'bg-green-500' : 'bg-red-500'} mr-1`}></span>
                                {/* No text closer to the dot */}
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <a href="/manage_user" className="block text-center mt-6 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-500">
                View More
            </a>
        </div>
        {/* <Sdchart/> */}
        
      </div>
    </div>
  );
};

export default Dashboard;
