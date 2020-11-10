import * as actions from '../actions';
import { repoConstants } from '../constants';
import { Repo } from '../types';

describe('Repo - Actions', () => {
  /**
   * REPO_SET_ALL
   */
  describe('REPO_SET_ALL', () => {
    it('should create an action to set repos', () => {
      const payload = [
        {
          id: 1,
          full_name: 'my repo',
          html_url: 'https://github.com/1',
          stargazers_count: 1,
          forks_count: 0,
        },
      ];
      const expectedAction = {
        type: repoConstants.REPO_SET_ALL,
        payload,
      };
      expect(actions.setRepos(payload)).toEqual(expectedAction);
    });

    it('should create an action to stop loading repo', () => {
      const payload: Repo[] = [];
      const expectedAction = {
        type: repoConstants.REPO_SET_ALL,
        payload,
      };
      expect(actions.setRepos()).toEqual(expectedAction);
    });
  });

  /**
   * REPO_LOADING
   */
  describe('REPO_LOADING', () => {
    it('should create an action to load repo', () => {
      const payload = 'repoGet';
      const expectedAction = {
        type: repoConstants.REPO_LOADING,
        payload,
      };
      expect(actions.setLoading(payload)).toEqual(expectedAction);
    });

    it('should create an action to stop loading repo', () => {
      const payload = '';
      const expectedAction = {
        type: repoConstants.REPO_LOADING,
        payload,
      };
      expect(actions.setLoading()).toEqual(expectedAction);
    });
  });

  /**
   * REPO_ERRORED
   */
  describe('REPO_ERRORED', () => {
    it('should create an action to error repo', () => {
      const payload = '';
      const expectedAction = {
        type: repoConstants.REPO_ERRORED,
        payload,
      };
      expect(actions.erroredRepo()).toEqual(expectedAction);
    });

    it('should create an action to stop error repo', () => {
      const payload = 'Error happend';
      const expectedAction = {
        type: repoConstants.REPO_ERRORED,
        payload,
      };
      expect(actions.erroredRepo(payload)).toStrictEqual(expectedAction);
    });
  });

  /**
   * REPO_SUCCESS
   */
  describe('REPO_SUCCESS', () => {
    it('should create an action to success repo', () => {
      const payload = 'repoGet';
      const expectedAction = {
        type: repoConstants.REPO_SUCCESS,
        payload,
      };
      expect(actions.successRepo('repoGet')).toEqual(expectedAction);
    });
    it('should create an action to stop success repo', () => {
      const payload = '';
      const expectedAction = {
        type: repoConstants.REPO_SUCCESS,
        payload,
      };
      expect(actions.successRepo()).toEqual(expectedAction);
    });
  });
});
