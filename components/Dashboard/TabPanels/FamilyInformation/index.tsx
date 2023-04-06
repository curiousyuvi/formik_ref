import React from "react";
import { Formik, Form, FieldArray } from "formik";
import { validateSchema } from "./ValidationSchema";
import Toast from "../../../../reusableComponents/ReactToast/index";
import { FormContext } from "@/provider/FormProvider";
import { useContext } from "react";
import FormControl from "@/reusableComponents/FormComponents/FormControl";
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from "react-toastify";
// import { dropDownOptions, stateOptions, cityOptions } from "./SelectData";
import FormButton from "@/reusableComponents/Button/FormButton";
import { FamilyIntialValues, Props } from "./FamilyInfoInterface";

const index = ({ setSelectedIndex, selectedIndex }: Props) => {
  const { familyDetails, setFamilyDetails, setIsSubmitted } =
    useContext(FormContext);
  const intialValues: FamilyIntialValues = {
    familyMembers: familyDetails.familyMembers.map((familyMember) => ({
      memberName: familyMember.memberName,
      fatherName: familyMember.fatherName,
      relationWithApplicant: familyMember.relationWithApplicant,
      occupation: familyMember.occupation,
      address: familyMember.address,
      stayInSamePlace: familyMember.stayInSamePlace,
    })),
  };
  const onSubmit = (values: any) => {
    // console.log("address data", values);
    toast.success("Successfully Saved");
    setFamilyDetails(values);
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
              <h1 className="text-blue-600 text-2xl mobileLg:text-3xl font-normal">
                Family Information
              </h1>
              <FieldArray
                name="familyMembers"
                render={({ insert, push, remove }) => {
                  return (
                    <div className="flex flex-col justify-start items-end relative gap-5 w-[94%] mobileMd:w-[96%] tabletSm:w-[79%] tabletMd:w-[500px] tabletLg:w-[85%]">
                      <div></div>
                      {values.familyMembers &&
                        values.familyMembers.map((address, index) => (
                          <>
                            <div className="flex flex-col justify-start gap-5 items-end w-full">
                              <div className="flex  flex-wrap gap-5 mobileLg:gap-10 border border-slate-500/20 rounded-lg mobileLg:p-6 p-4 justify-start items-start w-full ">
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Member Name"
                                  name={`familyMembers.${index}.memberName`}
                                  placeholder="Member Name"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Father Name"
                                  name={`familyMembers.${index}.fatherName`}
                                  placeholder="Father Name"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Relation with Applicant"
                                  name={`familyMembers.${index}.relationWithApplicant`}
                                  placeholder="Relation with Applicant"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Occupation"
                                  name={`familyMembers.${index}.occupation`}
                                  placeholder="Occupation"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Address"
                                  name={`familyMembers.${index}.address`}
                                  placeholder="Address"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Staying in same place as applicant"
                                  name={`familyMembers.${index}.stayInSamePlace`}
                                  placeholder="Staying in same place as applicant"
                                />
                              </div>
                              <button
                                type="button"
                                className=" py-1 px-3 rounded-lg font-normal text-white text-sm bg-red-600 hover:border hover:border-red-600 hover:bg-white hover:text-red-600 duration-500"
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
                          className="mt-[-10px] py-1 px-3 rounded-lg font-light text-white text-base  bg-blue-500 border hover:border-blue-600 hover:bg-white hover:text-blue-600 duration-500"
                          onClick={() => {
                            push({
                              memberName: "",
                              fatherName: "",
                              relationWithApplicant: "",
                              occupation: "",
                              address: "",
                              stayInSamePlace: "",
                            });
                            console.log(
                              "hello",
                              values,
                              values.familyMembers.length + 1,
                              values.familyMembers,
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
