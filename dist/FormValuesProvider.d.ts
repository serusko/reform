import { FC, PropsWithChildren } from 'react';
import { Data } from './context';
interface Props extends PropsWithChildren {
    disabled?: boolean;
    values: Data;
}
/**
 * Simple helper for providing form values when we don't need to have setup whole form env, we just need to read values from context
 * so Field components could be reused for Read-only purpose
 */
declare const FormValuesProvider: FC<Props>;
export default FormValuesProvider;
