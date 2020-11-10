import React, { ReactElement } from 'react';
import clearIconSrc from '../../lib/assets/clear-24px.svg';
import { Image } from '../atoms/Image';

export const ClearIcon: React.FC = (): ReactElement => {
  return <Image src={clearIconSrc} alt="shows clear icon" />;
};
