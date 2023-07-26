export interface StyleBySize {
  [key: string]: string;
}

export interface StyleByVariant {
  [key: string]: string;
}

export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  label: string;
  outline: boolean;
  variant: "primary" | "neutral" | "error";
  size: "sm" | "md" | "lg";
  disabled: boolean;
  type: "button" | "submit" | "reset";
}
