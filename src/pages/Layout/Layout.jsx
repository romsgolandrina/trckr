import React from "react";
import { Outlet } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { FaPencilRuler } from "react-icons/fa";

const Layout = () => {
  const NavLinks = [
    { label: "Dashboard", path: "/dashboard", icon: MdOutlineSpaceDashboard },
    { label: "Application", path: "/application", icon: IoIosPaper },
    { label: "Resources", path: "/resources", icon: FaPencilRuler },
  ];

  return (
    <div className="w-full min-h-screen bg-[#1B2122] flex flex-row transition-all duration-300">
      <aside className="w-48 min-h-screen bg-[#1B2122] p-4 flex flex-col">
        <h1 className="text-left font-bold font-ubuntu text-4xl mb-10 pl-2">
          trckr.
        </h1>
        <ul className="flex flex-col">
          {NavLinks.map(({ label, path, icon: Icon }) => (
            <a
              key={path}
              href={path}
              className="w-full gap-4 font-montserrat text-sm font-normal px-2 py-2 text-gray-200 cursor-pointer hover:text-white hover:bg-[#343f41] rounded-lg flex items-center"
            >
              <Icon size={10} className="ml-2" />
              <span>{label}</span>
            </a>
          ))}
        </ul>
      </aside>
      <div className="w-full bg-[#1B2122] pt-6 pb-4 pr-4">
        <main className="w-full h-full rounded-2xl bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
