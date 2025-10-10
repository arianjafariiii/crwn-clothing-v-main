import './category.styles.scss';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/categories.selector';


const Category = () => {
    const{ category } = useParams();
    const categories = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categories[category]);
    const isLoading = useSelector(selectIsLoading)
    console.log(products);
    useEffect(() => {
        setProducts(categories[category]);
    }, [category, categories])
    return(
        <div>
            <h2>{category.toUpperCase()}</h2>
            <div className="category-container">
                { products &&  products.map((product) =>  <ProductCard key={product.id } props={product} /> )}
            </div>
        </div>
        
    );

}


export default Category;