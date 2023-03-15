/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProyectoCreateFormInputValues = {
    name?: string;
    description?: string;
    status?: boolean;
    field?: string;
};
export declare type ProyectoCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    field?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProyectoCreateFormOverridesProps = {
    ProyectoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    field?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ProyectoCreateFormProps = React.PropsWithChildren<{
    overrides?: ProyectoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProyectoCreateFormInputValues) => ProyectoCreateFormInputValues;
    onSuccess?: (fields: ProyectoCreateFormInputValues) => void;
    onError?: (fields: ProyectoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProyectoCreateFormInputValues) => ProyectoCreateFormInputValues;
    onValidate?: ProyectoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProyectoCreateForm(props: ProyectoCreateFormProps): React.ReactElement;
