import { createAction } from "../../utils/reducer/reducers.utils";
import { CATEGORIES_ACTION_TYPE } from "./categories.types";

import { getCollectionsAndDouments } from "../../utils/firebase/firebase.utils";



export const fetchCategoriesStart = () => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)


export const fetchCateoriesSuccess = (categoriesArray) => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray);


export const fetchCategoriesFailed = (error) => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);


export const fetchCategoriesAsync = () => async(dispatch) => {
    dispatch(fetchCategoriesStart());
    try{
        const categoryMap = await getCollectionsAndDouments();
        dispatch(fetchCateoriesSuccess(categoryMap)); 
    }catch(error){
        dispatch(fetchCategoriesFailed(error))
    }
} 