import { File } from "buffer";
import { Dispatch, SetStateAction } from "react";

export type Base64File = { name: string; base64: string };

export type KycIntialValues = {
  panNumber: Base64File[];
  aadharNumber: Base64File[];
  licenceNumber: Base64File[];
  relationWithHolder: string;
  electricityBill: Base64File[];
};

export type Props = {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
};
