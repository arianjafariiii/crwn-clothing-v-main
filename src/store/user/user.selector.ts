import { createSelector } from 'reselect';
import { UserState } from './user.reducer.js';
import { RootState } from '../store.js';

export const selectUserReducer = (state: RootState): UserState => state.user;


export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser
)