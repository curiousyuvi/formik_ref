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
import { ReferenceIntialValues, Props } from "./ReferenceInterface";

const index = ({ setSelectedIndex, selectedIndex }: Props) => {
  const { referenceDetails, setReferenceDetails, setIsSubmitted } =
    useContext(FormContext);
  const intialValues: ReferenceIntialValues = {
    references: referenceDetails.references.map((reference) => ({
      name: reference.name,
      contactNumber: reference.contactNumber,
      address: reference.address,
      referencePurpose: reference.referencePurpose,
      occupation: reference.occupation,
      relationWithApplicant: reference.relationWithApplicant,
    })),
  };
  const onSubmit = (values: any) => {
    console.log("address data", values);
    toast.success("Successfully Saved");
    setReferenceDetails(values);
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
              <h1 className="text-blue-600 text-3xl font-normal">Reference</h1>
              <FieldArray
                name="references"
                render={({ insert, push, remove }) => {
                  return (
                    <div className="flex flex-col justify-start items-end relative gap-5 w-[94%] mobileMd:w-[96%] tabletSm:w-[79%] tabletMd:w-[500px] tabletLg:w-[73%]">
                      <div></div>
                      {values.references &&
                        values.references.map((reference, index) => (
                          <>
                            <div className="flex flex-col justify-start gap-5 items-end w-full">
                              <div className="flex  flex-wrap gap-5 mobileLg:gap-10 border border-slate-400 rounded-lg px-5 py-6 justify-start items-start w-full ">
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Name"
                                  name={`references.${index}.name`}
                                  placeholder="Name"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Contact Number"
                                  name={`references.${index}.contactNumber`}
                                  placeholder="Contact Number"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Address"
                                  name={`references.${index}.address`}
                                  placeholder="Address"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Reference Purpose"
                                  name={`references.${index}.referencePurpose`}
                                  placeholder="Reference Purpose"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Occupation"
                                  name={`references.${index}.occupation`}
                                  placeholder="Occupation"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Relation with applicant "
                                  name={`references.${index}.relationWithApplicant`}
                                  placeholder="Relation with applicant "
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
                              name: "",
                              contactNumber: null,
                              address: "",
                              referencePurpose: "",
                              occupation: "",
                              relationWithApplicant: "",
                            });
                            console.log(
                              "hello",
                              values,
                              values.references.length + 1,
                              values.references,
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
