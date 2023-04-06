import React, { useState } from "react";
import {
  AiFillProject,
  AiOutlineDashboard,
  AiOutlineSearch,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Dispatch, SetStateAction } from "react";
import { FiXSquare } from "react-icons/fi";
import Link from "next/link";
import SideBar from "../SideBar/index";
import { useRouter } from "next/router";
import { IoIosAnalytics, IoIosContact } from "react-icons/io";
type Props = {
  open: Boolean;
  setOpen: Dispatch<SetStateAction<Boolean>>;
};

const index = (props: Props) => {
  const router = useRouter();
  const [displayMenuItems, setDisplayMenuItems] = useState<boolean>(false);
  return (
    <div
      className={`h-20 w-[98%] border-b border-slate-300 flex justify-between items-center mobileLg:px-4 ${
        displayMenuItems ? "px-0" : "px-2"
      } relative`}
    >
      <div className="flex justify-center items-center gap-2 px-2 mobileMd:px-5 py-3">
        <AiOutlineSearch className="text-2xl text-blue-500" />
        <input
          type="text"
          placeholder="Search for data User and docs"
          className="outline-none mobileMd:w-80 w-64 text-lg"
        />
      </div>
      <RxHamburgerMenu
        className="text-xl text-blue-600 duration-300 transition ease-in-out delay-300 cursor-pointer mobileLg:hidden block"
        onClick={() => setDisplayMenuItems(!displayMenuItems)}
      />

      <div
        className={` z-50 bg-light-white min-h-screen absolute top-0 right-[-8px] bottom-0  ${
          displayMenuItems
            ? "w-[14rem] transition-all ease-in duration-300"
            : "w-0 transition-all ease-in duration-300"
        }`}
      >
        <div className="w-full h-full fixed">
          <div
            className={`w-full
        duration-300  min-h-screen bg-light-white flex flex-col justify-start items-start gap-6 pl-5`}
          >
            <div className="flex justify-between gap-5 items-end">
              <FiXSquare
                className={` right-1 cursor-pointer top-5 text-3xl text-blue-600 ${
                  displayMenuItems ? "block" : "hidden"
                }`}
                onClick={() => setDisplayMenuItems(false)}
              />
              <h1
                className={` mobileLg:text-3xl text-2xl   pt-6 text-black w-4/5 `}
              >
                BT
                <span className="text-blue-600 p-2 right-[3.7rem] top-6">
                  FINANCE
                </span>
              </h1>
            </div>

            <hr className="border border-slate-300 w-11/12" />

            <div
              className={`flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-white ${
                router.pathname == "/dashboard" ? "bg-sky-300 text-white" : ""
              }`}
              onClick={() => setDisplayMenuItems(false)}
            >
              <Link href={`/dashboard`}>
                <div className="flex justify-start gap-4 items-center w-full">
                  <AiOutlineDashboard className="text-2xl text-blue-500" />
                  <h1 className={``}>Dashboard</h1>
                </div>
              </Link>
            </div>

            <div
              className={`text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-white ${
                router.pathname == "/analytics" ? "bg-sky-300 text-white" : ""
              }`}
              onClick={() => setDisplayMenuItems(false)}
            >
              <Link href={`/analytics`}>
                <div className="flex justify-start gap-4 items-center w-full">
                  <IoIosAnalytics className="text-2xl text-blue-500" />
                  <h1 className={``}>Analytics</h1>
                </div>
              </Link>
            </div>

            {/* </Link> */}
            <div
              className="flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-white"
              onClick={() => setDisplayMenuItems(false)}
            >
              <Link href={`/contact`}>
                <div className="flex justify-start gap-4 items-center w-full">
                  <IoIosContact className="text-2xl text-blue-500" />
                  <h1 className={``}>Contact</h1>
                </div>
              </Link>
            </div>
            <div
              className="flex justify-start gap-4 items-center text-xl hover:bg-sky-300 w-11/12 px-4 py-2 rounded-lg duration-300 hover:text-white"
              onClick={() => setDisplayMenuItems(false)}
            >
              <Link href={`/project`}>
                <div className="flex justify-start gap-4 items-center w-full">
                  <AiFillProject className="text-2xl text-blue-500" />
                  <h1 className={``}>Project</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
