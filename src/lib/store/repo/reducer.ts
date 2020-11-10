import { RepoState, ActionType } from './types';
import { repoConstants } from './constants';

// INITIAL STATE
const initialState: RepoState = {
  repos: [],
  problem: '',
  loading: '',
  success: '',
};

/**
 * Reducer
 * Updated den STORE je nach ACTION type - Mitarbeiter der Auftrag ausfuehrt
 */
export const repoReducer = (state = initialState, action: ActionType): RepoState => {
  switch (action.type) {
    case repoConstants.REPO_SET_ALL:
      return {
        ...state,
        repos: action.payload,
      };

    case repoConstants.REPO_LOADING:
      return {
        ...state,
        loading: action.payload,
        problem: action.payload ? '' : state.problem,
        success: action.payload ? '' : state.success,
      };

    case repoConstants.REPO_ERRORED:
      return {
        ...state,
        problem: action.payload,
      };

    case repoConstants.REPO_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };

    default:
      return state;
  }
};
