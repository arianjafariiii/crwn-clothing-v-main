import { CATEGORIES_ACTION_TYPE } from "./categories.types";
import { CategoryAction, fetchCategoriesStart, fetchCateoriesSuccess, fetchCategoriesFailed } from "./categories.action";
import { Category } from "./categories.types";
import { AnyAction } from "redux";

export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
  };

const INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
};

export const categoriesReducer = (state=INITIAL_STATE, action = {} as AnyAction): CategoriesState  => {

    if(fetchCategoriesStart.match(action)){
        return {...state, isLoading: true};
    }

    if(fetchCateoriesSuccess.match(action)){
        return {...state, isLoading: false, categories: action.payload};
    }

    if(fetchCategoriesFailed.match(action)){
        return {...state, isLoading: false, error: action.payload}; 
    }

    return state
    // switch(type){
    //     case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START :
    //         return {...state, isLoading: true}
    //     case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
    //         return {...state, isLoading: false, categories: action.payload}
    //     case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED:
    //         return {...state, isLoading: false, categories: action.payload}
    //     default:
    //         return state;
    // }
}