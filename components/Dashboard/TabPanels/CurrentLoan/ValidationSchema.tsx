import * as Yup from "yup";
export const validateSchema = Yup.object().shape({
  currentLoans: Yup.array().of(
    Yup.object().shape({
      loanValue: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      borrowerName: Yup.string().required("* required"),
      emiAmount: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      emiPaid: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      restEMI: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      loanEndData: Yup.date(),
    })
  ),
});
