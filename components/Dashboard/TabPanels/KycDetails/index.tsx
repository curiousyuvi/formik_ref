import { FormContext } from "@/provider/FormProvider";

import FormButton from "@/reusableComponents/Button/FormButton";
import FormControl from "@/reusableComponents/FormComponents/FormControl";
import { FieldArray, Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import { KycIntialValues, Props } from "./KycInterface";

import { toast } from "react-toastify";
import { validateSchema } from "./ValidationSchema";

const index = ({ setSelectedIndex, selectedIndex }: Props) => {
  const { kycDetails, setKycDetails, setIsSubmitted } = useContext(FormContext);
  const intialValues: KycIntialValues = {
    panNumber: kycDetails.panNumber,
    aadharNumber: kycDetails.aadharNumber,
    licenceNumber: kycDetails.licenceNumber,
    relationWithHolder: kycDetails.relationWithHolder,
    electricityBill: kycDetails.electricityBill,
  };
  const onSubmit = (values: KycIntialValues) => {
    toast.success("Successfully Saved");
    // console.log("address data", values);
    setKycDetails(values);
    setIsSubmitted(true);
  };

  useEffect(() => {
    console.log("kycDetails", kycDetails);
  }, [kycDetails]);

  console.log(intialValues, "initial values");
  return (
    <div className="w-full flex justify-start pl-8 pt-8">
      <Formik
        initialValues={intialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        {({ setFieldValue, setValues }) => (
          <Form className="flex flex-col justify-start items-start gap-3 mobileLg:gap-5">
            <h1 className="text-blue-600 text-2xl mobileLg:text-3xl font-normal">
              Kyc Details
            </h1>

            <>
              <div className="flex flex-col gap-5 justify-start items-start">
                <FormControl
                  control="file"
                  id="panNumber"
                  name="panNumber"
                  label="Upload PAN document"
                  placeholder="Upload PAN document"
                />
                <FormControl
                  control="file"
                  id="aadharNumber"
                  name="aadharNumber"
                  label="Upload Adhaar document"
                  placeholder="Upload Adhaar document"
                />
                <FormControl
                  control="file"
                  id="licenceNumber"
                  label="Upload Licence document"
                  name="licenceNumber"
                  placeholder="Upload Licence document"
                />
                <FormControl
                  type="text"
                  control="input"
                  label="relation with eletrical bill holder"
                  name="relationWithHolder"
                  placeholder="relation with eletrical bill holder"
                />
                <FormControl
                  control="file"
                  id="electricityBill"
                  name="electricityBill"
                  label="Upload Electricity Bills"
                  placeholder="Upload Electricity Bills"
                  multiple
                />
              </div>
            </>
            <FormButton
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default index;
