/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CoordinadorCreateFormInputValues = {
    name?: string;
    mail?: string;
};
export declare type CoordinadorCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    mail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoordinadorCreateFormOverridesProps = {
    CoordinadorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    mail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CoordinadorCreateFormProps = React.PropsWithChildren<{
    overrides?: CoordinadorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CoordinadorCreateFormInputValues) => CoordinadorCreateFormInputValues;
    onSuccess?: (fields: CoordinadorCreateFormInputValues) => void;
    onError?: (fields: CoordinadorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoordinadorCreateFormInputValues) => CoordinadorCreateFormInputValues;
    onValidate?: CoordinadorCreateFormValidationValues;
} & React.CSSProperties>;
export default function CoordinadorCreateForm(props: CoordinadorCreateFormProps): React.ReactElement;
