import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';
import Spinner from "../../components/spinner/spinner.component"

const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsLoading)
    return(
        <Fragment>
            {isLoading ? <Spinner/> : Object.keys(categories).map((title) => (
                <CategoryPreview key={title} title={title} items={categories[title]} />
            ))}
            
        </Fragment>    
    )
}



export default CategoriesPreview;