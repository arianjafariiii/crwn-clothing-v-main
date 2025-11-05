import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducers.utils";
import { CATEGORIES_ACTION_TYPE, Category } from "./categories.types";



export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

export type FetchCategoriesSucces = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,  Error>


export type CategoryAction = 
    FetchCategoriesStart | FetchCategoriesSucces | FetchCategoriesFailed;


export const fetchCategoriesStart = withMatcher( (): FetchCategoriesStart => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START));


export const fetchCateoriesSuccess = withMatcher((categoriesArray: Category[]) : FetchCategoriesSucces => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray));


export const fetchCategoriesFailed = withMatcher((error:Error): FetchCategoriesFailed => 
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error));


