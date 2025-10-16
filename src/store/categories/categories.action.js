import { createAction } from "../../utils/reducer/reducers.utils";
import { CATEGORIES_ACTION_TYPE } from "./categories.types";




export const fetchCategoriesStart = () => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)


export const fetchCateoriesSuccess = (categoriesArray) => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray);


export const fetchCategoriesFailed = (error) => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);


