import React from "react";
import { IoMdAdd } from "react-icons/io";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { FcSearch } from "react-icons/fc";

const AddFilterSearch = () => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-between">
      <div className="w-1/2 flex flex-row gap-2 items-center">
        <button className="h-10 py-2 px-4 bg-orange-500 text-white rounded-lg flex items-center gap-2 text-sm font-semibold border-0 hover:bg-[#222222] cursor-pointer">
          <IoMdAdd size={20} />
          Add New Application
        </button>
        <button className="h-10 py-2 px-4 text-white rounded-lg flex items-center gap-2 text-sm bg-blue-500 font-semibold hover:bg-[#222222] cursor-pointer">
          <BsFileEarmarkBarGraph size={20} />
          Export Data
        </button>
      </div>
      <div className="w-1/2 h-full flex items-center justify-end">
        <label className="input bg-white border-1 border-neutral-300 h-10">
          <FcSearch size={20} />
          <input
            type="search"
            required
            placeholder="Search"
            className="bg-white"
          />
        </label>
      </div>
    </div>
  );
};

export default AddFilterSearch;
