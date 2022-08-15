import { createContext, useState, useEffect } from 'react';
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';
// import SHOP_DATA from '../shopdata';

//as the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {},
});

//provider
export const CategoriesProvider = ({ children }) => {
    //This is used for ADDING collections and docs
    // const [products, setProducts] = useState([]);

    //This is used for ADDING collections and docs
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, []);

    const [categoriesMap, setCategoriesMap] = useState({});
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};