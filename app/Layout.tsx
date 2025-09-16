
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const activeClass = "bg-cyan-500 text-black shadow-lg shadow-cyan-500/50";
    const inactiveClass = "bg-gray-800 hover:bg-gray-700";

    return (
        <NavLink
            to={to}
            className={({ isActive }) => 
                `font-orbitron uppercase tracking-widest px-6 py-3 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 ${isActive ? activeClass : inactiveClass}`
            }
        >
            {children}
        </NavLink>
    );
};

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow p-4 md:p-6">
        <Outlet />
      </main>
      <nav className="flex-shrink-0 bg-black/50 backdrop-blur-sm border-t border-cyan-500/30 p-4">
        <div className="container mx-auto flex justify-center items-center space-x-4">
          <NavItem to="/">Dashboard</NavItem>
          <NavItem to="/history">History</NavItem>
          <NavItem to="/settings">Settings</NavItem>
        </div>
      </nav>
    </div>
  );
};
