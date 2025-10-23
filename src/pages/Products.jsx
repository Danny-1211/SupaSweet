import { useState, useMemo } from 'react';
import productBanner from '../assets/images/banner.png';
import { useProducts } from '../hooks/useProducts.js';
import { CATEGORY } from '../constant/rule.js';
import { CATEGORY_LABELS } from '../utils/productUtils.js';
export function Products() {
    // 這一頁先全拿,目錄篩選的事情就交給介面處理,不根據目錄改變來請求 api
    const { products, error } = useProducts({ category: CATEGORY.ALL.value });
    console.log(CATEGORY_LABELS)

    return (
        <div className="w-full">
            <div className="products-banner">
                <img className="w-full mx-auto object-cover sm:h-[277px] lg:max-w-[940px] lg:h-[496px]" src={productBanner} alt="productBanner" />
            </div>
            <div className="products-list w-full flex flex-col justify-center items-center gap-[30px]">
                <div className="list-category w-full flex flex-col justify-center items-center">
                    {/* 類別區塊 */}
                </div>
                <div className="list-items"></div>
            </div>
        </div>
    )
}
export default Products;