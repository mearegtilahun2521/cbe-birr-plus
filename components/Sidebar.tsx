
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ICONS } from '../constants';

const Sidebar: React.FC = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <ICONS.Dashboard /> },
    { name: 'Transfer', path: '/transfer', icon: <ICONS.Transfer /> },
    { name: 'Payments', path: '/payments', icon: <ICONS.Payments /> },
    { name: 'Assistant', path: '/ai', icon: <ICONS.AI /> },
  ];

  return (
    <aside className="fixed bottom-0 left-0 w-full md:relative md:w-64 bg-cbe-purple text-white md:h-screen z-50">
      <div className="hidden md:flex flex-col p-6 items-center">
        <h1 className="text-2xl font-bold text-cbe-gold italic">CBE Birr+</h1>
        <p className="text-xs text-purple-200 mt-1">The Bank You Can Rely On</p>
      </div>
      
      <nav className="flex md:flex-col justify-around md:justify-start md:mt-10">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              flex flex-col md:flex-row items-center p-4 md:px-6 transition-all duration-200
              ${isActive ? 'bg-white/10 border-t-4 md:border-t-0 md:border-l-4 border-cbe-gold text-cbe-gold' : 'text-gray-300 hover:text-white'}
            `}
          >
            <span className="md:mr-3">{item.icon}</span>
            <span className="text-[10px] md:text-sm font-medium uppercase tracking-wider">{item.name}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="hidden md:block absolute bottom-10 px-6 w-full">
        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
          <p className="text-xs text-purple-200 mb-2">Need Help?</p>
          <p className="text-sm font-medium">Call 951</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
