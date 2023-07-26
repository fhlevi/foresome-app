import React from 'react'
import clsx from 'clsx';
import { InputTextInterface, StyleByVariant } from 'utils/interfaces/input-text';

/**
 * InputText Component
 * @component
 * @category Components
 * @subcategory Forms
 */
export default function InputText({
    name, id, innerRef,
    isInvalid, errors = {},
    type = 'text', defaultValue = '', disabled, readOnly,
    label, placeholder, className, wrapperClassName, labelClassName,
    leftIcon, rightIcon, isControlled, variant = 'neutral',
    ...props
}: InputTextInterface) {
    const isError = isInvalid;

    const styleByVariant: StyleByVariant = {
        primary: "bg-green-800 text-white",
        neutral: "border border-white bg-transparent text-white placeholder:text-white",
        error: "",
    };

    const variantClassName = styleByVariant[variant as keyof StyleByVariant];

    return (
        <>
            <div className={clsx((disabled || readOnly) && 'opacity-50', wrapperClassName)}>
                {label && (
                    <label htmlFor={id || name} className={clsx('label', labelClassName)}>
                        {label}
                    </label>
                )}
                <div className="relative">
                    {leftIcon}
                    <input
                        type={type}
                        className={clsx('w-[474px] h-[60px] rounded-[5px] py-5 px-7', isError && 'border-error focus:border-error focus:ring-1 focus:ring-error', variantClassName, className)}
                        name={name}
                        ref={innerRef}
                        id={id || name}
                        disabled={disabled}
                        readOnly={readOnly}
                        defaultValue={isControlled ? undefined : defaultValue}
                        placeholder={placeholder}
                        maxLength={150}
                        tabIndex={readOnly || disabled ? -1 : undefined}
                        {...props}
                    />
                    {rightIcon}
                </div>
            </div>
        </>
    )
}
