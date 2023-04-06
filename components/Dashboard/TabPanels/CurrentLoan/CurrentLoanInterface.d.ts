import { Dispatch, SetStateAction } from "react";

export type IntialValue = {
  loanValue: number | null;
  borrowerName: string;
  emiAmount: number | null;
  emiPaid: number | null;
  restEMI: number | null;
  loanEndDate: number | null;
};

export type CurrentLoanIntialValues = {
  currentLoans: IntialValue[];
};

export type Props = {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
};
