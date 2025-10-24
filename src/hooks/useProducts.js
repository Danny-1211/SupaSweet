// 頁面使用這個來取得 services 的 data，此檔案是拿 product table
import { useState, useEffect, useMemo } from 'react';
import { getProducts } from '../services/productService';
import { calculateEveryCategoryCount, returnFilterProducts, calculateTotalPage } from '../utils/productUtils.js';

// 取得 products 資料 hooks
export function useProducts(options = {}) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, [
        options.category
    ]);

    async function fetchProducts() {
        const { data, error } = await getProducts(options);
        if (error) {
            setError(error);
        } else {
            setProducts(data || []);
        }
    };
    return { products, error };
}

// 計算每個產品分類他們各自的總數 hooks
export function useCategorise(products) {
    return useMemo(() => {
        return calculateEveryCategoryCount(products);
    }, [products])
}

//過濾產品
export function useFilteredProducts(products, category) {
    return useMemo(() =>{
        return returnFilterProducts(products, category);
    }, [products,category])
}

export function usePagination(products, maxCount) {
    // 需要算出總頁數
    // 然後透過分頁拿到資料
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = calculateTotalPage(products.length, maxCount);
    
}