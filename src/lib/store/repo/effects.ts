import { Dispatch } from 'redux';
import { apiGetRepos } from './services';
import { setLoading, erroredRepo, setRepos, successRepo } from './actions';
import { GetStateType } from '..';

export const attemptGetRepos = (
  username: string,
): ((dispatch: Dispatch, getState: GetStateType) => Promise<void>) => async (dispatch: Dispatch) => {
  try {
    dispatch(setLoading('repoGet'));
    const repos = await apiGetRepos(username);
    dispatch(setRepos(repos));
    dispatch(setLoading(''));
    dispatch(successRepo('repoGet'));
  } catch (_e) {
    dispatch(erroredRepo('An unknown Error has occured'));
    dispatch(setLoading(''));
  }
};
