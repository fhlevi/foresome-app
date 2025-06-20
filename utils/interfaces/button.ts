export interface StyleBySize extends Record<string, string> {}

export interface StyleByVariant extends Record<string, string> {}

export interface ButtonProps {
  onClick?: (params: any) => void;
  className?: string;
  label?: string;
  outline?: boolean;
  variant?: "primary" | "neutral" | "error";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}
