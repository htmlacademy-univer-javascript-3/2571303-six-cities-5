import authReducer, { setAuthorizationStatus } from './auth-slice';
import { setAuthError, setAuthLoading } from '../actions';

describe('authSlice reducers', () => {
  const initialState = {
    authorizationStatus: false,
    loading: false,
    error: null,
  };

  it('should handle setAuthorizationStatus', () => {
    const action = setAuthorizationStatus(true);
    const state = authReducer(initialState, action);

    expect(state.authorizationStatus).toBe(true);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should handle setAuthorizationStatus with false', () => {
    const action = setAuthorizationStatus(false);
    const state = authReducer(initialState, action);

    expect(state.authorizationStatus).toBe(false);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  it('should handle setAuthError', () => {
    const action = setAuthError('Error occurred');
    const state = authReducer(initialState, action);

    expect(state.error).toBe('Error occurred');
    expect(state.loading).toBe(false);
    expect(state.authorizationStatus).toBe(false);
  });

  it('should handle setAuthLoading', () => {
    const action = setAuthLoading(true);
    const state = authReducer(initialState, action);

    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
    expect(state.authorizationStatus).toBe(false);
  });

  it('should handle setAuthLoading with false', () => {
    const action = setAuthLoading(false);
    const state = authReducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    expect(state.authorizationStatus).toBe(false);
  });

  it('should return the initial state for unknown action', () => {
    const unknownAction = { type: 'unknown' };
    const state = authReducer(initialState, unknownAction);

    expect(state).toEqual(initialState);
  });
});
