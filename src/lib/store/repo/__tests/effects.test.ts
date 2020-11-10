import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import fetchMock from 'jest-fetch-mock';
import { RootState } from '../..';
import { repoConstants } from '../constants';
import * as effects from '../effects';

type DispatchExts = ThunkDispatch<RootState, void, AnyAction>;
const middleware = [thunk];
const mockStore = createMockStore<RootState, DispatchExts>(middleware);

describe('Repos - Effects', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('Effect - attemptGetRepos', () => {
    it('dispatches all actions correctly when successful', () => {
      // arrange
      expect.assertions(1);
      fetchMock.mockResponseOnce(
        JSON.stringify([
          {
            id: 1,
            full_name: 'my repo',
            html_url: 'https://github.com/1',
            stargazers_count: 1,
            forks_count: 0,
          },
        ]),
      );

      const expectedActions = [
        { type: repoConstants.REPO_LOADING, payload: 'repoGet' },
        {
          type: repoConstants.REPO_SET_ALL,
          payload: [
            {
              id: 1,
              full_name: 'my repo',
              html_url: 'https://github.com/1',
              stargazers_count: 1,
              forks_count: 0,
            },
          ],
        },
        { type: repoConstants.REPO_LOADING, payload: '' },
        { type: repoConstants.REPO_SUCCESS, payload: 'repoGet' },
      ];

      // act
      const store = mockStore();
      return store.dispatch(effects.attemptGetRepos('dusty')).then(() => {
        // assert
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('dispatches all actions correctly when not successful', () => {
      // arrange
      expect.assertions(1);
      fetchMock.mockResponse(async () => Promise.reject(new Error('Failed')));

      const expectedActions = [
        { type: repoConstants.REPO_LOADING, payload: 'repoGet' },
        { type: repoConstants.REPO_ERRORED, payload: 'An unknown Error has occured' },
        { type: repoConstants.REPO_LOADING, payload: '' },
      ];

      // act
      const store = mockStore();
      return store.dispatch(effects.attemptGetRepos('dusty')).then(() => {
        // assert
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
