import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../catrgory/category.component";
import {useEffect} from "react";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";



const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCollections = async () => {
            dispatch(fetchCategoriesStart(0));
        }

        getCollections();
    }, [])
    return(
        <div>
            <Routes>
                <Route index element={<CategoriesPreview/>} />
                <Route path=":category" element={<Category/>} />
            </Routes>
        </div>        
    )
}



export default Shop;