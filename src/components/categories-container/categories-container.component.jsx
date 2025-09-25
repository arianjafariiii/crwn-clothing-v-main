import './categories-container.styles.scss';
import {outlet} from 'react-router-dom';


import CategoryItem from '../category-item/category-item.components';
const CategoriesContainer = ({categories}) => {
    return(
        <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    );
}

export default CategoriesContainer;