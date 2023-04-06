import FormControl from "@/reusableComponents/FormComponents/FormControl";
import { Form, Formik } from "formik";
import Image from "next/image";
import React from "react";
import BtFinanceLogo from "../../../../public/bt_finance_logo.png";
import { LoginProps } from "./LoginInterface";

type Props = {};

const LoginForm = (props: Props) => {
  const loginFormValues = {
    email: "",
    password: null,
  };

  const handleSubmit = (values: LoginProps) => {
    console.log(values, "login values");
  };
  return (
    <Formik initialValues={loginFormValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col justify-center items-center gap-7 w-1/2 h-full">
        <Image
          className="rounded-xl object-cover "
          width={80}
          height={80}
          src={BtFinanceLogo}
          alt="utl"
        />
        <div className="flex flex-col justify-start items-center gap-2">
          <h1 className="text-3xl font-semibold ">Hello Again!</h1>
          <p className="text-sm font-semibold opacity-70">
            Log in and be part of the community!
          </p>
        </div>
        <div className="flex flex-col justify-start items-center gap-4">
          <FormControl
            control="input"
            type="email"
            label="Email"
            name="email"
            placeholder="Enter Your Email"
          />
          <div className="flex flex-col justify-start items-center gap-1 mb-6">
            <FormControl
              control="input"
              type="password"
              label="Password"
              name="password"
              placeholder="Enter Your Password"
            />
            <div className="flex justify-between px-2 items-center w-full">
              <h1 className="opacity-60 font-medium">Remember Me</h1>
              <h1 className="text-dark-blue font-medium">Password Recovery</h1>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-light-blue rounded-lg py-3 text-sm font-medium text-white px-4 text-center border hover:bg-white hover:border-light-blue duration-300 hover:text-light-blue"
          >
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
