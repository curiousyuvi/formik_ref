import React from "react";
import { Formik, Form } from "formik";
import { FormContext } from "@/provider/FormProvider";
import { useContext } from "react";
import { validateSchema } from "./ValidationSchema";
import FormControl from "@/reusableComponents/FormComponents/FormControl";
import { toast } from "react-toastify";
import Toast from "../../../../reusableComponents/ReactToast/index";
import "react-toastify/dist/ReactToastify.css";
import FormButton from "@/reusableComponents/Button/FormButton";
import { intialValuesProps, Props } from "./PersonalInterface";
import { usePersonalDetailsAPI } from "@/api/global.hook";

const index = ({ setSelectedIndex, selectedIndex }: Props) => {
  const { mutate, isSuccess } = usePersonalDetailsAPI();
  const { personalDetails, setPersonalDetails, setIsSubmitted } =
    useContext(FormContext);
  const intialValues: intialValuesProps = {
    email: personalDetails?.email,
    firstName: personalDetails?.firstName,
    middleName: personalDetails?.middleName,
    lastName: personalDetails?.lastName,
    mobileNumber: personalDetails?.mobileNumber,
    dateOfBirth: personalDetails?.dateOfBirth,
  };
  const onSubmit = (values: intialValuesProps) => {
    console.log("form data", values);
    setPersonalDetails(values);

    // localStorage.setItem("personalDetails", JSON.stringify(values));
    mutate(values);
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="w-full flex justify-start pl-8 pt-8">
        <Formik
          initialValues={intialValues}
          onSubmit={onSubmit}
          validationSchema={validateSchema}
        >
          {(formik) => (
            <Form className="flex flex-col justify-start items-start gap-5">
              <h1 className="text-blue-600 text-2xl mobileLg:text-3xl font-normal">
                Personal Details
              </h1>

              <FormControl
                control="input"
                type="text"
                label="First Name"
                name="firstName"
                placeholder="First Name"
              />

              <FormControl
                control="input"
                type="text"
                label="Middle Name"
                name="middleName"
                placeholder="Middle Name"
              />

              <FormControl
                control="input"
                type="text"
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
              />

              <FormControl
                control="input"
                type="email"
                label="Email"
                name="email"
                placeholder="Enter Your Email"
              />

              <FormControl
                control="input"
                type="date"
                label="Date of birth"
                name="dateOfBirth"
                placeholder="Enter Your Date Of Birth"
              />

              <FormControl
                control="input"
                type="number"
                label="Mobile Number"
                name="mobileNumber"
                placeholder="Enter Your Mobile Number"
              />

              <FormButton
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                rest={personalDetails}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default index;
