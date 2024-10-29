// components/DeleteConfirmation.tsx
import React from 'react';
import { User } from './User';

interface DeleteConfirmationProps {
  user: User;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ user, onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
      <h2 className="text-lg font-bold mb-4">Delete User</h2>
      <p className="mb-4">Are you sure you want to delete <strong>{user.name}</strong>?</p>
      <div className="flex justify-end space-x-2">
        <button onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        <button onClick={onConfirm} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
  </div>
);

export default DeleteConfirmation;
