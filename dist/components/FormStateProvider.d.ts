import { FC, PropsWithChildren } from 'react';
import { Data, FormState } from '../context';
interface Props<D extends Data = Data> extends PropsWithChildren {
    /**
     * Override disabled status
     */
    disabled?: boolean;
    /**
     * Configure custom Form state
     */
    state?: FormState<D>;
    /**
     *  Override values
     */
    values?: D;
}
/**
 * Provide form state context
 * - provide static form state so values could be displayed as "view mode"
 */
declare const FormStateProvider: FC<Props>;
export default FormStateProvider;
