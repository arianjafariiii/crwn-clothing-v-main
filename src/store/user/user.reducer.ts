import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";
import { UserData } from "../../utils/firebase/firebase.utils";
import { signInFalure, signInSuccess, signUpFailed, signoutFailed, signoutSuccess } from "./user.action";


export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const UserReducer = (state = INITIAL_STATE, action: AnyAction) => {
    

    if(signInSuccess.match(action)) {
        return {...state, currentUser: action.payload}
    }

    if(signoutSuccess.match(action)) {
        return {...state, currentUser: null}
    }

    if(signInFalure.match(action) || signUpFailed.match(action) || signoutFailed.match(action)) {
        return{...state, error: action.payload}
    }

    return state;

    // switch(type) {
    //     case (USER_ACTION_TYPES.SIGN_IN_SUCCESS):
    //         return{
    //             ...state,
    //             currentUser: payload
    //         }
    //     case(USER_ACTION_TYPES.SIGN_OUT_FAILED):    
    //     case (USER_ACTION_TYPES.SIGN_UP_FAILED):    
    //     case (USER_ACTION_TYPES.SIGN_IN_FALIURE):
    //         return{
    //             ...state,
    //             error: payload
    //         }
    //     case(USER_ACTION_TYPES.SIGN_OUT_SUCCESS):
    //         return{
    //             ...state,
    //             currentUser: null
    //         }
    //     default:
    //         return state;
    // }
}


