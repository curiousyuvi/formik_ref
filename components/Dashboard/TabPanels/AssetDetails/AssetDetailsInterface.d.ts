import { Dispatch, SetStateAction } from "react";

export type IntialValue = {
  typeOfAsset: number | null;
  owner: string;
  authority: string;
  value: number | null;
  Details: string;
};

export type AssetDetailsIntialValues = {
  assetDetails: IntialValue[];
};

export type Props = {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
};
