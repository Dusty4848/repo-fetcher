import React, { ReactElement } from 'react';
import findIconSrc from '../../lib/assets/search-24px.svg';
import { Image } from '../atoms/Image';

export const FindIcon: React.FC = (): ReactElement => {
  return <Image width="150px" src={findIconSrc} alt="shows find icon" />;
};
