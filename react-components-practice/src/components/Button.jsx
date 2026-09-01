/**
 * Reusable Button component with variant support.
 *
 * Props:
 *   text     – button label (string)
 *   type     – HTML button type: "button" | "submit" | "reset"
 *   variant  – visual style: "primary" | "secondary" | "danger"
 *   onClick  – click handler function
 *   disabled – whether the button is disabled (boolean)
 */
function Button({
  text = "Click",
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
