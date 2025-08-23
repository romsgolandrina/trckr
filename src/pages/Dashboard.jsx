import React from "react";

const Dashboard = () => {
  const Data = [
    { Quantity: "40", Label: "Applied" },
    { Quantity: "15", Label: "Interviewing" },
    { Quantity: "03", Label: "Offers" },
    { Quantity: "37", Label: "Rejected" },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll">
      <div className="w-full h-44 bg-[#222222] rounded-xl"></div>
      <div className="w-full h-[420px] flex flex-row gap-4">
        <div className="w-1/2 h-full flex flex-col gap-4">
          <div className="w-full h-full border-2 border-neutral-200 rounded-xl"></div>
          <div className="w-full h-full border-2 border-neutral-200 rounded-xl"></div>
        </div>
        <div className="w-1/2 h-full border-2 border-neutral-200 rounded-xl"></div>
      </div>
      <div className="w-full h-[600px] border-2 border-neutral-200 rounded-xl"></div>
    </div>
  );
};

export default Dashboard;
