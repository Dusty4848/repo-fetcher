import { ActionType, RepoLoading, Repo } from './types';
import { repoConstants } from './constants';

/**
 * Actions
 * Beschreibt was wir tun wollen
 */

export const setRepos = (payload: Repo[] = []): ActionType => ({
  type: repoConstants.REPO_SET_ALL,
  payload,
});

export const setLoading = (payload: RepoLoading = ''): ActionType => ({
  type: repoConstants.REPO_LOADING,
  payload,
});

export const erroredRepo = (payload = ''): ActionType => ({
  type: repoConstants.REPO_ERRORED,
  payload,
});

export const successRepo = (payload: RepoLoading = ''): ActionType => ({
  type: repoConstants.REPO_SUCCESS,
  payload,
});
