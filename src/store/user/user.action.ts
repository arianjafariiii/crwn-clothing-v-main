import {
    UserData,
    MoreInformation,
  } from '../../utils/firebase/firebase.utils';
  import { User } from 'firebase/auth';
import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducers.utils';
import {USER_ACTION_TYPES} from './user.types';


export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = Action<USER_ACTION_TYPES.EMAIL_SIGN_IN_START>;
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;
export type SignInFalure = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FALIURE, Error>;
export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string }
>;
export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: MoreInformation }
>;

export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>




export const checkUserSession = withMatcher((): CheckUserSession =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export const setCurrentUser = withMatcher((user: UserData) : SetCurrentUser => 
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));


export const googleSignInStart = withMatcher(() => 
    createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export const emailSignInStart = withMatcher((email: string, password: string) => 
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password}))

export const signInSuccess = withMatcher((user: UserData): SignInSuccess => 
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));

export const signInFalure = withMatcher((error: Error): SignInFalure => 
    createAction(USER_ACTION_TYPES.SIGN_IN_FALIURE, error));

export const signUpStart = withMatcher(
    (email: string, password: string, displayName: string): SignUpStart =>
      createAction(USER_ACTION_TYPES.SIGN_UP_START, {
        email,
        password,
        displayName,
      })
  );

export const signUpSuccess = withMatcher((user: User, additionalDetails: MoreInformation): SignUpSuccess => 
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails}));

export const signUpFailed = withMatcher((error: Error): SignUpFailed => 
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error));

export const signoutStart = withMatcher((): SignOutStart => 
    createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signoutSuccess = withMatcher((): SignOutSuccess => 
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signoutFailed = withMatcher((error: Error): SignOutFailed => 
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));