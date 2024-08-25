import React, { useId } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "0.25rem",
    borderColor: "#333", 
    backgroundColor: "#f9f9f9",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.1)", 
    "&:hover": {
      borderColor: "#666",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "0.5rem 1rem",
    color: state.isSelected ? "white" : "#333", 
    backgroundColor: state.isFocused
      ? "rgba(70, 130, 180, 0.8)" 
      : state.isSelected
      ? "#4682B4" 
      : "white", 
    "&:hover": {
      backgroundColor: "rgba(70, 130, 180, 0.3)", 
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.25rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff", 
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#666", 
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333",
  }),
};

const Dropdown = ({
  options,
  onChange,
  isDisabled,
  selectedValue,
  className,
}) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      isDisabled={isDisabled}
      styles={customStyles}
      instanceId={useId()}
      className={className}
      value={options.find(
        (option) =>
          option.label === selectedValue || option.value === selectedValue
      )}
    />
  );
};

export default Dropdown;
