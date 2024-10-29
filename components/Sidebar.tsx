// components/Sidebar.tsx
import React from 'react';
import Image from 'next/image';
import logo from '../asset/Logo.jpeg'; // Adjust the path as necessary
import UserItem from './Useritem';
import Link from 'next/link';
import {
  User,
  LayoutDashboard,
  HeartPulse,
  MapPinned,
  Syringe,
  Inbox,
  Bell,
  ScanEye,
  Settings,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  userRole: 'user' | 'donor' | 'admin'; // Role prop to conditionally render items
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, userRole }) => {
  const commonMenu = [
    { link: "/dash-board", icon: <LayoutDashboard size={20} />, text: "Dashboard" },
    { link: "/", icon: <User size={20} />, text: "Profile" },
    { link: "/", icon: <MapPinned size={20} />, text: "Map Search" },
    { link: "/", icon: <HeartPulse size={20} />, text: "Request Blood" },
    { link: "/", icon: <Syringe size={20} />, text: "Become a Donor" },
    { link: "/", icon: <Inbox size={20} />, text: "Inbox" },
    { link: "/", icon: <Bell size={20} />, text: "Notifications" }
  ];

  const adminMenu = [
    { link: "/", icon: <LayoutDashboard size={20} />, text: " Overview" },
    { link: "/", icon: <Inbox size={20} />, text: "Inbox" }, // Added inbox to admin menu
    { link: "/", icon: <Bell size={20} />, text: "Notifications" }, // Added notifications to admin menu
    { link: "/userManager", icon: <User size={20} />, text: "User Management" },
    { link: "/admin/bloodbanks", icon: <MapPinned size={20} />, text: "Blood Bank Management" },
    { link: "/admin/donors", icon: <Syringe size={20} />, text: "Donor Management" },
    { link: "/admin/reports", icon: <ScanEye size={20} />, text: "Reports" },
    { link: "/", icon: <User size={20} />, text: "Profile" }, // Added profile to admin menu
    { link: "/admin/settings", icon: <Settings size={20} />, text: "Settings" },

  ];

  // Menu list conditional on user role
  const menuList = [
    {
      group: userRole === 'admin' ? "Admin" : "General",
      items: userRole === 'admin' ? adminMenu : commonMenu, // Only show admin menu for admin users, otherwise show common menu
    },
  ];

  // Conditional gradient based on user role
  const sidebarGradient = userRole === 'admin'
    ? 'bg-gradient-to-bl from-purple-600 via-blue-600 to-black' // Example gradient for admin
    : 'bg-gradient-to-bl from-pink-600 via-red-600 to-black'; // Existing gradient for other roles

  return (
    <div className={`fixed top-0 left-0 h-full ${sidebarGradient} text-white transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:w-64`}>
      <div className="flex items-center p-4">
        <Image src={logo} alt="Logo" width={40} height={40} className="mr-2" /> 
        <span className="text-xl font-bold">Blood Bank</span>
      </div>

      <div className="p-4">
        <UserItem />
      </div>

      <div className="flex-grow overflow-y-auto">
        {menuList.map((menu, key) => (
          <ul key={key} className="flex flex-col gap-2 p-4 list-none">
            {menu.items.length > 0 && (
              <>
                <li className="font-semibold text-gray-300">{menu.group}</li>
                {menu.items.map((option, optionKey) => (
                  <li key={optionKey}>
                    <Link href={option.link} className="flex items-center gap-2 p-2 cursor-pointer hover:bg-red-600 rounded transition-colors duration-200">
                      {option.icon}
                      <span className="text-sm">{option.text}</span>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
