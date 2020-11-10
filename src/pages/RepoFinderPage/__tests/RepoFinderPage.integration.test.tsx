/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import { RepoFinderPage } from '../index';
import { render, screen, waitFor } from '../../../lib/__test-utils';
import * as repoActions from '../../../lib/store/repo/actions';

describe('Page Integration Test: RepoFinderPage', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should show intro text', async () => {
    // arrange
    render(<RepoFinderPage />);
    // act
    // assert
    expect(screen.getByText('Find a Repo')).not.toBe(null);
    expect(screen.getByText('Start by typing a GitHub username. Hit submit to show the users repositories')).not.toBe(
      null,
    );
  });

  it('should show placeholder text if no repos', async () => {
    // arrange
    render(<RepoFinderPage />);
    // act
    // assert
    expect(screen.getByText('No Repositories Yet')).not.toBe(null);
  });

  it('should show loading skeleton if loading', async () => {
    // arrange
    render(<RepoFinderPage />, { repo: { repos: [], loading: 'repoGet' } });
    // act
    // assert
    expect(screen.getByTestId('loading-skeleton-0')).not.toBe(null);
    expect(screen.getByTestId('loading-skeleton-1')).not.toBe(null);
  });

  it('should not submit when button disabled', async () => {
    // arrange
    fetchMock.mockResponseOnce(JSON.stringify({}));
    render(<RepoFinderPage />, { repo: { repos: [], loading: 'repoGet' } });
    const submitButton = screen.getByRole('button', { name: /Find/i });
    const usernameInput = screen.getByPlaceholderText('GitHub Username');

    // act
    userEvent.type(usernameInput, 'facebook');
    userEvent.click(submitButton);

    // assert
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('should show error when input dirty but form submitted', async () => {
    // arrange
    render(<RepoFinderPage />);
    const submitButton = screen.getByRole('button', { name: /Find/i });

    // act
    userEvent.click(submitButton);

    // assert
    await waitFor(() => {
      expect(screen.getByText('The username is required')).not.toBe(null);
    });
  });

  it('should submit form and and shows repo list', async () => {
    // arrange
    fetchMock.mockResponse(async () =>
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
    const successRepoSpy = jest.spyOn(repoActions, 'successRepo');
    render(<RepoFinderPage />);

    const submitButton = screen.getByRole('button', { name: /Find/i });
    const usernameInput = screen.getByPlaceholderText('GitHub Username');

    // act
    userEvent.type(usernameInput, 'facebook');
    userEvent.click(submitButton);

    // assert
    await waitFor(() => {
      expect(successRepoSpy).toHaveBeenCalledWith('repoGet');
      // expect(screen.getByText('init:pages.login.content.success')).not.toBe(null);
    });
    expect(screen.getByText('my repo')).not.toBe(null);
  });

  it('should clear list and input when clear button clicked', async () => {
    // arrange
    fetchMock.mockResponseOnce(JSON.stringify({}));
    render(<RepoFinderPage />, {
      repo: {
        repos: [
          {
            id: 1,
            full_name: 'my repo',
            html_url: 'https://github.com/1',
            stargazers_count: 1,
            forks_count: 0,
          },
        ],
        loading: '',
      },
    });
    const clearButton = screen.getByRole('button', { name: /Clear/i });

    const usernameInput = screen.getByPlaceholderText('GitHub Username');

    // act
    userEvent.type(usernameInput, 'facebook');

    // assert
    await waitFor(() => {
      expect(screen.getByText('my repo')).not.toBe(null);
    });

    // act
    userEvent.click(clearButton);

    // assert
    await waitFor(() => {
      expect(screen.queryByText('my repo')).toBe(null);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const modifiedUsernameInput: any = screen.getByPlaceholderText('GitHub Username');
    expect(modifiedUsernameInput.value).toBe('');
  });
});
