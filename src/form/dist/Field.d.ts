import { FC, ComponentType } from "react";
export interface FieldProps extends Record<string, any> {
    component: ComponentType<any>;
    name: string;
}
export declare const Field: FC<FieldProps>;
