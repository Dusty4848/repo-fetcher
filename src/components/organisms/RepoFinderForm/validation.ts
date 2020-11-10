import { FormikErrors } from 'formik';
import { RepoFinderFormValues } from './types';

export const validateForm = (values: RepoFinderFormValues): FormikErrors<RepoFinderFormValues> => {
  const errors: FormikErrors<RepoFinderFormValues> = {};

  if (!values.username) {
    errors.username = 'The username is required';
  }

  return errors;
};
