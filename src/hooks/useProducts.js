// 頁面使用這個來取得 services 的 data，此檔案是拿 product table
import { useState, useEffect, useMemo } from 'react';
import { getProducts } from '../services/productService';
import { calculateEveryCategoryCount, returnFilterProducts, calculateTotalPage, getCurrentPageProducts } from '../utils/productUtils.js';

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
    }, [products]);
}

export function usePagination(products, maxCount, category) {
    // 目前頁數
    const [currentPage, setCurrentPage] = useState(1);

    // 依據類別篩遠的資料
    const filterProducts = useMemo(() => {
        return returnFilterProducts(products, category);
    }, [products, category]);

    // 總頁數
    const totalPage = calculateTotalPage(filterProducts.length, maxCount);

    // 根據目前頁數顯示對應頁數資料
    const currentPageProducts = useMemo(() => {
        return getCurrentPageProducts(filterProducts, currentPage, maxCount)
    });

    const resetPage = () => {
        setCurrentPage(1)
    }

    const nextPage = () => {
        if(currentPage < totalPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prePage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return {
        totalPage, currentPage, setCurrentPage, currentPageProducts, resetPage, nextPage, prePage
    }
}