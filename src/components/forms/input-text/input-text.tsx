import React from 'react'
import clsx from 'clsx';
import { InputTextInterface, StyleByVariant } from 'utils/interfaces/input-text';
import { resolvePath } from 'helpers/object';

/**
 * InputText Component
 * @component
 * @category Components
 * @subcategory Forms
 */
export default function InputText({
    name = '', id, innerRef,
    isInvalid, errors = {},
    type = 'text', defaultValue = '', disabled, readOnly,
    label, placeholder, className, wrapperClassName, labelClassName,
    leftIcon, rightIcon, isControlled, variant = 'neutral',
    ...props
}: InputTextInterface) {
    const errorMsg = resolvePath(errors, name)?.message;
    const isError = isInvalid ?? errorMsg;

    const styleByVariant: StyleByVariant = {
        primary: "border border-[#176B3A] bg-transparent text-[#3D3D3D] placeholder:text-[#3D3D3D]",
        neutral: "border border-white bg-transparent text-white placeholder:text-white",
    };

    const variantClassName = styleByVariant[variant as keyof StyleByVariant];

    return (
        <>
            <div className={clsx((disabled || readOnly) && 'opacity-50', wrapperClassName)}>
                {label && (
                    <label htmlFor={id ?? name} className={clsx('label', labelClassName)}>
                        {label}
                    </label>
                )}
                <div className="relative">
                    {leftIcon}
                    <input
                        type={type}
                        className={clsx('rounded-[5px] py-4 px-7 focus:outline-none', isError && 'border !border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600', variantClassName, className)}
                        name={name}
                        id={id ?? name}
                        disabled={disabled}
                        readOnly={readOnly}
                        defaultValue={isControlled ? undefined : defaultValue}
                        placeholder={placeholder}
                        maxLength={150}
                        tabIndex={readOnly || disabled ? -1 : undefined}
                        {...props}
                        {...innerRef}
                    />
                    {rightIcon}
                    {isError && <div className="text-sm text-red-600 mt-1">{errorMsg}</div>}
                </div>
            </div>
        </>
    )
}
