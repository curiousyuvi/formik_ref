import { IntialValues } from "@/components/Dashboard/TabPanels/AddressDetails/AddressInterface";
import { FormContext } from "@/provider/FormProvider";
import {
  ErrorMessage,
  Field,
  FormikContextType,
  useFormikContext,
} from "formik";
import React, { useContext, useEffect } from "react";

type Props = {
  label: string;
  name: string;
  placeholder: string;
  options?: any;
  type?: string;
};

const Select = (props: Props) => {
  const formik = useFormikContext<any>();
  // console.log(formik, "dk");
  const { label, name, placeholder, options, ...rest } = props;
  const { setSelectValue } = useContext(FormContext);

  useEffect(() => {
    setSelectValue(formik.values?.addresses?.map((add: any) => add.state));
  }, [formik.values]);

  return (
    <div className="flex flex-col justify-start items-start gap-1">
      <label htmlFor="firstName" className="text-sm text-gray-400">
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        placeholder={placeholder}
        className="border-2 bg-transparent border-slate-500/20 rounded-lg mobileMd:py-2 py-1 text-lg mobileLg:text-xl font-normal px-2 w-[17rem] mobileMd:w-[350px] outline-none "
      >
        {options.map((option: any) => {
          return (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </Field>
      <div className="text-red-500 text-sm w-[14rem] mobileMd:w-[300px]">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default Select;

// import { ErrorMessage, Field } from "formik";
// import React from "react";

// type Props = {
//   label: string;
//   name: string;
//   placeholder: string;
//   options?: any;
//   type?: string;
// };

// const RadioButton = (props: Props) => {
//   const { label, name, placeholder, options, ...rest } = props;
//   return (
//     <div className="flex flex-col justify-start items-start gap-1">
//       <label htmlFor="firstName" className="text-sm text-gray-400">
//         {label}
//       </label>
//       <div className="flex justify-start items-center gap-3 ">
//         <Field
//           as="select"
//           id={name}
//           name={name}
//           {...rest}
//           placeholder={placeholder}
//           className="border-2 border-slate-500/20 rounded-lg mobileMd:py-2 py-1 text-lg mobileLg:text-xl font-normal px-2 w-[17rem] mobileMd:w-[350px] outline-none "
//         >
//           {({ field }: { field: any }) => {
//             return options.map((option: any) => {
//               return (
//                 <div
//                   className="flex justify-start items-center gap-2"
//                   key={option.value}
//                 >
//                   <input
//                     type="radio"
//                     id={option.value}
//                     {...field}
//                     value={option.value}
//                     name="radio-10"
//                     className="radio w-[1rem] h-[1rem] checked:bg-blue-500"
//                     checked
//                   />

//                   <label className="text-sm" htmlFor={option.value}>
//                     {option.value}{" "}
//                   </label>
//                 </div>
//               );
//             });
//           }}
//         </Field>
//       </div>

//       <div className="text-red-500 text-sm w-[14rem] mobileMd:w-[300px]">
//         <ErrorMessage name={name} />
//       </div>
//     </div>
//   );
// };

// export default RadioButton;
