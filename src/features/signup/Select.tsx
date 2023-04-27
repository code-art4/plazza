import Select from "react-select";

type props = {
  onChange: (e: any) => any;
  value?: string;
};
const SignupSelect = ({ onChange }: props) => {
  const options = [
    { value: "User", label: "User" },
    { value: "Vendor", label: "Vendor" },
  ];

  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: state.isSelected ? "#fff" : "#000",
      width: "100%",
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      paddingTop: "0.49rem",
      paddingBottom: "0.49rem",
      borderRadius: ".5rem",
      paddingLeft: ".8rem",
      border: "1px solid #A5A5A5",
      boxShadow: "none",
      color: "black",
    }),
    singleValue: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#A5A5A5",
    }),
    input: (defaultStyles: any) => ({
      ...defaultStyles,
      color: "#fff",
      padding: 0,
    }),
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      className="w-full"
      onChange={(e) => onChange(e)}
    />
  );
};

export default SignupSelect;
