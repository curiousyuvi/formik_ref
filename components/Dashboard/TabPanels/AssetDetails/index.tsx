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
import { AssetDetailsIntialValues, Props } from "./AssetDetailsInterface";
import { assetTypeOptions } from "../AddressDetails/SelectData";

const index = ({ setSelectedIndex, selectedIndex }: Props) => {
  const { detailAsset, setDetailAsset, setIsSubmitted } =
    useContext(FormContext);
  const intialValues: AssetDetailsIntialValues = {
    assetDetails: detailAsset.assetDetails.map((assetDetail) => ({
      typeOfAsset: assetDetail.typeOfAsset,
      owner: assetDetail.owner,
      authority: assetDetail.authority,
      value: assetDetail.value,
      Details: assetDetail.Details,
    })),
  };
  const onSubmit = (values: any) => {
    // console.log("address data", values);
    toast.success("Successfully Saved");
    setDetailAsset(values);
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
                Type of Assets
              </h1>
              <FieldArray
                name="assetDetails"
                render={({ insert, push, remove }) => {
                  return (
                    <div className="flex flex-col justify-start items-end relative gap-5 w-[94%] mobileMd:w-[96%] tabletSm:w-[79%] tabletMd:w-[500px] tabletLg:w-[73%]">
                      {values.assetDetails &&
                        values.assetDetails.map((assetDetail, index) => (
                          <>
                            <div className="flex flex-col justify-start gap-5 items-end w-full">
                              <div className="flex  flex-wrap gap-5 mobileLg:gap-10 border border-slate-400 rounded-lg px-5 py-6 justify-start items-start w-full ">
                                <FormControl
                                  type="text"
                                  control="select"
                                  label="Type of Asset"
                                  name={`assetDetails.${index}.typeOfAsset`}
                                  placeholder="Type of Asset"
                                  options={assetTypeOptions}
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Owner"
                                  name={`assetDetails.${index}.owner`}
                                  placeholder="Owner"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Authority"
                                  name={`assetDetails.${index}.authority`}
                                  placeholder="Authority"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="value"
                                  name={`assetDetails.${index}.value`}
                                  placeholder="value"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Details"
                                  name={`assetDetails.${index}.Details`}
                                  placeholder="Details"
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
                              typeOfAsset: null,
                              owner: "",
                              authority: "",
                              value: null,
                              Details: "",
                            });
                            console.log(
                              "hello",
                              values,
                              values.assetDetails.length + 1,
                              values.assetDetails,
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
