import { Country, State, City } from "country-state-city";
export const dropDownOptions = [
  {
    name: "Rented",
    value: "rented",
  },
  {
    name: "Owned",
    value: "owned",
  },
];

export const assetTypeOptions = [
  {
    name: "Type of Asset",
    value: "",
  },
  {
    name: "Home",
    value: "home",
  },
  {
    name: "Vehicle",
    value: "vehicle",
  },
  {
    name: "Property",
    value: "property",
  },
  {
    name: "Gold",
    value: "gold",
  },
  {
    name: "Business Equipments",
    value: "businessEquipments",
  },
];

export const registrationOption = [
  {
    name: "Select an Status Option",
    value: "",
  },
  {
    name: "Pending",
    value: "pending",
  },
  {
    name: "Completed",
    value: "completed",
  },
];

export const cityOptions = [
  {
    name: "Select a City",
    value: "",
  },
  {
    name: "Agra",
    value: "agra",
  },
  {
    name: "Jaipur",
    value: "jaipur",
  },
];

export const stateOptions = State.getStatesOfCountry("IN");
