import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../atoms/Container';

export const CenterTemplate: React.FC = ({ children }): ReactElement => {
  return <Container centerContent>{children}</Container>;
};

CenterTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
