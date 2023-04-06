import { Dispatch, SetStateAction } from "react";

export type IntialValue = {
  memberName: string;
  fatherName: string;
  relationWithApplicant: string;
  occupation: string;
  address: string;
  stayInSamePlace: string;
};

export type FamilyIntialValues = {
  familyMembers: IntialValue[];
};

export type Props = {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
};
