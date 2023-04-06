import * as Yup from "yup";
export const validateSchema = Yup.object().shape({
  assetDetails: Yup.array().of(
    Yup.object().shape({
      typeOfAsset: Yup.string().required("* required"),
      owner: Yup.string().required("* required"),
      authority: Yup.string().required("* required"),
      value: Yup.number()
        .positive("Must be more than 0")
        .required("* required"),
      Details: Yup.string().required("* required"),
    })
  ),
});
