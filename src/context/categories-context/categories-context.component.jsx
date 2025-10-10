import { createContext, useEffect, useState } from "react";
import {getCollectionsAndDouments} from "../../utils/firebase/firebase.utils.js"
import SHOP_DATA from "../../shop-data.js";

export const CategoriesContext = createContext({
    products: []
});


export const CategoriesProvider = ({children}) => {
    const[categories, setCategories] = useState({});
    
    useEffect(() => {
        const getCollections = async () => {
            const categoryMap = await getCollectionsAndDouments();
            setCategories(categoryMap);
        }

        getCollections();
    }, [])

    const value = {categories};
    return <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
}
