import React from "react";
import Goals from "../components/Dashboard/Goals";
import JobsApplied from "../components/Dashboard/JobsApplied";
import LineChart from "../components/Dashboard/lineChart";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      {/* First Div */}
      <div className="w-full h-[40%] flex flex-row gap-3">
        {/* Goals */}
        <div className="w-[40%] h-full border-1 border-neutral-200 rounded-lg flex items-center justify-center p-8">
          <Goals />
        </div>
        {/* Jobs Applied */}
        <div className="w-[60%] h-full border-1 border-neutral-200 rounded-lg p-8">
          <JobsApplied />
        </div>
      </div>
      {/* Second Div */}
      <div className="w-full h-[60%] flex flex-row rounded-lg gap-3">
        <div className="w-[55%] h-full border-1 border-neutral-200 rounded-lg p-6">
          <LineChart />
        </div>
        <div className="w-[45%] h-full border-1 border-neutral-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Dashboard;
