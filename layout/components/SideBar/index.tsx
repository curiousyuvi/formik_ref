import React, { Dispatch, SetStateAction } from "react";
import { BiChevronLeftCircle } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoIosAnalytics } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  open: Boolean;
  setOpen: Dispatch<SetStateAction<Boolean>>;
};

const index = ({ open, setOpen }: Props) => {
  const router = useRouter();
  return (
    <div className={`fixed tabletMd:w-60 w-24 hidden mobileLg:block`}>
      <div
        className={`w-full
        duration-300  min-h-screen bg-light-white relative flex flex-col justify-start items-start gap-6 pl-5`}
      >
        <h1
          className={` mobileLg:text-3xl text-2xl pl-4  pt-6 text-blue-500 mobileLg:text-black w-full relative`}
        >
          BT
          <span className="text-blue-600 tabletMd:block hidden absolute right-10 top-6">
            FINANCE
          </span>
        </h1>

        <hr className="border border-slate-300 w-11/12" />

        <div
          className={` text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-white ${
            router.pathname == "/dashboard" ? "bg-sky-300 text-white" : ""
          }`}
        >
          <Link href={`/dashboard`}>
            <div className="flex justify-start gap-4 items-center w-full">
              <AiOutlineDashboard className="text-2xl text-blue-500" />
              <h1 className={`hidden tabletMd:block`}>DashBoard</h1>
            </div>
          </Link>
        </div>

        <div
          className={`flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-white ${
            router.pathname == "/analytics" ? "bg-sky-300 text-white" : ""
          }`}
        >
          <Link href={`/analytics`}>
            <div className="flex justify-start gap-4 items-center w-full">
              <IoIosAnalytics className="text-2xl text-blue-500" />
              <h1 className={`hidden tabletMd:block`}>Analytics</h1>
            </div>
          </Link>
        </div>

        <div
          className={`flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-white  ${
            router.pathname == "/contact" ? "bg-sky-300 text-white" : ""
          }`}
        >
          <Link href={`/contact`}>
            <div className="flex justify-start gap-4 items-center w-full">
              <IoIosContact className="text-2xl text-blue-500" />
              <h1 className={`hidden tabletMd:block`}>Contact</h1>
            </div>
          </Link>
        </div>
        <div
          className={`flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-white  ${
            router.pathname == "/project" ? "bg-sky-300 text-white" : ""
          }`}
        >
          <Link href={`/project`}>
            <div className="flex justify-start gap-4 items-center w-full">
              <AiOutlineDashboard className="text-2xl text-blue-500" />
              <h1 className={`hidden tabletMd:block`}>Project</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
