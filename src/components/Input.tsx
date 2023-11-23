import { IconType } from "react-icons";

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type = "text",
  onChange,
  disabled,
  label,
}) => {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
