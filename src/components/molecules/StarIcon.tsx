import React, { ReactElement } from 'react';
import starIconSrc from '../../lib/assets/star_outline-24px.svg';
import { Image } from '../atoms/Image';

export const StarIcon: React.FC = (): ReactElement => {
  return <Image width="15px" src={starIconSrc} alt="shows star icon" />;
};
