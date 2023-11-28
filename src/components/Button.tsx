const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  onClick,
  large,
  disabled,
  outline,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        test-btn 
        ${disabled ? "disable" : "allowed"}
        ${secondary ? "bg-white" : "bg-twitter"}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
