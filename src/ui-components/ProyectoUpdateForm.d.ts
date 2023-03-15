/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Proyecto } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProyectoUpdateFormInputValues = {
    name?: string;
    description?: string;
    status?: boolean;
    field?: string;
};
export declare type ProyectoUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    field?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProyectoUpdateFormOverridesProps = {
    ProyectoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    field?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ProyectoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProyectoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    proyecto?: Proyecto;
    onSubmit?: (fields: ProyectoUpdateFormInputValues) => ProyectoUpdateFormInputValues;
    onSuccess?: (fields: ProyectoUpdateFormInputValues) => void;
    onError?: (fields: ProyectoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProyectoUpdateFormInputValues) => ProyectoUpdateFormInputValues;
    onValidate?: ProyectoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProyectoUpdateForm(props: ProyectoUpdateFormProps): React.ReactElement;
