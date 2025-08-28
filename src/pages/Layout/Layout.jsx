import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  MdDashboard,
  MdBallot,
  MdBorderColor,
  MdOutlineBrightness5,
  MdOutlineBrightness2,
} from "react-icons/md";
import { useUser } from "../../context/UserInput";
import { getGreeting } from "../../utils/getGreeting";

const Layout = () => {
  const NavLinks = [
    { label: "Dashboard", path: "/dashboard", logo: MdDashboard },
    { label: "Application", path: "/application", logo: MdBallot },
    { label: "Resources", path: "/resources", logo: MdBorderColor },
  ];

  const { userData } = useUser();

  const [greeting, setGreeting] = useState(getGreeting());

  useEffect(() => {
    // checks the greeting every second
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 1000); //1,000 = 1 Second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen transition-all duration-300 bg-[#fefffe]">
      <div className="h-full flex flex-row">
        {/* Sidebar */}
        <div className="w-[290px] h-full flex flex-col py-6 px-4 justify-between overflow-hidden">
          <div className="flex flex-col">
            {/* Logo */}
            <h1 className="text-5xl text-center text-[#222222] font-ubuntu font-bold">
              trckr.
            </h1>

            {/* Divider */}
            <div className="my-10 border-t-2 border-neutral-100" />

            {/* Navigation Links */}
            <ul className="text-sm text-[#222222] flex flex-col gap-4">
              {NavLinks.map(({ label, path, logo: Logo }) => (
                <a
                  key={path}
                  href={path}
                  className="w-full gap-3 font-montserrat text-normal font-semibold px-4 py-2 text-[#222222] hover:text-white hover:bg-[#222222] rounded-lg cursor-pointer flex items-center"
                >
                  <Logo size={25} />
                  <span className="">{label}</span>
                </a>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            {/* Divider */}
            <div className="my-8 border-t-2 border-neutral-100" />

            <div className="flex flex-row items-center justify-between px-4">
              <div className="flex flex-col text-sm text-[#222222] font-montserrat">
                {/* Users Name and desired Position */}
                <div
                  className="tooltip"
                  data-tip={`${userData.firstName} ${userData.lastName}`}
                >
                  <h1 className="text-[#222222] truncate w-40 cursor-pointer">
                    {userData.firstName}&nbsp;
                    {userData.lastName}
                  </h1>
                </div>
                <p className="text-neutral-400">{userData.position}</p>
              </div>
              {/* Dark Mode Switch */}
              <label className="swap swap-rotate text-[#222222] rounded-lg p-2 border-1 border-neutral-200 hover:bg-neutral-200">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* sun icon */}
                <MdOutlineBrightness5 size={20} className="swap-on" />

                {/* moon icon */}
                <MdOutlineBrightness2 size={20} className="swap-off" />
              </label>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full flex flex-col bg-[#fafbfb] py-6 px-8 gap-4 overflow-auto">
          <div className="font-montserrat">
            <h1 className="text-4xl text-[#222222] font-bold">
              {greeting}, {userData.firstName}👋
            </h1>
            <p className="text-lg text-neutral-400">
              Welcome to your jobs dashboard
            </p>
          </div>
          <div className="w-full h-full">
            <Outlet />
          </div>
          <h1 className="text-center text-sm text-neutral-400 font-montserrat">
            ©2025 Jhon Rommel Golandrina. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
