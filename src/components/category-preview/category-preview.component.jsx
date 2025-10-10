import ProductCard from "../product-card/product-card.component";
import "./category-perview.styles.scss";
import { Link } from "react-router-dom";

const CategoryPreview = ({title, items}) => {
    return(
        <div className="category-preview-container">
            <h2>
                <Link className="title" to={`${title}`}>{title.toUpperCase()}</Link>
            </h2>
            <div className="preview">
                {items.filter((_, index) => index < 4 )
                .map(item => <ProductCard key={item.id} props={item} />)}
            </div>
        </div>
    );
}

export default CategoryPreview;