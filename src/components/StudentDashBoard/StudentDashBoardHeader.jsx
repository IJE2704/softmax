"use client";
import { Context } from "@/provider/ContextProvider";
import React, { useContext } from "react";
import { FaRegUser } from "react-icons/fa";

const StudentDashBoardHeader = () => {
  const { selectedMenu, user, student } = useContext(Context);
  console.log(student);

  return (
    <div className="w-full h-full bg-slate-100 shadow-xl rounded-bl-lg flex justify-between items-center px-5">
      <div>
        <h1 className="text-xl lg:text-4xl font-bold">{selectedMenu}</h1>
      </div>
      <div>
        <input
          type="text"
          className="w-full border border-gray-300 focus:outline-none focus:border-[#20B486] rounded-md py-2 px-4 custom-shadow transition duration-300 ease-in-out hover:border-[#20B486]"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <FaRegUser size={40}></FaRegUser>
        <h1>{student?.name}</h1>
      </div>
    </div>
  );
};

export default StudentDashBoardHeader;
