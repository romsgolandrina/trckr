import React from "react";
import { IoMdAdd } from "react-icons/io";
import { GoGoal } from "react-icons/go";

const Goals = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <div className="w-[50%] h-full flex flex-col items-center justify-center gap-3">
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
        <div className="">
          <h1 className="text-base text-neutral-400">20% completed</h1>
        </div>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center ">
        <div className="flex flex-col items-start gap-6 py-6 px-4 rounded-lg text-[#222222]">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold flex items-center gap-1">
              <GoGoal />
              Goal
            </h1>
            <h1 className="text-base text-[#222222] font-normal">
              You've completed 20% of today's goal. Keep going — you're on
              track! 🚀
            </h1>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 text-base font-semibold flex items-center gap-2 rounded-sm cursor-pointer hover:bg-[#222222] hover:text-white">
            <IoMdAdd size={20} />
            Add goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
