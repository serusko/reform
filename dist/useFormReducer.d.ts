import { Dispatch, MutableRefObject } from 'react';
import FormProps from './components/FormProps';
import { Data, FormState } from './context';
import { FormReducerAction, formReducerType } from './formReducer';
export default function useFormReducer<D extends Data>(formReducer: formReducerType<D>, initialValues: undefined | D, disabled: boolean, readOnly: boolean, onSubmitRef: MutableRefObject<FormProps<D>['onSubmit']>, onStateUpdateRef: MutableRefObject<FormProps<D>['onStateUpdate']>): [FormState<D>, Dispatch<FormReducerAction<D>>];
