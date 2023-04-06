import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

type Props = {};

const index = (props: Props) => {
  let [plan, setPlan] = useState("startup");
  return (
    <>
      <div className="flex justify-center items-center gap-5">
        <div className="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yes
          </label>
        </div>
        <div className="flex items-center">
          <input
            checked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            No
          </label>
        </div>
      </div>
    </>
  );
};

export default index;
