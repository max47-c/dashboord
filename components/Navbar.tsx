// components/Navbar.tsx
import React from 'react';
import Image from 'next/image';
import logo from '@/app/asset/Logo.jpeg'; // Adjust the path as necessary
import { User, UserCheck, UserCog, LogOut } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
  userRole: 'user' | 'donor' | 'admin'; // Prop for user role
  setUserRole: (role: 'user' | 'donor' | 'admin') => void; // Prop to update role
}

// Helper function to get the appropriate icon for a role
const getRoleIcon = (role: 'user' | 'donor' | 'admin') => {
  switch (role) {
    case 'user':
      return <User className="mr-4" />;
    case 'donor':
      return <UserCheck className="mr-4" />;
    case 'admin':
      return <UserCog className="mr-4" />;
    default:
      return <User className="mr-4" />;
  }
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, userRole, setUserRole }) => {
  // Implement logout functionality
  const handleLogout = () => {
    console.log('Logout clicked');
    setUserRole('user'); // Reset role on logout if needed
  };

  return (
    <nav className="bg-white shadow-md flex items-center justify-between p-4 fixed top-0 left-0 w-full z-50 lg:pl-64">
      <div className="flex items-center space-x-1">
        {/* Logo Image on the left */}
        <Image src={logo} alt="Logo" width={40} height={40} />
        <span className="ml-2 text-2xl font-bold text-red-700">ASS</span>

        {/* Hamburger menu for mobile view */}
        <button onClick={toggleSidebar} className="lg:hidden p-2 text-gray-700" aria-label="Open Sidebar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-700 bg-white px-4 py-2 rounded-md">
          {getRoleIcon(userRole)}
          <span className="capitalize mr-3">{userRole}</span>
          <button 
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800 transition-colors"
            aria-label="Logout"
          >
            <LogOut />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
