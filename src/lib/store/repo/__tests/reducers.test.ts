import { repoReducer } from '../reducer';
import { repoConstants } from '../constants';
import { ActionType, RepoState } from '../types';

describe('repoReducer', () => {
  let initialState: RepoState;
  beforeEach(() => {
    initialState = {
      repos: [],
      problem: '',
      loading: '',
      success: '',
    };
  });

  it('should return the initial state', () => {
    expect(repoReducer(undefined, ({ type: '' } as unknown) as ActionType)).toEqual(initialState);
  });

  /**
   * REPO_SET_ALL
   */
  it('should handle REPO_SET_ALL', () => {
    const payload = [
      {
        id: 1,
        full_name: 'my repo',
        html_url: 'https://github.com/1',
        stargazers_count: 1,
        forks_count: 0,
      },
    ];
    expect(
      repoReducer(initialState, {
        type: repoConstants.REPO_SET_ALL,
        payload,
      }),
    ).toEqual({ ...initialState, repos: payload });

    expect(
      repoReducer(initialState, {
        type: repoConstants.REPO_SET_ALL,
        payload: [],
      }),
    ).toEqual({ ...initialState, repos: [] });
  });

  /**
   * REPO_LOADING
   */
  it('should handle REPO_LOADING', () => {
    expect(
      repoReducer(initialState, {
        type: repoConstants.REPO_LOADING,
        payload: 'repoGet',
      }),
    ).toEqual({ ...initialState, loading: 'repoGet' });

    expect(
      repoReducer(initialState, {
        type: repoConstants.REPO_LOADING,
        payload: '',
      }),
    ).toEqual({ ...initialState, loading: '' });
  });

  /**
   * REPO_ERRORED
   */
  it('should handle REPO_ERRORED', () => {
    expect(
      repoReducer(initialState, {
        type: repoConstants.REPO_ERRORED,
        payload: 'error',
      }),
    ).toEqual({ ...initialState, problem: 'error' });

    expect(
      repoReducer(initialState, {
        type: repoConstants.REPO_ERRORED,
        payload: '',
      }),
    ).toEqual({ ...initialState, problem: '' });
  });

  /**
   * REPO_SUCCESS
   */
  it('should handle REPO_SUCCESS', () => {
    expect(
      repoReducer(initialState, {
        type: repoConstants.REPO_SUCCESS,
        payload: 'repoGet',
      }),
    ).toEqual({ ...initialState, success: 'repoGet' });

    expect(
      repoReducer(initialState, {
        type: repoConstants.REPO_SUCCESS,
        payload: '',
      }),
    ).toEqual({ ...initialState, success: '' });
  });
});
