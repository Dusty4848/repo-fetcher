import React, { ReactElement, useEffect } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { CenterTemplate } from '../../components/templates/CenterTemplate';
import { Typography } from '../../components/atoms/Typography';
import { RepoFinderForm } from '../../components/organisms/RepoFinderForm';
import { RepoFinderFormValues } from '../../components/organisms/RepoFinderForm/types';
import { RepoList } from '../../components/organisms/RepoList';
import { attemptGetRepos } from '../../lib/store/repo/effects';
import { setRepos } from '../../lib/store/repo/actions';
import { RootState } from '../../lib/store';

export const RepoFinderPage: React.FC = (): ReactElement => {
  const reduxDispatch = useDispatch();
  const { username } = useParams<{ username?: string }>();
  const history = useHistory();
  const { repos, loading } = useSelector((state: RootState) => state.repo);

  useEffect(() => {
    if (username) reduxDispatch(attemptGetRepos(username));
  }, [username, reduxDispatch]);

  const handleClear = () => {
    history.replace('');
    reduxDispatch(setRepos());
  };

  const handleSubmit = (values: RepoFinderFormValues) => {
    reduxDispatch(attemptGetRepos(values.username));
    history.replace(values.username);
  };

  return (
    <CenterTemplate>
      <Grid>
        <Row center="xs">
          <Col xs={12} sm={8}>
            <Typography align="center" as="h1">
              Find a Repo
            </Typography>
            <Typography align="center">
              Start by typing a GitHub username. Hit submit to show the users repositories
            </Typography>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} sm={8}>
            <RepoFinderForm
              initialValues={username ? { username } : undefined}
              loading={loading === 'repoGet'}
              handleClear={handleClear}
              handleSubmit={handleSubmit}
            />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} sm={8}>
            <RepoList repos={repos} loading={loading === 'repoGet'} />
          </Col>
        </Row>
      </Grid>
    </CenterTemplate>
  );
};
