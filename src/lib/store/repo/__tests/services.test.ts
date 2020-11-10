import { handleResponse, httpRequest } from '../../../httpClient';

import { apiGetRepos } from '../services';

jest.mock('../../../httpClient', () => ({
  __esModule: true,
  httpRequest: {
    get: jest.fn(async () => Promise.resolve({})),
  },
  handleResponse: jest.fn(),
}));

describe('Repo - Services', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  /**
   * apiGetRepos
   */
  it('apiGetRepos - should be called with value', async () => {
    // arrange
    expect.assertions(2);
    (httpRequest.get as jest.Mock).mockImplementation(async () => Promise.resolve({ key: 'value' }));
    // act
    await apiGetRepos('dusty');

    // assert
    expect(httpRequest.get).toHaveBeenCalledWith('/users/dusty/repos', {
      headers: { accept: 'application/vnd.github.v3+json' },
      query: { sort: 'full_name' },
    });
    expect(handleResponse).toHaveBeenCalledWith({ key: 'value' });
  });
});
