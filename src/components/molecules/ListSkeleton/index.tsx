import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../atoms/List';
import { ListItemSkeleton } from '../../atoms/ListItemSkeleton';
import { ListSkeletonProps } from './types';

export const ListSkeleton: React.FC<ListSkeletonProps> = (props: ListSkeletonProps): ReactElement => {
  const { count } = props;
  return (
    <List>
      {[...Array(count)].map((_undefined, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ListItemSkeleton data-testid={`loading-skeleton-${index}`} key={index} />
      ))}
    </List>
  );
};

ListSkeleton.propTypes = {
  count: PropTypes.number.isRequired,
};
