import { Dispatch, SetStateAction } from "react";

export type IntialValue = {
  // currentAddress: string;
  addressType: string;
  rentedOrOwned: string;
  numberOfPeopleLiving: number | null;
  state: string;
  city: string;
  pinCode: number | null;
  landMark: string;
  tehsil: string;
  policeStation: string;
  postOffice: string;
  houseNumber: string;
  street: string;
  village: string;
};

export type IntialValues = {
  addresses: IntialValue[];
};

export type Props = {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
};
