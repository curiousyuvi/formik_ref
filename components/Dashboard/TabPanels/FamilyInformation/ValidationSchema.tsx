import * as Yup from "yup";
export const validateSchema = Yup.object().shape({
  familyMembers: Yup.array().of(
    Yup.object().shape({
      memberName: Yup.string().required("* required"),
      fatherName: Yup.string().required("* required"),
      relationWithApplicant: Yup.string().required("* required"),
      occupation: Yup.string().required("* required"),
      address: Yup.string().required("* required"),
      stayInSamePlace: Yup.string().required("* required"),
    })
  ),
});
