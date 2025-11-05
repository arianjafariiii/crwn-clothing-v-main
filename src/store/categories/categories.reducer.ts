import { CATEGORIES_ACTION_TYPE } from "./categories.types";
import { CategoryAction, fetchCategoriesStart, fetchCateoriesSuccess, fetchCategoriesFailed } from "./categories.action";


const INITIAL_STATE = {
    categories: [],
    isLoading: false,
    error: null
};

export const categoriesReducer = (state=INITIAL_STATE, action = {} as CategoryAction) => {

    if(fetchCategoriesStart.match(action)){
        return {...state, isLoading: true};
    }

    if(fetchCateoriesSuccess.match(action)){
        return {...state, isLoading: false, categories: action.payload};
    }

    if(fetchCategoriesFailed.match(action)){
        return {...state, isLoading: false, categories: action.payload}; 
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