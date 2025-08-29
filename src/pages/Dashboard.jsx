import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll">
      <div className="w-full h-56 bg-[#222222] rounded-lg flex flex-col gap-2 py-6 px-6">
        <h1 className="text-lg font-semibold font-montserrat">Jobs Applied</h1>
        <div className="w-full h-full flex flex-row items-center font-montserrat">
          <div className="w-full h-full flex flex-row gap-2 items-center justify-center">
            <h1 className="text-6xl">9</h1>
            <h1 className="text-sm">Today</h1>
          </div>
          <div className=" w-full h-full border-l-2 border-neutral-700 flex flex-row gap-2 items-center justify-center">
            <h1 className="text-6xl">202</h1>
            <h1 className="text-sm">This Week</h1>
          </div>
          <div className=" w-full h-full border-l-2 border-neutral-700 flex flex-row gap-2 items-center justify-center">
            <h1 className="text-6xl">500</h1>
            <h1 className="text-sm">This Month</h1>
          </div>
          <div className=" w-full h-full border-l-2 border-neutral-700 flex flex-row gap-2 items-center justify-center">
            <h1 className="text-6xl">3,201</h1>
            <h1 className="text-sm">This Year</h1>
          </div>
          <div className=" w-full h-full border-l-2 border-neutral-700 flex flex-row gap-2 items-center justify-center">
            <h1 className="text-6xl">5,201</h1>
            <h1 className="text-sm">Total</h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[420px] flex flex-row gap-4">
        <div className="w-1/2 h-full flex flex-col gap-4">
          <div className="w-full h-full border-1 border-neutral-200 rounded-lg"></div>
          <div className="w-full h-full border-1 border-neutral-200 rounded-lg"></div>
        </div>
        <div className="w-1/2 h-full border-1 border-neutral-200 rounded-lg"></div>
      </div>
      <div className="w-full h-[600px] border-1 border-neutral-200 rounded-lg"></div>
    </div>
  );
};

export default Dashboard;
