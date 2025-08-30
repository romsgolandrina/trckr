import React from "react";
import Goals from "../components/Goals";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto gap-3">
      {/* First Div */}
      <div className="w-full h-[40%] flex flex-row gap-3">
        {/* Goals */}
        <div className="w-[40%] h-full border-1 border-neutral-200 rounded-lg flex items-center justify-center p-8">
          <Goals />
        </div>
        {/* Jobs Applied */}
        <div className="w-[60%] h-full border-1 border-neutral-200 rounded-lg">
          
        </div>
      </div>
      {/* Second Div */}
      <div className="w-full h-[60%] border-1 border-neutral-200 rounded-lg"></div>
    </div>
  );
};

export default Dashboard;
