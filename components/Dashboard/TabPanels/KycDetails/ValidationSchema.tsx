import * as Yup from "yup";
import { Base64File } from "./KycInterface";

const base64FileSchema = Yup.object({
  name: Yup.string().required(),
  base64: Yup.string().required(),
});

export const validateSchema = Yup.object({
  panNumber: Yup.array()
    .of(base64FileSchema)
    .min(1, "Upload atleast 1 PAN Document")
    .max(1, "Upload only 1 PAN Document"),
  aadharNumber: Yup.array()
    .of(base64FileSchema)
    .min(1, "Upload atleast 1 Adhaar Document")
    .max(1, "Upload only 1 Adhaar Document"),
  licenceNumber: Yup.array()
    .of(base64FileSchema)
    .min(1, "Upload atleast 1 Licence Document")
    .max(1, "Upload only 1 Licence Document"),
  relationWithHolder: Yup.string().required("* required"),
  electricityBill: Yup.array()
    .of(base64FileSchema)
    .min(1, "Upload atleast 1 Electricity Bill Document")
    .max(5, "Upload only 5 Electricity Bill Document"),
});
