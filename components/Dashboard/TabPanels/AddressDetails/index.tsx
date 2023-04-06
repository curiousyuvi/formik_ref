import React from "react";
import { State, City, IState, ICity } from "country-state-city";
import { Formik, Form, FieldArray } from "formik";
import { validateSchema } from "./ValidationSchema";
import states from "india-state-codes";
import { FormContext } from "@/provider/FormProvider";
import { useContext } from "react";
import { IntialValues, Props } from "./AddressInterface";
import FormControl from "@/reusableComponents/FormComponents/FormControl";
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { dropDownOptions, stateOptions, cityOptions } from "./SelectData";
import FormButton from "@/reusableComponents/Button/FormButton";

const index = ({ setSelectedIndex, selectedIndex }: Props) => {
  const { addressDetails, setAddressDetails, setIsSubmitted, selectValue } =
    useContext(FormContext);
  const intialValues: IntialValues = {
    addresses: addressDetails.addresses.map((addressDetail) => ({
      // currentAddress: addressDetail.currentAddress,
      addressType: addressDetail.addressType,
      rentedOrOwned: addressDetail.rentedOrOwned,
      numberOfPeopleLiving: addressDetail.numberOfPeopleLiving,
      state: addressDetail.state,
      city: addressDetail.city,
      pinCode: addressDetail.pinCode,
      landMark: addressDetail.landMark,
      tehsil: addressDetail.tehsil,
      policeStation: addressDetail.policeStation,
      postOffice: addressDetail.postOffice,
      houseNumber: addressDetail.houseNumber,
      street: addressDetail.street,
      village: addressDetail.village,
    })),
  };
  const onSubmit = (values: any) => {
    console.log("address data", values);
    toast.success("Successfully Saved");
    setAddressDetails(values);
    setIsSubmitted(true);
  };
  // console.log(selectValue, "selectValue");

  const newFirstState = {
    name: "Select an State",
    value: "",
  };
  const newFirstCity = {
    name: "Select an City",
    value: "",
  };
  const stateCode = states.getStateCodeByStateName(`(${selectValue})`);
  const city: any = City.getCitiesOfState("IN", stateCode);
  const state: any = State.getStatesOfCountry("IN");
  // console.log(state.map((st) => st.isoCode));
  // console.log(State.getStatesOfCountry("IN"));

  return (
    <>
      <div className="w-full flex justify-start mobileLg:pl-8 mobileLg:py-8 pl-0">
        <Formik
          initialValues={intialValues}
          onSubmit={onSubmit}
          validationSchema={validateSchema}
        >
          {({ values, setFieldValue }) => (
            <Form className="flex flex-col  justify-start items-start gap-3 mobileLg:gap-5 pl-5 mobileLg:pl-0 mobileLg:pt-0 pt-8">
              <h1 className="text-blue-600 text-2xl mobileLg:text-3xl font-normal">
                Address Details
              </h1>
              <FieldArray
                name="addresses"
                render={({ insert, push, remove }) => {
                  return (
                    <div className="flex flex-col justify-start items-end relative gap-5 w-[94%] mobileMd:w-[96%] tabletSm:w-[79%] tabletMd:w-[500px] tabletLg:w-[90%]">
                      <div></div>
                      {values.addresses &&
                        values.addresses.map((address, index) => (
                          <>
                            <div className="flex flex-col justify-start gap-5 items-end w-full">
                              <div className="flex  flex-wrap gap-5 mobileLg:gap-10 border border-slate-500/20 rounded-lg mobileLg:p-6 p-4 justify-start items-start w-full ">
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="House Number"
                                  name={`addresses.${index}.houseNumber`}
                                  placeholder="House Number"
                                />
                                <FormControl
                                  type="text"
                                  control="textarea"
                                  label="Street / Area / Colony"
                                  name={`addresses.${index}.street`}
                                  placeholder="Street/Area/Colony"
                                />
                                <FormControl
                                  type="text"
                                  control="textarea"
                                  label="Village / Panchayat"
                                  name={`addresses.${index}.village`}
                                  placeholder="Village/Panchayat"
                                />
                                <FormControl
                                  type="text"
                                  control="select"
                                  label="State"
                                  name={`addresses.${index}.state`}
                                  placeholder="State"
                                  options={[newFirstState].concat(state)}
                                />

                                <FormControl
                                  type="text"
                                  control="select"
                                  label="City"
                                  name={`addresses.${index}.city`}
                                  placeholder="City"
                                  options={[newFirstCity].concat(city)}
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Tehsil"
                                  name={`addresses.${index}.tehsil`}
                                  placeholder="Tehsil"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Nearest Police Station"
                                  name={`addresses.${index}.policeStation`}
                                  placeholder="Nearest Police Station"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Nearest Post Office"
                                  name={`addresses.${index}.postOffice`}
                                  placeholder="Nearest Post Office"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="PIN Code"
                                  name={`addresses.${index}.pinCode`}
                                  placeholder="PIN Code"
                                />

                                <FormControl
                                  type="text"
                                  control="input"
                                  label="LandMark"
                                  name={`addresses.${index}.landMark`}
                                  placeholder="LandMark"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Number of people Living "
                                  name={`addresses.${index}.numberOfPeopleLiving`}
                                  placeholder="Number of people Living "
                                />
                                <FormControl
                                  type="text"
                                  control="radio"
                                  label="rented or owned"
                                  name={`addresses.${index}.rentedOrOwned`}
                                  placeholder="rented or owned"
                                  options={dropDownOptions}
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
                          className="mt-[-10px] py-1 px-3 rounded-lg font-light text-white text-base  bg-blue-500 border hover:border-blue-600 hover:bg-white hover:text-blue-600 duration-500 absolute right-[70px] bottom-[16px]"
                          onClick={() => {
                            push({
                              currentAddress: "",
                              addressType: "",
                              rentedOrOwned: "",
                              numberOfPeopleLiving: null,
                              state: "",
                              city: "",
                              landMark: "",
                              pinCode: "",
                            });
                            console.log(
                              "hello",
                              values,
                              values.addresses.length + 1,
                              values.addresses,
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
