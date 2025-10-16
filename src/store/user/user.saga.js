import {takeLatest, put, all, call} from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInUserWithEmailAndPassword, signInWithGooglePopup, signOutUserAuth } from "../../utils/firebase/firebase.utils";
import { signInFalure, signInSuccess, signUpFailed, signUpSuccess, signoutSuccess } from "./user.action";



export function* getSnapshotFromUserAuth (userAuth, otherInfos) {
    try{
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, otherInfos);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
        
    }catch(error){
        yield put(signInFalure(error))
    }
    

}

export function* googleSignIn () {
    try{
        const {user} = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user)
    }catch(error){
        yield put(signInFalure(error))
    }
}

export function* emailSignIn ({ payload: { email, password} } ) {
    try{
        const {user} = yield call(signInUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user)
    }catch(error){
        yield put(signInFalure(error))
    }
}


export function* signUpUser ({payload :{email, password, displayName}}) {
    try{
        const {user} = yield call(createUserAuthWithEmailAndPassword, email, password);
        yield put(signUpSuccess( user, {displayName}))
    }catch(error){
        yield put(signUpFailed(error))
    }
}

export function* signInAfterSignUp ({payload :{user, additionalDetails}}) {
    try{
        const userSnapShot = yield call(getSnapshotFromUserAuth, user, additionalDetails)
    } catch (error) {
        yield put(signInFalure(error))
    }
}



export function* isUserAuthenticated () {
    console.log("888888888888888");
    try{
        const userAuth = yield call(getCurrentUser);
        if(!userAuth) return;
        console.log("5555555555")
        yield call(getSnapshotFromUserAuth, userAuth);
       
    }catch(error){
        yield put(signInFalure(error))
    }
}



export function* signOut () {
    try{
        yield call(signOutUserAuth);
        yield put(signoutSuccess());
    }catch(error){
        yield put(signUpFailed(error))
    }
}


export function* onSignoutStart () {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* signUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpUser)
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* signInEmailStart () {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* googleSignInsaga () {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, googleSignIn)
}

export function* onCheckUSerSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,isUserAuthenticated);
} 

export function* userSaga() {
    yield all([call(onCheckUSerSession), call(googleSignInsaga), call(signInEmailStart), call(signUpStart), call(onSignoutStart)]);
}