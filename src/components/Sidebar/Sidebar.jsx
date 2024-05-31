import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar() {
  const [extended, setExtended] = useState(false);

  const handleClick = () => {
    setExtended(prev => !prev)
  }

  return (
    <div className="min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-5">
      {/* Top Part */}
      <div className="">
        <IoMenuOutline 
        className="block ml-1 cursor-pointer text-4xl" 
        onClick={handleClick}/>

        <div className="mt-10 inline-flex items-center gap-3 py-3 px-4 bg-[#e6eaf1] rounded-full text-gray-800 text-base cursor-pointer">
          <FaPlus className="text-2xl" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {/* Recent Chat */}
        {extended ? (
          <div className="flex flex-col">
            <p className="recent-title mt-8 mb-5">Recent</p>
            <div className="recent-entry flex items-center justify-center gap-2 p-2 px-10 rounded-3xl cursor-pointer text-[#282828] hover:bg-[#e2e6eb]">
              <FaRegMessage className="w-6" />
              <p className="mb-1">What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>

      {/* Bottom Part */}
      <div className="bottom flex flex-col">
        <div className="flex items-center gap-2 p-2 cursor-pointer text-[#282828] hover:bg-[#e2e6eb] rounded-3xl">
          <FaRegQuestionCircle className="text-2xl" />
          {extended ? <p className="mb-1">Help</p> : null}
        </div>

        <div className="flex items-center gap-2 p-2 cursor-pointer text-[#282828] hover:bg-[#e2e6eb] rounded-3xl">
          <IoTimerOutline className="text-2xl" />
          {extended ? <p className="mb-1">Activity</p> : null}
        </div>

        <div className="flex items-center gap-2 p-2 cursor-pointer text-[#282828] hover:bg-[#e2e6eb] rounded-3xl">
          <IoSettingsOutline className="text-2xl" />
          {extended ? <p className="mb-1">Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
