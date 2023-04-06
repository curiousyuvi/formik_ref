import { ErrorMessage, Field } from "formik";
import React from "react";

type Props = {
  label: string;
  name: string;
  placeholder: string;
  options?: any;
  type?: string;
};

const RadioButton = (props: Props) => {
  const { label, name, placeholder, options, ...rest } = props;
  return (
    <div className="flex flex-col justify-start items-start gap-1">
      <label htmlFor="firstName" className="text-sm text-gray-400">
        {label}
      </label>
      <div className="flex justify-start items-center gap-4">
        <Field
          as="select"
          id={name}
          name={name}
          {...rest}
          placeholder={placeholder}
          className="border-2 border-slate-500/20 rounded-lg mobileMd:py-2 py-1 text-lg mobileLg:text-xl font-normal px-2 w-[17rem] mobileMd:w-[350px] outline-none "
        >
          {({ field }: { field: any }) => {
            return options.map((option: any) => {
              return (
                <div
                  className="flex justify-start items-center gap-2 bg-transparent"
                  key={option.value}
                >
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label className="text-sm" htmlFor={option.value}>
                    {option.value}{" "}
                  </label>
                </div>
              );
            });
          }}
        </Field>
      </div>

      <div className="text-red-500 text-sm w-[14rem] mobileMd:w-[300px]">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default RadioButton;
