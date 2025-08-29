import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-y-auto gap-3">
      {/* First Div */}
      <div className="w-full h-[40%] flex flex-row gap-3">
        {/* Goals */}
        <div className="w-[40%] h-full border-1 border-neutral-200 rounded-lg flex flex-row items-center justify-center p-8">
          <div className="w-[50%] h-full flex items-center justify-center">
            {/* Radial Progress */}
            <div class="relative size-50">
              <svg
                class="size-full -rotate-90"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  class="stroke-current text-neutral-200"
                  stroke-width="2"
                ></circle>
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  class="stroke-current text-[#222222]"
                  stroke-width="2"
                  stroke-dasharray="100"
                  stroke-dashoffset="75"
                  stroke-linecap="round"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-[#222222]">2/10</span>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full flex items-center justify-center ">
            <div className="flex flex-col items-start gap-8 py-6 px-4 rounded-lg text-[#222222]">
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold">Goal</h1>
                <h1 className="font-normal">
                  It's good to have a daily goals!
                </h1>
              </div>
              <button className="bg-neutral-200 px-2 py-2 text-sm font-semibold">
                Set my goals
              </button>
            </div>
          </div>
        </div>
        {/* Jobs Applied */}
        <div className="w-[60%] h-full border-1 border-neutral-200 rounded-lg"></div>
      </div>
      {/* Second Div */}
      <div className="w-full h-[60%] border-1 border-neutral-200 rounded-lg"></div>
    </div>
  );
};

export default Dashboard;
