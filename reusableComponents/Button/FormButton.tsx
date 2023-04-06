import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { FormContext } from "@/provider/FormProvider";

type Props = {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  rest?: any;
};

const FormButton = ({ setSelectedIndex, selectedIndex, rest }: Props) => {
  const { isSubmitted, setIsSubmitted } = useContext(FormContext);
  // console.log(isSubmitted, "rest");
  return (
    <>
      <div className="flex justify-start gap-4 items-center mb-6 mobileLg:mb-0">
        <button
          className="py-2 px-4 text-base pointer font-normal mobileLg:text-lg bg-green-500 text-white rounded-lg hover:text-green-500 hover:bg-white border hover:border-green-500 duration-100"
          type="submit"
        >
          Save
        </button>
        {isSubmitted ? (
          <button
            type="button"
            className="py-2 px-4 text-base pointer font-normal mobileLg:text-lg bg-blue-500 text-white rounded-lg hover:text-blue-500 hover:bg-white border disabled:opacity-50 hover:border-blue-500 duration-500"
            onClick={() => {
              setSelectedIndex(selectedIndex + 1);
              setIsSubmitted(false);
            }}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            className="py-2 px-4 text-base pointer font-normal mobileLg:text-lg bg-blue-500 text-white rounded-lg hover:text-blue-500 hover:bg-white border disabled:opacity-50 hover:border-blue-500 duration-500"
            onClick={() => {
              toast.error("Please click the Save button to save all Data");
            }}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default FormButton;
