// components/UserManager.tsx
"use client"
import React, { useState } from 'react';
import { User } from '@/components/User';
import UserModal from '@/components/UserModel';
import DeleteConfirmation from '@/components/DeleteConfirmation';

const initialUsers: User[] = [
  { name: 'John Doe', email: 'johndoe@example.com', subscriptionDate: '2024-10-20', status: 'Active', donorStatus: 'Donor' },
  { name: 'Jane Smith', email: 'janesmith@example.com', subscriptionDate: '2024-10-19', status: 'Inactive', donorStatus: 'Non-Donor' },
  { name: 'Emily Johnson', email: 'emilyj@example.com', subscriptionDate: '2024-10-17', status: 'Active', donorStatus: 'Donor' },
  { name: 'Michael Brown', email: 'michaelb@example.com', subscriptionDate: '2024-10-16', status: 'Inactive', donorStatus: 'Non-Donor' },
];

const UserManager: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleStatus = (email: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === email ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
      )
    );
  };

  const addUser = (user: User) => {
    setUsers([...users, user]);
    setIsAddModalOpen(false);
  };

  const updateUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.email === updatedUser.email ? updatedUser : user))
    );
    setIsEditModalOpen(false);
  };

  const deleteUser = () => {
    setUsers(users.filter((user) => user !== selectedUser));
    setIsDeleteConfirmOpen(false);
  };

  return (
    <div className="flex flex-col h-screen pt-[80px] pl-[20px] pr-[20px]">
      <div className="flex-1 p-4 ml-0 lg:ml-64 transition-all duration-300">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">User Manager</h1>
        </header>
    </div>
  

      <div className="mb-4 flex justify-between">
        <input
          type="text"
          placeholder="Search users..."
          className="w-3/4 p-2 border rounded-lg shadow-sm focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-sm"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add User
        </button>
      </div>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="py-3 px-4">Profile</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Subscription Date</th>
            <th className="py-3 px-4">Donor Status</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">
                  {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
              </td>
              <td className="py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">{user.email}</td>
              <td className="py-3 px-4">{user.subscriptionDate}</td>
              <td className="py-3 px-4">
                <span className={`w-3 h-3 rounded-full ${user.donorStatus === 'Donor' ? 'bg-green-500' : 'bg-red-500'} mr-1`}></span>
              </td>
              <td className="py-3 px-4">
                <span
                  className={`px-2 py-1 rounded-full text-white text-sm ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}
                >
                  {user.status}
                </span>
              </td>
              <td className="py-3 px-4">
                <button
                  onClick={() => { setSelectedUser(user); setIsEditModalOpen(true); }}
                  className="text-white bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-lg mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => { setSelectedUser(user); setIsDeleteConfirmOpen(true); }}
                  className="text-white bg-red-500 hover:bg-red-600 py-1 px-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAddModalOpen && (
        <UserModal
          onSave={addUser}
          onClose={() => setIsAddModalOpen(false)}
        />
      )}
      {isEditModalOpen && selectedUser && (
        <UserModal
          user={selectedUser}
          onSave={updateUser}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
      {isDeleteConfirmOpen && selectedUser && (
        <DeleteConfirmation
          user={selectedUser}
          onConfirm={deleteUser}
          onCancel={() => setIsDeleteConfirmOpen(false)}
        />
      )}
    </div>
  );
};

export default UserManager;
