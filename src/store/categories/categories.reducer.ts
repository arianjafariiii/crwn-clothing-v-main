import { CATEGORIES_ACTION_TYPE } from "./categories.types";
import {
  CategoryAction,
  fetchCategoriesStart,
  fetchCateoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";
import { Category } from "./categories.types";
import { AnyAction } from "redux"; // ✔️ FIXED

export type CategoriesState = {
  categories: Category[];
  isLoading: boolean;
  error: Error | null;
};

const INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchCateoriesSuccess.match(action)) {
    return { ...state, isLoading: false, categories: action.payload };
  }
  if (fetchCategoriesFailed.match(action)) {
    return { ...state, isLoading: false, error: action.payload };
  }
  return state;
};
