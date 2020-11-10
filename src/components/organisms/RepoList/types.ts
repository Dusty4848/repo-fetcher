import { Repo } from '../../../lib/store/repo/types';

export type RepoListProps = {
  repos: Repo[];
  loading: boolean;
};
