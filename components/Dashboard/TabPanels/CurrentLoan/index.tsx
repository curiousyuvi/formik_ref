import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { validateSchema } from "./ValidationSchema";
import Toast from "../../../../reusableComponents/ReactToast/index";
import { FormContext } from "@/provider/FormProvider";
import { useContext } from "react";
import FormControl from "@/reusableComponents/FormComponents/FormControl";
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import FormButton from "@/reusableComponents/Button/FormButton";
import { CurrentLoanIntialValues, Props } from "./CurrentLoanInterface";

const index = ({ setSelectedIndex, selectedIndex }: Props) => {
  const { currentLoanDetails, setCurrentLoanDetails, setIsSubmitted } =
    useContext(FormContext);
  const intialValues: CurrentLoanIntialValues = {
    currentLoans: currentLoanDetails.currentLoans.map((currentLoan) => ({
      loanValue: currentLoan.loanValue,
      borrowerName: currentLoan.borrowerName,
      emiAmount: currentLoan.emiAmount,
      emiPaid: currentLoan.emiPaid,
      restEMI: currentLoan.restEMI,
      loanEndDate: currentLoan.loanEndDate,
    })),
  };
  const onSubmit = (values: any) => {
    // console.log("address data", values);
    toast.success("Successfully Saved");
    setCurrentLoanDetails(values);
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="w-full flex justify-start mobileLg:pl-8 mobileLg:py-8 pl-0">
        <Formik
          initialValues={intialValues}
          onSubmit={onSubmit}
          validationSchema={validateSchema}
        >
          {({ values }) => (
            <Form className="flex flex-col  justify-start items-start gap-3 mobileLg:gap-5 pl-5 mobileLg:pl-0 mobileLg:pt-0 pt-8">
              <h1 className="text-blue-600 text-3xl font-normal">
                Current self declared loans
              </h1>
              <FieldArray
                name="currentLoans"
                render={({ insert, push, remove }) => {
                  return (
                    <div className="flex flex-col justify-start items-end relative gap-5 w-[94%] mobileMd:w-[96%] tabletSm:w-[79%] tabletMd:w-[500px] tabletLg:w-[73%]">
                      {values.currentLoans &&
                        values.currentLoans.map((currentLoan, index) => (
                          <>
                            <div className="flex flex-col justify-start gap-5 items-end w-full">
                              <div className="flex  flex-wrap gap-5 mobileLg:gap-10 border border-slate-400 rounded-lg px-5 py-6 justify-start items-start w-full ">
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Loan value"
                                  name={`currentLoans.${index}.loanValue`}
                                  placeholder="Loan value"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Borrower name"
                                  name={`currentLoans.${index}.borrowerName`}
                                  placeholder="Borrower name"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="EMI amount"
                                  name={`currentLoans.${index}.emiAmount`}
                                  placeholder="EMI amount"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="EMI paid"
                                  name={`currentLoans.${index}.emiPaid`}
                                  placeholder="EMI paid"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="rest EMI"
                                  name={`currentLoans.${index}.restEMI`}
                                  placeholder="rest EMI"
                                />
                                <FormControl
                                  type="date"
                                  control="input"
                                  label="Loan end date"
                                  name={`currentLoans.${index}.loanEndDate`}
                                  placeholder="Loan end date"
                                />
                              </div>
                              <button
                                type="button"
                                className=" py-2 px-4 rounded-lg font-normal text-white text-sm bg-red-600 border hover:border-red-600 hover:bg-white hover:text-red-600 duration-500 "
                                onClick={() => remove(index)}
                              >
                                <AiTwotoneDelete />
                              </button>
                            </div>
                          </>
                        ))}
                      <div>
                        <button
                          type="button"
                          className="mt-[-10px] py-1 px-3 rounded-lg font-light text-white text-base  bg-blue-500 border hover:border-blue-600 hover:bg-white hover:text-blue-600 duration-500 absolute right-[70px] bottom-[18px]"
                          onClick={() => {
                            push({
                              loanValue: null,
                              borrowerName: "",
                              emiAmount: null,
                              emiPaid: null,
                              restEMI: null,
                              loanEndDate: null,
                            });
                            console.log(
                              "hello",
                              values,
                              values.currentLoans.length + 1,
                              values.currentLoans,
                              "address"
                            );
                          }}
                        >
                          Add Another Address
                        </button>
                      </div>
                    </div>
                  );
                }}
              />
              <FormButton
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default index;
