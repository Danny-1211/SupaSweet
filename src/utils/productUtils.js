import { CATEGORY } from '../constant/rule.js';

// 目錄規則陣列
export const CATEGORY_LIST = Object.values(CATEGORY);

// 取得歸折定義的目錄
export const CATEGORY_LABELS = CATEGORY_LIST.map(item => item.label);

// 計算每種類別資料的總數
export function calculateEveryCategoryCount(products) {

    let set = CATEGORY_LIST.map(item => ({
        value: item.value,
        label: item.label,
        count: 0
    }));

    products.forEach(item => {
        let sameCategory = set.findIndex(e => e.value == item.category);
        set[sameCategory].count += 1;
    })

    let allCategoryIndex = set.findIndex(e => e.value == CATEGORY.ALL.value);
    set[allCategoryIndex].count = products.length;

    return set;
}

// 只篩選該類別的資料
export function returnFilterProducts(products, category) {
    let result = []
    if (category == CATEGORY.ALL.value) {
        result = [...products]
    } else {
        result = products.filter(item => {
            return item.category === category
        })
    }
    return result;
}

// 計算選擇該類別下總分頁數
export function calculateTotalPage(dataLength, maxCount) {
    return Math.ceil(dataLength / maxCount)
}
//目前這個頁數的所有品相
export function getCurrentPageProducts(filterProducts, currentPage, maxCount) {
    const start = (currentPage - 1) * maxCount;
    const end = start + maxCount;
    return filterProducts.slice(start, end);
}