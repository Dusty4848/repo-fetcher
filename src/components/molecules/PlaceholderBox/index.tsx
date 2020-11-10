import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../../atoms/Box';
import { Typography } from '../../atoms/Typography';
import { PlaceholderBoxProps } from './types';

export const PlaceholderBox: React.FC<PlaceholderBoxProps> = (props: PlaceholderBoxProps): ReactElement => {
  const { title, children, icon } = props;
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {icon}
      <Typography align="center" as="h2">
        {title}
      </Typography>
      <Typography as="span" align="center">
        {children}
      </Typography>
    </Box>
  );
};

PlaceholderBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  icon: PropTypes.element,
};

PlaceholderBox.defaultProps = {
  icon: null,
};
