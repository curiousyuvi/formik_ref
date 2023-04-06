import { intialValuesProps } from "@/components/Dashboard/TabPanels/PersonalDetail/PersonalInterface";
import axios from "axios";

const API_URL = "http://api.differentlydone.com/";

export const ApiInstance = axios.create({
  baseURL: `${API_URL}`,
});

export const personalDetailsAPI = ({
  firstName,
  lastName,
  email,
  mobileNumber,
  dateOfBirth,
}: intialValuesProps) => {
  return ApiInstance({
    url: "/personal_details",
    method: "POST",
    data: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile_number: mobileNumber,
      dob: dateOfBirth,
    },
  });
};

export const loginAPI = ({ email, password }: intialValuesProps) => {
  return ApiInstance({
    url: "/personal_details",
    method: "POST",
    data: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile_number: mobileNumber,
      dob: dateOfBirth,
    },
  });
};

// "first_name": "suranshu",
// "last_name": "garg",
// "mobile_number": "7565973723",
// "dob": "2022-02-01",
// "email": "suranshugarg@moengage.com"
