import * as Yup from "yup";
export const validateSchema = Yup.object().shape({
  businesses: Yup.array().of(
    Yup.object().shape({
      businessName: Yup.string().required("* required"),
      typeOfBusiness: Yup.string().required("* required"),
      registerStatus: Yup.string().required("* required"),
      addressOfBusiness: Yup.string().required("* required"),
      addressType: Yup.string().required("* required"),
      businessPremisesAge: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      electricityBillName: Yup.string().required("* required"),
      currentStockValue: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      DailySales: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      monthlySales: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      yearlySales: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      monthlyExpense: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      monthlyFixedExpenses: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      noOfEmployessWorking: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      monthlyIncome: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      businessCurrentInvestment: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      keyPersonHandlingBusiness: Yup.string().required("* required"),
      popularShopNearBy: Yup.string().required("* required"),
    })
  ),
});
