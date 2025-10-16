import { createSelector } from "reselect";
import { categoriesReducer } from "./categories.reducer";

export const selectCategoriesReducer = (state) => state.categories;


export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoriesSlice) =>  categoriesSlice.categories
)

export const selectCategoriesMap  = createSelector(
    [selectCategories],
    (categories) => {
        console.log("selector 3 fired");
        return categories.reduce((acc, category) => {
        const {title, items} = category  ;
            acc[title.toLowerCase()] = items;
            return acc;
    }, {})
}
)

export const selectIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoriesReducer) => categoriesReducer.isLoading
)


