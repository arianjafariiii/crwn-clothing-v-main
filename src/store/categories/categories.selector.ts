import { createSelector } from "reselect";
import { CategoriesState, categoriesReducer } from "./categories.reducer";
import { CategoryMap } from "./categories.types";

export const selectCategoriesReducer = (state): CategoriesState => state.categories;


export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) =>  categoriesSlice.categories
)

export const selectCategoriesMap  = createSelector(
    [selectCategories],
    (categories): CategoryMap => {
        console.log("selector 3 fired");
        return categories.reduce((acc, category) => {
        const {title, items} = category  ;
            acc[title.toLowerCase()] = items;
            return acc;
    }, {} as CategoryMap)
}
)

export const selectIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesReducer) => categoriesReducer.isLoading
)


