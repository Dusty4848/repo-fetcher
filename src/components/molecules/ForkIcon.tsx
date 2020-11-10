import React, { ReactElement } from 'react';
import forkIconSrc from '../../lib/assets/account_tree-24px.svg';
import { Image } from '../atoms/Image';

export const ForkIcon: React.FC = (): ReactElement => {
  return <Image width="13px" src={forkIconSrc} alt="shows fork icon" />;
};
