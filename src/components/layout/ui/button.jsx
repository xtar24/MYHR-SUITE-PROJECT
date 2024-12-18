
// Reusable Button component
const Button = ({
  text,
  onClick,
  type = "button",
  color = "blue",
  size = "md",
  disabled = false,
}) => {
  // Tailwind classes for different colors and sizes
  const colorClasses = {
    orange: "bg-orange-500 hover:bg-orange-600 text-white",
    red: "bg-red-500 hover:bg-red-600 text-white",
    green: "bg-green-500 hover:bg-green-600 text-white",
    gray: "bg-gray-500 hover:bg-gray-600 text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${colorClasses[color] || colorClasses.blue} ${
        sizeClasses[size] || sizeClasses.md
      } rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
