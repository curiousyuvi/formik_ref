import { Dispatch, SetStateAction } from "react";

export type IntialValue = {
  businessName: string;
  typeOfBusiness: string;
  registerStatus: string;
  addressOfBusiness: string;
  addressType: string;
  businessPremisesAge: number | null;
  electricityBillName: string;
  currentStockValue: number | null;
  DailySales: number | null;
  monthlySales: number | null;
  yearlySales: number | null;
  monthlyExpense: number | null;
  monthlyFixedExpenses: number | null;
  noOfEmployessWorking: number | null;
  monthlyIncome: number | null;
  businessCurrentInvestment: number | null;
  keyPersonHandlingBusiness: string;
  popularShopNearBy: string;
};

export type BusinessInfoIntialValues = {
  businesses: IntialValue[];
};

export type Props = {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
};
