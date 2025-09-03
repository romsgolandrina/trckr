import React from "react";
import { IoMdAdd, IoIosFunnel } from "react-icons/io";
import { LuChevronUp } from "react-icons/lu";

const ReminderNotes = () => {
  const dataReminders = [
    {
      Label: "Front-end Developer",
      Details: "lorem ipsum",
      Deadline: "2 days ago",
    },
    {
      Label: "Full Stack Developer",
      Details: "lorem ipsum",
      Deadline: "1 week ago",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full flex flex-row justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#222222]">Reminder</h1>
        </div>
        <div className="flex flex-row gap-2 text-[#222222]">
          <button className="p-2 border-1 border-neutral-200 rounded-sm cursor-pointer hover:bg-[#222222] hover:text-white">
            <IoIosFunnel size={20} />
          </button>
          <button className="p-2 border-1 border-neutral-200 rounded-sm cursor-pointer hover:bg-[#222222] hover:text-white">
            <IoMdAdd size={20} />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {dataReminders.map(({ Label, Deadline }, index) => (
          <div
            key={`${Label}-${index}`}
            className="relative w-full h-16 flex bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Red accent bar on the left */}
            <div className="w-2 bg-red-500 flex-shrink-0"></div>

            {/* Main content area */}
            <div className="flex-1 flex items-center justify-between px-4 py-3">
              <div className="flex-1">
                <p className="text-gray-800 font-medium text-sm leading-tight">
                  {Label}
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-sm font-medium">{Deadline}</span>
                <LuChevronUp className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReminderNotes;
