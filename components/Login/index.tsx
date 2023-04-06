import React from "react";
import LoginBanner from "./component/LoginBanner";
import LoginForm from "./component/LoginForm/LoginForm";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <div className="flex justify-start items-start w-full h-screen ">
        <LoginBanner />
        <LoginForm />
      </div>
    </>
  );
};

export default index;
