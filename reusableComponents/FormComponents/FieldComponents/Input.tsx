import { ErrorMessage, Field } from "formik";
import React from "react";

type Props = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
};

const Input = (props: Props) => {
  const { label, name, placeholder, type, ...rest } = props;
  return (
    <div className="flex flex-col justify-start items-start gap-1">
      <label htmlFor="firstName" className="text-sm text-gray-400">
        {label}
      </label>

      <Field
        type={type}
        id={name}
        name={name}
        {...rest}
        placeholder={placeholder}
        className="border-2 bg-transparent border-slate-500/20 rounded-lg mobileMd:py-2 py-1 text-lg mobileLg:text-xl font-normal px-2 w-[17rem] mobileMd:w-[350px] outline-none "
      />
      <div className="text-red-500 text-sm w-[14rem] mobileMd:w-[300px]">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default Input;
