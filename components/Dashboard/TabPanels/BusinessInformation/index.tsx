import React from "react";
import { Formik, Form, FieldArray } from "formik";
import Toast from "../../../../reusableComponents/ReactToast/index";
import { FormContext } from "@/provider/FormProvider";
import { useContext } from "react";
import FormControl from "@/reusableComponents/FormComponents/FormControl";
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import FormButton from "@/reusableComponents/Button/FormButton";
import { BusinessInfoIntialValues, Props } from "./BusinessInfoInterface";
import { dropDownOptions } from "../AddressDetails/SelectData";
import { validateSchema } from "./ValidationSchema";

const index = ({ setSelectedIndex, selectedIndex }: Props) => {
  const { businessDetails, setBusinessDetails, setIsSubmitted } =
    useContext(FormContext);
  const intialValues: BusinessInfoIntialValues = {
    businesses: businessDetails.businesses.map((business) => ({
      businessName: business.businessName,
      typeOfBusiness: business.typeOfBusiness,
      registerStatus: business.registerStatus,
      addressOfBusiness: business.addressOfBusiness,
      addressType: business.addressType,
      businessPremisesAge: business.businessPremisesAge,
      electricityBillName: business.electricityBillName,
      currentStockValue: business.currentStockValue,
      DailySales: business.DailySales,
      yearlySales: business.yearlySales,
      monthlySales: business.monthlySales,
      monthlyExpense: business.monthlyExpense,
      monthlyFixedExpenses: business.monthlyFixedExpenses,
      noOfEmployessWorking: business.noOfEmployessWorking,
      monthlyIncome: business.monthlyIncome,
      businessCurrentInvestment: business.businessCurrentInvestment,
      keyPersonHandlingBusiness: business.keyPersonHandlingBusiness,
      popularShopNearBy: business.popularShopNearBy,
    })),
  };
  const onSubmit = (values: any) => {
    // console.log("address data", values);
    toast.success("Successfully Saved");
    setBusinessDetails(values);
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
                Business Information
              </h1>
              <FieldArray
                name="businesses"
                render={({ insert, push, remove }) => {
                  return (
                    <div className="flex flex-col justify-start items-end relative gap-5 w-[94%] mobileMd:w-[96%] tabletSm:w-[79%] tabletMd:w-[500px] tabletLg:w-[73%]">
                      {values.businesses &&
                        values.businesses.map((address, index) => (
                          <>
                            <div className="flex flex-col justify-start gap-5 items-end w-full">
                              <div className="flex  flex-wrap gap-5 mobileLg:gap-10 border border-slate-400 rounded-lg p-6 justify-start items-start w-full ">
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Name of business"
                                  name={`businesses.${index}.businessName`}
                                  placeholder="Name of business"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Type of business"
                                  name={`businesses.${index}.typeOfBusiness`}
                                  placeholder="Type of business"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Register status"
                                  name={`businesses.${index}.registerStatus`}
                                  placeholder="Register status"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="Address of business"
                                  name={`businesses.${index}.addressOfBusiness`}
                                  placeholder="Address of business"
                                />
                                <FormControl
                                  type="text"
                                  control="select"
                                  label="own or rented"
                                  name={`businesses.${index}.addressType`}
                                  placeholder="own or rented"
                                  options={dropDownOptions}
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Business premises age"
                                  name={`businesses.${index}.businessPremisesAge`}
                                  placeholder="Business premises age"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="name on Electricity bill "
                                  name={`businesses.${index}.electricityBillName`}
                                  placeholder="name on Electricity bill "
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Current stock value"
                                  name={`businesses.${index}.currentStockValue`}
                                  placeholder="Current stock value"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Daily sales"
                                  name={`businesses.${index}.DailySales`}
                                  placeholder="Daily sales"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Monthly Sales"
                                  name={`businesses.${index}.monthlySales`}
                                  placeholder="Monthly Sales"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Yearly Sales"
                                  name={`businesses.${index}.yearlySales`}
                                  placeholder="Yearly Sales"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Monthly Expense"
                                  name={`businesses.${index}.monthlyExpense`}
                                  placeholder="Monthly Expense"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="monthly fix expenses"
                                  name={`businesses.${index}.monthlyFixedExpenses`}
                                  placeholder="monthly fix expenses"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Number of employees Working "
                                  name={`businesses.${index}.noOfEmployessWorking`}
                                  placeholder="Number of employees Working "
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="monthly income"
                                  name={`businesses.${index}.monthlyIncome`}
                                  placeholder="monthly income"
                                />
                                <FormControl
                                  type="number"
                                  control="input"
                                  label="Current investment in business"
                                  name={`businesses.${index}.businessCurrentInvestment`}
                                  placeholder="Current investment in business"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="key person handling business"
                                  name={`businesses.${index}.keyPersonHandlingBusiness`}
                                  placeholder="key person handling business"
                                />
                                <FormControl
                                  type="text"
                                  control="input"
                                  label="popular shop near by"
                                  name={`businesses.${index}.popularShopNearBy`}
                                  placeholder="popular shop near by"
                                />
                              </div>
                              <button
                                type="button"
                                className=" py-1 px-3 rounded-lg font-normal text-white text-sm bg-red-600 border hover:border-red-600 hover:bg-white hover:text-red-600 duration-500"
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
                              businessName: "",
                              typeOfBusiness: "",
                              registerStatus: "",
                              addressOfBusiness: "",
                              addressType: "",
                              businessPremisesAge: null,
                              electricityBillName: "",
                              currentStockValue: null,
                              DailySales: null,
                              monthlySales: null,
                              yearlySales: null,
                              monthlyExpense: null,
                              monthlyFixedExpenses: null,
                              noOfEmployessWorking: null,
                              monthlyIncome: null,
                              businessCurrentInvestment: null,
                              keyPersonHandlingBusiness: "",
                              popularShopNearBy: "",
                            });
                            console.log(
                              "hello",
                              values,
                              values.businesses.length + 1,
                              values.businesses,
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
