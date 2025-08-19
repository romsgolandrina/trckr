import React from "react";
import { Outlet } from "react-router-dom";
import { MdOutlineDashboard, MdBallot, MdBorderColor } from "react-icons/md";

const Layout = () => {
  const NavLinks = [
    { label: "Dashboard", path: "/dashboard", icon: MdOutlineDashboard },
    { label: "Application", path: "/application", icon: MdBallot },
    { label: "Resources", path: "/resources", icon: MdBorderColor },
  ];

  return (
    <div className="w-full min-h-screen bg-[#1B2122] flex flex-row transition-all duration-300">
      {/* Side Bar */}
      <aside className="w-[10%] min-h-screen bg-[#1B2122] py-6 flex flex-col items-center">
        <div className="min-h-[6%] flex flex-row items-center justify-left mb-16 ">
          <h1 className="text-left font-bold font-ubuntu text-4xl">trckr.</h1>
        </div>
        <div className="w-52 min-h-[94%] flex flex-col items-center ">
          <ul className="pl-7 w-full flex flex-col gap-4">
            {NavLinks.map(({ label, path, icon: Icon }) => (
              <a
                key={path}
                href={path}
                className="w-full gap-2 font-montserrat text-normal font-normal px-4 py-2 text-gray-200 cursor-pointer hover:text-[#1B2122] hover:bg-white rounded-bl-lg rounded-tl-lg flex items-center"
              >
                <Icon size={15} />
                <span className="">{label}</span>
              </a>
            ))}
          </ul>
        </div>
      </aside>
      {/* Children Pages */}
      <div className="w-[90%] min-h-screen bg-[#1B2122] flex flex-col py-6 pr-6 gap-6">
        <div className="w-full h-16 bg-white rounded-lg p-2 flex flex-row"></div>
        <div className="w-full h-full bg-white rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
