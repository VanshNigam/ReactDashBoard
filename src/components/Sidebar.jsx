import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-4 pl-4 py-2 rounded-xl text-white text-md m-2 transition-all duration-300 shadow-md';
  const normalLink = 'flex items-center gap-4 pl-4 py-2 rounded-xl text-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 m-2 transition-all duration-300';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          {/* Top Brand Section */}
          <div className="flex justify-between items-center mt-6">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="flex items-center gap-3 ml-3 text-2xl font-bold tracking-tight dark:text-white text-slate-900 hover:scale-105 transition-all"
            >
              <img src="https://grupoportfolio.com.br/portfolio-tech/wp-content/uploads/sites/2/2020/09/LOGO-TASK-MANAGER.png" alt="description" />
            </Link>
            <TooltipComponent content="Close" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(false)}
                style={{ color: currentColor }}
                className="text-2xl rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-600 mt-2 mr-3 md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          {/* Navigation Links */}
          <div className="mt-10 px-2">
            {links.map((item) => (
              <div key={item.title} className="mb-6">
                <p className="text-gray-500 dark:text-gray-400 uppercase text-xs px-3 mb-2 tracking-wider">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="capitalize font-medium">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
