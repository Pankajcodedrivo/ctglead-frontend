import * as React from "react";

interface Props {
  type?: "button" | "submit";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  type = "button",
  onClick,
  outline = false,
  children,
}) => {
  const baseStyle: React.CSSProperties = {
    padding: "10px 20px",
    fontSize: "14px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    background: outline ? "transparent" : "#0d6efd",
    color: outline ? "#0d6efd" : "#ffffff",
    border: outline ? "2px solid #0d6efd" : "none",
  };

  return (
    <button type={type} onClick={onClick} style={baseStyle}>
      {children}
    </button>
  );
};

export default Button;
