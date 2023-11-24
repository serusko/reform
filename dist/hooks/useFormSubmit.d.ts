type SubmitForm = (() => void) & [boolean, boolean, () => void];
/**
 * Submit helper to trigger form Submit action
 * - Returns 2 types same time
 * 1. callback to trigger submit action
 * 2. tuple [boolean, boolean, ()=>void] - [submitting status, validating status, dispatch submit fn]
 * - TODO: think about passing callback - onSubmit
 */
export default function useFormSubmit(): SubmitForm;
export {};
