import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { IconCountProps } from './types';
import { Box } from '../../atoms/Box';
import { Indicator } from '../../atoms/Indicator';

export const IconCount: React.FC<IconCountProps> = (props: IconCountProps): ReactElement => {
  const { icon, amount } = props;
  return (
    <Box m="0 5px" display="flex" justifyContent="center" alignItems="center">
      <Indicator>{amount}</Indicator>
      {icon}
    </Box>
  );
};

IconCount.propTypes = {
  amount: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
};
