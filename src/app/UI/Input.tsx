

import React from "react";
import { Input } from "antd";

interface CustomInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  value?: string;
  name?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ onChange, onBlur, placeholder, value, name }) => {
  return <Input onChange={onChange} onBlur={onBlur} placeholder={placeholder} value={value} name={name} className="w-full"/>;
};

export default CustomInput;