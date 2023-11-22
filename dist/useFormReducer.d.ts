import { Dispatch, MutableRefObject } from 'react';
import FormProps from './components/FormProps';
import { FormReducerAction, formReducerType } from './formReducer';
import { Data, FormState } from '.';
export default function useFormReducer<D extends Data>(formReducer: formReducerType<D>, initialValues: undefined | D, disabled: boolean, onSubmitRef: MutableRefObject<FormProps<D>['onSubmit']>, onStateUpdateRef: MutableRefObject<FormProps<D>['onStateUpdate']>): [FormState<D>, Dispatch<FormReducerAction<D>>];
