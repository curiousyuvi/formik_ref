import * as Yup from "yup";
export const validateSchema = Yup.object().shape({
  addresses: Yup.array().of(
    Yup.object().shape({
      // currentAddress: Yup.string().required("* required"),
      // addressType: Yup.number().required("* required"),
      rentedOrOwned: Yup.string().required("* required"),
      numberOfPeopleLiving: Yup.number().positive("Must be more than 0"),
      state: Yup.string().required("* required"),
      city: Yup.string().required("* required"),
      pinCode: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      // landMark: Yup.string().required("* required"),
      // policeStation: Yup.string().required("* required"),
      // postOffice: Yup.string().required("* required"),
      // houseNumber: Yup.string().required("* required"),
      // tehsil: Yup.string().required("* required"),
      // street: Yup.string().required("* required"),
      // village: Yup.string().required("* required"),
    })
  ),
});
