import * as Yup from "yup";
export const validateSchema = Yup.object().shape({
  references: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("* required"),
      contactNumber: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      address: Yup.string().required("* required"),
      referencePurpose: Yup.string().required("* required"),
      occupation: Yup.string().required("* required"),
      relationWithApplicant: Yup.string().required("* required"),
    })
  ),
});
