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
    <button disabled={disabled} onClick={onClick} className="test-btn">
      {label}
    </button>
  );
};

export default Button;
