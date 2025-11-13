import { createAction, withMatcher } from "../../utils/reducer/reducers.utils";
import { CATEGORIES_ACTION_TYPE } from "./categories.types";
import { Category, CategoryItem } from "./categories.types";


import { Action, ActionWithPayload } from "../../utils/reducer/reducers.utils";
import { AnyAction } from "redux-saga";



export type Matchable<AC extends ()=> AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction): action is ReturnType<AC>
}




export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, Error>


export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess| FetchCategoriesFailed 




export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START));


export const fetchCateoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray));


export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error));


