import { CATEGORIES_ACTION_TYPE } from "./categories.types";
import { CategoryAction, fetchCategoriesStart, fetchCateoriesSuccess, fetchCategoriesFailed } from "./categories.action";
import { Category } from "./categories.types";
import { AnyAction } from "redux-saga";


export type CategoriesState = {
    categories: Category[];
    isLoading: false;
    error: Error|null;
}

const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
};

export const categoriesReducer = (state=INITIAL_STATE, action : AnyAction) => {
    
    if (fetchCategoriesStart.match(action)) {
        return {...state, isLoading: true};
    }
    if (fetchCateoriesSuccess.match(action)) {
        return {...state, isLoading: false, categories: action.payload}
    }
    if (fetchCategoriesFailed.match(action)) {
        return {...state, isLoading: false, error: action.payload}
    }
    return state;
    // switch(action.type){
    //     case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START :
    //         return {...state, isLoading: true}
    //     case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
    //         return {...state, isLoading: false, categories: action.payload}
    //     default:
    //         return {...state, isLoading: false, error: action.payload}
    // }
}