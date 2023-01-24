import { useDispatch, useSelector } from "react-redux";
import { categories, setCategories } from "../features/categorySlice";
import { useCallback, useEffect, useMemo } from "react";
import { getCategories } from "../API/api";

export default function useCategories() {
    const allCategories = useSelector(categories);
    const dispatch = useDispatch();
    useMemo(()=>{
        async function getCategoriesFromApi(){
            try {
                const categoryItems = await getCategories();
                console.log(categoryItems);
                dispatch(setCategories(categoryItems.data));
                
            } catch (error) {
                console.log(error);
            }
        };
        getCategoriesFromApi();
    },[categories]);
    return [allCategories];
}
