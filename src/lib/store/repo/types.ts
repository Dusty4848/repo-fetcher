/* eslint-disable camelcase */

import { repoConstants } from './constants';

export type Repo = {
  id: number;
  full_name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
};

export type RepoState = {
  repos: Repo[];
  problem: string;
  loading: RepoLoading;
  success: RepoLoading;
};

export type RepoLoading = '' | 'repoGet';

export type ActionType =
  | { type: repoConstants.REPO_SET_ALL; payload: Repo[] }
  | { type: repoConstants.REPO_LOADING; payload: RepoLoading }
  | { type: repoConstants.REPO_ERRORED; payload: string }
  | { type: repoConstants.REPO_SUCCESS; payload: RepoLoading };
