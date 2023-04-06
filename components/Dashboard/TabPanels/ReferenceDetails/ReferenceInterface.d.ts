import { Dispatch, SetStateAction } from "react";

export type IntialValue = {
  name: string;
  contactNumber: number | null;
  address: string;
  referencePurpose: string;
  occupation: string;
  relationWithApplicant: string;
};

export type ReferenceIntialValues = {
  references: IntialValue[];
};

export type Props = {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
};
