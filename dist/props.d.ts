import { Data, FormState } from './context';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export interface Props<D extends Data = Data> {
  children?: ReactNode;
  className?: string;

  /**
   * Default disabled status - could be overridden by specific field
   */
  disabled?: boolean;

  /**
   * Define specific fields with disabled state
   */
  disabledFields?: Record<string, boolean>;

  id?: string;

  /**
   * Keep memoized, so on change, state will be recalculated, revalidated...
   */
  initialValues?: D;

  /**
   * Handle submit
   */
  onSubmit?: (data: D, { dispatch: any }) => void | Promise<unknown>; // TODO: !!!!

  /**
   * Form state reducer = check default formReducer for docs
   */
  reducer?: Reducer<D>;

  /**
   * Validation schema = one time initialization = use custom reducer to change schema
   */
  validation?: FormState['validation'];
}
