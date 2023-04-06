import * as Yup from "yup";
import "yup-phone";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validateSchema = Yup.object({
  firstName: Yup.string().required("* required"),
  middleName: Yup.string().required("* required"),
  lastName: Yup.string().required("* required"),
  email: Yup.string().email("Invalid email format"),
  mobileNumber: Yup.string()
    .required("Phone Number is Required")
    .matches(phoneRegExp, "Invalid Phone Number")
    .max(10, "Mobile Number should have at most 10 characters"),
  dateOfBirth: Yup.date(),
});
