import React from "react";
import { Select } from "antd";
import { SelectProps } from "antd/es/select";

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface CustomSelectProps  {
  id: string;
  name: string;
  value: string;
  defaultValue: string;
  options: Option[];
  onChange: (name: string, value: string) => void;
  onBlur?: (name: string, e: React.FocusEvent<HTMLElement>) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  name,
  value,
  defaultValue,
  options,
  onChange,
  onBlur,
  ...restProps
}) => {
  const handleChange = (newValue: string) => {
    onChange(name, newValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    if (onBlur) {
      onBlur(name, e);
    }
  };

  return (
    <Select
      id={id}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      onBlur={handleBlur}
      options={options}
      {...restProps}
    />
  );
};

export default CustomSelect;
