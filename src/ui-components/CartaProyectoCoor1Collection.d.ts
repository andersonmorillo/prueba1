/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CartaProyectoCoor1Props } from "./CartaProyectoCoor1";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartaProyectoCoor1CollectionOverridesProps = {
    CartaProyectoCoor1Collection?: PrimitiveOverrideProps<CollectionProps>;
    CartaProyectoCoor1?: CartaProyectoCoor1Props;
} & EscapeHatchProps;
export declare type CartaProyectoCoor1CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => CartaProyectoCoor1Props;
} & {
    overrides?: CartaProyectoCoor1CollectionOverridesProps | undefined | null;
}>;
export default function CartaProyectoCoor1Collection(props: CartaProyectoCoor1CollectionProps): React.ReactElement;
