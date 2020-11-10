import { handleResponse, httpRequest } from '../../../httpClient';
import { Repo } from '../types';

export const apiGetRepos = (username: string): Promise<Repo[]> =>
  httpRequest
    .get(`/users/${username}/repos`, {
      headers: { accept: 'application/vnd.github.v3+json' },
      query: { sort: 'full_name' },
    })
    .then((res) => handleResponse<Repo[]>(res))
    .catch();
