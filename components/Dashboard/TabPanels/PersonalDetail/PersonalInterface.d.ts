export type intialValuesProps = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobileNumber: number | null;
  dateOfBirth: number | null;
};

export type Props = {
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
};
