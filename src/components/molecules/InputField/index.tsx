import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Field, FieldProps } from 'formik';
import { InputFieldProps } from './types';
import { Input } from '../../atoms/Input';
import { Box } from '../../atoms/Box';
import { ErrorMessage } from '../../atoms/ErrorMessage';

export const InputField = ({ name, label, disabled }: InputFieldProps): ReactElement => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps): ReactElement => {
        return (
          <Box position="relative">
            <Input
              id={name}
              name={name}
              type="text"
              onBlur={field.onBlur}
              onChange={field.onChange}
              value={field.value}
              disabled={disabled}
              placeholder={label}
            />
            {meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
          </Box>
        );
      }}
    </Field>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  disabled: false,
};
