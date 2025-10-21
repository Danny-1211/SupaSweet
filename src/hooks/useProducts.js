// 頁面使用這個來取得 services 的 data，此檔案是拿 product table
import { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';

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
    return {products, error};
}