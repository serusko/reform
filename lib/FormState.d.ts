/**
 * Form state context type
 */
export default interface FormState<D extends Data = Data> {
  /**
   * control if all form should be disabled
   */
  disabled: boolean;

  /**
   * Override default disabled state
   * - if global is yes (true) -> choose those which could be edited
   * - if global is no (false/undefined) -> disable some specific fields
   * you can set all ("disabled") to true and manually set some to false and vice-versa
   * its override for global setting
   */
  disabledFields: Record<string, boolean>;

  /**
   * Error map
   * [fieldName]: "error message"
   */
  errors: FormErrors;

  /**
   * Initial data cst from parent
   * every time they changed, "init" action should be triggered
   * so keep it memoized
   */
  initialValues: D;
  /**
   * if onSubmit is Promise, Form is tracking promise
   */

  isSubmitting?: boolean;

  /**
   * Map of required fields
   * so we can display *
   * or use some other way
   * to let user know which fields are required
   */

  required: Record<string, boolean>;
  /**
   * Number of times of successful submit (valid data submitted)
   */

  submitted: number;
  /**
   * Fields touched by human interactions
   * - collected mostly via onBlur event,
   * - could be implemented by onChange (depends on input)
   */

  touched: Record<string, boolean>;
  /**
   * Register single fields which has being validated asynchronously
   * - could be used as remark for blocking submitting = wait until ready
   *
   */

  validatingFields: Record<string, boolean>;

  /**
   * Form data values
   * could be nested object, we use dot chain to select specific value
   * like: "tebName.paperCard.fieldSet.paramName" or "tabName.arrayTable.3.name" for arrays
   */
  values: D;
}
