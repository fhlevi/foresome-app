import clsx from 'clsx';
import { ButtonProps, StyleBySize, StyleByVariant } from "utils/interfaces/button";


/**
 * Button Component
 * @component
 * @category Components
 * @subcategory Commons
 */
export default function Button({
    type = "button", onClick, disabled, size = "md", 
    variant = "primary", outline, label, className, 
    ...props
}: ButtonProps) {
    
    const styleBySize: StyleBySize = {
      sm: "btn--sm",
      lg: "w-[303.69px] h-[49px]",
      md: "w-[169px] h-[49px]",
    };

    const styleByVariant: StyleByVariant = {
      primary: outline ? "btn-outline--primary" : "bg-green-800 text-white",
      neutral: outline ? "btn-outline--neutral" : " bg-white text-green-800",
      error: outline ? "btn-outline--error" : "btn--error",
    };

    const sizeClassName = styleBySize[size as keyof StyleBySize];
    const variantClassName = styleByVariant[variant as keyof StyleByVariant];

    return (
      <button
        type={type}
        className={clsx("px-[49px] py-[15px] rounded-[5px] justify-center items-center gap-2.5 inline-flex text-base", sizeClassName, variantClassName, className)}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
}
