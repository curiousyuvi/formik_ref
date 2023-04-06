import Input from "./FieldComponents/Input";
import React from "react";
import TextArea from "./FieldComponents/TextArea";
import Select from "./FieldComponents/Select";
import RadioButton from "./FieldComponents/RadioButton";
import FileInput from "./FieldComponents/FileInput";
import { Base64File } from "@/components/Dashboard/TabPanels/KycDetails/KycInterface";
type Props = {
  control: string;
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  options?: any;
  onChange?: (e: any) => void;
  value?: any;
  accept?: any;
  id?: string;
  multiple?: boolean;
};

const FormControl = (props: Props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "file":
      return <FileInput {...rest} />;
    case "checkbox":
    case "date":
    default:
      return <></>;
  }
};

export default FormControl;
