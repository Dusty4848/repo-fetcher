import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { List } from '../../atoms/List';
import { Paper } from '../../atoms/Paper';
import { ListItemLink } from '../../atoms/ListItemLink';
import { PlaceholderBox } from '../../molecules/PlaceholderBox';
import { FindIcon } from '../../molecules/FindIcon';
import { RepoListProps } from './types';
import { ListSkeleton } from '../../molecules/ListSkeleton';
import { Typography } from '../../atoms/Typography';
import { Box } from '../../atoms/Box';
import { Divider } from '../../atoms/Divider';
import { ListItemText } from '../../atoms/ListItemText';
import { RepoIcon } from '../../molecules/RepoIcon';
import { IconCount } from '../../molecules/IconCount';
import { StarIcon } from '../../molecules/StarIcon';
import { ForkIcon } from '../../molecules/ForkIcon';

export const RepoList: React.FC<RepoListProps> = (props: RepoListProps): ReactElement => {
  const { repos, loading } = props;
  const isEmpty = repos.length === 0;

  return (
    <Paper p="10px" minHeight="350px" display="flex" flexDirection="column">
      {(!isEmpty || loading) && (
        <Box>
          <Typography as="h3">Results:</Typography>
        </Box>
      )}
      <Box
        flex="1"
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent={!isEmpty ? 'flex-start' : 'center'}
        alignItems={!isEmpty ? 'flex-start' : 'center'}
      >
        {loading ? (
          <ListSkeleton count={7} />
        ) : !isEmpty ? (
          <List>
            {repos.map((repo) => (
              <React.Fragment key={repo.id}>
                <ListItemLink href={repo.html_url} target="_blank">
                  <Box flex="2" display="flex" minWidth="0">
                    <RepoIcon />
                    <ListItemText>{repo.full_name}</ListItemText>
                  </Box>
                  <Box flex="1" display="flex" justifyContent="flex-end" alignItems="center">
                    <IconCount amount={repo.forks_count} icon={<ForkIcon />} />
                    <IconCount amount={repo.stargazers_count} icon={<StarIcon />} />
                  </Box>
                </ListItemLink>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        ) : (
          <PlaceholderBox title="No Repositories Yet" icon={<FindIcon />}>
            If you haven&apos;t done already, try typing a different username in the above input
          </PlaceholderBox>
        )}
      </Box>
    </Paper>
  );
};

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      full_name: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      forks_count: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
RepoList.defaultProps = {};
