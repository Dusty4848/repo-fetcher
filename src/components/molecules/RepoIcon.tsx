import React, { ReactElement } from 'react';
import repoIconSrc from '../../lib/assets/library_books-24px.svg';
import { Image } from '../atoms/Image';

export const RepoIcon: React.FC = (): ReactElement => {
  return <Image width="15px" style={{ marginRight: '5px' }} src={repoIconSrc} alt="shows repository icon" />;
};
