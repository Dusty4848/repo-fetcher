import React, { ReactElement } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { InputField } from '../../molecules/InputField';
import { PrimaryButton } from '../../atoms/PrimaryButton';
import { Box } from '../../atoms/Box';
import { IconButton } from '../../atoms/IconButton';
import { ClearIcon } from '../../molecules/ClearIcon';
import { RepoFinderFormProps } from './types';
import { validateForm } from './validation';

export const RepoFinderForm: React.FC<RepoFinderFormProps> = (props: RepoFinderFormProps): ReactElement => {
  const { handleSubmit, handleClear, initialValues, loading } = props;

  return (
    <Formik
      enableReinitialize
      validate={validateForm}
      initialValues={initialValues || { username: '' }}
      onSubmit={handleSubmit}
    >
      {({ resetForm }) => {
        const clearForm = () => {
          resetForm();
          handleClear();
        };

        return (
          <Form>
            <Box m="25px 0">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Box m="0 10px 0 0" flex="0">
                  <IconButton disabled={loading} edge="left" type="button" onClick={clearForm}>
                    <ClearIcon />
                  </IconButton>
                </Box>
                <Box m="0 10px 0 0" flex="1">
                  <InputField name="username" label="GitHub Username" />
                </Box>
                <Box flex="0">
                  <PrimaryButton disabled={loading} type="submit">
                    Find
                  </PrimaryButton>
                </Box>
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

RepoFinderForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};
