import { IntialValues } from "@/components/Dashboard/TabPanels/AddressDetails/AddressInterface";
import { AssetDetailsIntialValues } from "@/components/Dashboard/TabPanels/AssetDetails/AssetDetailsInterface";
import { BusinessInfoIntialValues } from "@/components/Dashboard/TabPanels/BusinessInformation/BusinessInfoInterface";
import { CurrentLoanIntialValues } from "@/components/Dashboard/TabPanels/CurrentLoan/CurrentLoanInterface";
import { FamilyIntialValues } from "@/components/Dashboard/TabPanels/FamilyInformation/FamilyInfoInterface";
import { KycIntialValues } from "@/components/Dashboard/TabPanels/KycDetails/KycInterface";
import { intialValuesProps } from "@/components/Dashboard/TabPanels/PersonalDetail/PersonalInterface";
import { ReferenceIntialValues } from "@/components/Dashboard/TabPanels/ReferenceDetails/ReferenceInterface";
import React, { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

type Props = {
  children: ReactNode;
};

type FormContextType = {
  selectValue: string;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  referenceDetails: ReferenceIntialValues;
  setReferenceDetails: React.Dispatch<
    React.SetStateAction<ReferenceIntialValues>
  >;
  detailAsset: AssetDetailsIntialValues;
  setDetailAsset: React.Dispatch<
    React.SetStateAction<AssetDetailsIntialValues>
  >;
  currentLoanDetails: CurrentLoanIntialValues;
  setCurrentLoanDetails: React.Dispatch<
    React.SetStateAction<CurrentLoanIntialValues>
  >;
  addressDetails: IntialValues;
  setAddressDetails: React.Dispatch<React.SetStateAction<IntialValues>>;
  personalDetails: intialValuesProps;
  setPersonalDetails: React.Dispatch<React.SetStateAction<intialValuesProps>>;
  kycDetails: KycIntialValues;
  setKycDetails: React.Dispatch<React.SetStateAction<KycIntialValues>>;
  familyDetails: FamilyIntialValues;
  setFamilyDetails: React.Dispatch<React.SetStateAction<FamilyIntialValues>>;
  businessDetails: BusinessInfoIntialValues;
  setBusinessDetails: React.Dispatch<
    React.SetStateAction<BusinessInfoIntialValues>
  >;
};

const personalDetailsObject = {
  firstName: "",
  lastName: "",
  middleName: "",
  email: "",
  mobileNumber: null,
  dateOfBirth: null,
};

export const FormContext = createContext<FormContextType>(
  {} as FormContextType
);

const FormProvider = ({ children }: Props) => {
  const [selectValue, setSelectValue] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [personalDetails, setPersonalDetails] = useState<intialValuesProps>(
    personalDetailsObject
  );

  useEffect(() => {
    const getInitialState = () => {
      try {
        const personalDetailsFromLocal =
          window.localStorage.getItem("personalDetails");
        if (personalDetailsFromLocal)
          setPersonalDetails(JSON.parse(personalDetailsFromLocal));
      } catch (err) {
        console.log(err);
      }
    };

    getInitialState();
  }, [setPersonalDetails]);

  const [addressDetails, setAddressDetails] = useState<IntialValues>({
    addresses: [
      {
        // currentAddress: "",
        addressType: "",
        rentedOrOwned: "",
        numberOfPeopleLiving: null,
        state: "",
        city: "",
        pinCode: null,
        landMark: "",

        tehsil: "",
        policeStation: "",
        postOffice: "",
        houseNumber: "",
        street: "",
        village: "",
      },
    ],
  });

  const [kycDetails, setKycDetails] = useState<KycIntialValues>({
    panNumber: [],
    aadharNumber: [],
    licenceNumber: [],
    relationWithHolder: "",
    electricityBill: [],
  });

  const [familyDetails, setFamilyDetails] = useState<FamilyIntialValues>({
    familyMembers: [
      {
        memberName: "",
        fatherName: "",
        relationWithApplicant: "",
        occupation: "",
        address: "",
        stayInSamePlace: "",
      },
    ],
  });

  const [businessDetails, setBusinessDetails] =
    useState<BusinessInfoIntialValues>({
      businesses: [
        {
          businessName: "",
          typeOfBusiness: "",
          registerStatus: "",
          addressOfBusiness: "",
          addressType: "",
          businessPremisesAge: null,
          electricityBillName: "",
          currentStockValue: null,
          DailySales: null,
          monthlySales: null,
          yearlySales: null,
          monthlyExpense: null,
          monthlyFixedExpenses: null,
          noOfEmployessWorking: null,
          monthlyIncome: null,
          businessCurrentInvestment: null,
          keyPersonHandlingBusiness: "",
          popularShopNearBy: "",
        },
      ],
    });

  const [currentLoanDetails, setCurrentLoanDetails] =
    useState<CurrentLoanIntialValues>({
      currentLoans: [
        {
          loanValue: null,
          borrowerName: "",
          emiAmount: null,
          emiPaid: null,
          restEMI: null,
          loanEndDate: null,
        },
      ],
    });

  const [detailAsset, setDetailAsset] = useState<AssetDetailsIntialValues>({
    assetDetails: [
      {
        typeOfAsset: null,
        owner: "",
        authority: "",
        value: null,
        Details: "",
      },
    ],
  });

  const [referenceDetails, setReferenceDetails] =
    useState<ReferenceIntialValues>({
      references: [
        {
          name: "",
          contactNumber: null,
          address: "",
          referencePurpose: "",
          occupation: "",
          relationWithApplicant: "",
        },
      ],
    });

  const contextValue = {
    referenceDetails,
    setReferenceDetails,
    detailAsset,
    setDetailAsset,
    currentLoanDetails,
    setCurrentLoanDetails,
    personalDetails,
    setPersonalDetails,
    addressDetails,
    setAddressDetails,
    kycDetails,
    setKycDetails,
    familyDetails,
    setFamilyDetails,
    setBusinessDetails,
    businessDetails,
    isSubmitted,
    setIsSubmitted,
    selectValue,
    setSelectValue,
  };
  return (
    <>
      <FormContext.Provider value={contextValue}>
        {children}
      </FormContext.Provider>
    </>
  );
};

export default FormProvider;
