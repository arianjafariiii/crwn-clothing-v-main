import { all, call, takeLatest, put } from 'redux-saga/effects';
import { CATEGORIES_ACTION_TYPE } from './categories.types';
import { fetchCategoriesFailed, fetchCateoriesSuccess } from './categories.action';
import { getCollectionsAndDouments } from '../../utils/firebase/firebase.utils';



export function* fetchCategoriesAsync () {
    try{
        const categoryMap = yield call(getCollectionsAndDouments, 'categories');
        yield put(fetchCateoriesSuccess(categoryMap)); 
    }catch(error){
        yield put(fetchCategoriesFailed(error))
    }
}

export function* onFetchCategories (){
    yield takeLatest(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START, fetchCategoriesAsync )
}


export function* categoriesSaga () {
    yield all([call(onFetchCategories)])
}