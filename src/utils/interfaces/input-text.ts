import { ReactNode } from "react";

export interface StyleByVariant {
    [key: string]: string;
}

export interface InputTextInterface {
    name?: Required<string>;
    id?: string;
    innerRef?: any;
    isInvalid?: boolean | string
    errors?: object;
    type?: string;
    defaultValue?: string | number;
    disabled?: boolean;
    readOnly?: boolean;
    label?: string;
    placeholder?: string;
    className?: string;
    wrapperClassName?: string;
    labelClassName?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    isControlled?: boolean;
    variant?: string;
}