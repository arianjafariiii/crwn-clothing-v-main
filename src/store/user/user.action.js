import { createAction } from '../../utils/reducer/reducers.utils';
import {USER_ACTION_TYPES} from './user.types'


export const setCurrentUser = (user) => 
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => 
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) => 
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password})

export const signInSuccess = (user) => 
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFalure = (error) => 
    createAction(USER_ACTION_TYPES.SIGN_IN_FALIURE, error);

export const signUpStart = (user) => 
    createAction(USER_ACTION_TYPES.SIGN_UP_START, user);

export const signUpSuccess = (user, additionalDetails) => 
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails});

export const signUpFailed = (error) => 
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signoutStart = () => 
    createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signoutSuccess = () => 
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signoutFailed = (error) => 
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);