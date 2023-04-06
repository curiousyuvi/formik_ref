import React from "react";

type Props = {};

const LoginBanner = (props: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 bg-light-blue w-1/2 h-full ">
        <h1 className="text-dark-blue text-7xl tracking-wide font-light ">
          <span className="pr-2 font-bold ">BT</span>
          FINANCE
        </h1>
        <p className="text-[#0B2447]">Leading you to a better Future</p>
      </div>
    </>
  );
};

export default LoginBanner;
