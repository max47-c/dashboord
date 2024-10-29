// components/UserModal.tsx
import React, { useState } from 'react';
import { User } from './User';

interface UserModalProps {
  user?: User;
  onSave: (user: User) => void;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ user, onSave, onClose }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [donorStatus, setDonorStatus] = useState(user?.donorStatus || 'Non-Donor');

  const handleSave = () => {
    const newUser: User = {
      name,
      email,
      subscriptionDate: user?.subscriptionDate || new Date().toISOString().split('T')[0],
      status: user?.status || 'Active',
      donorStatus,
    };
    onSave(newUser);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">{user ? 'Edit User' : 'Add User'}</h2>
        <input className="w-full p-2 mb-2 border rounded" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full p-2 mb-2 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <select className="w-full p-2 mb-4 border rounded" value={donorStatus} onChange={(e) => setDonorStatus(e.target.value)}>
          <option value="Donor">Donor</option>
          <option value="Non-Donor">Non-Donor</option>
        </select>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
