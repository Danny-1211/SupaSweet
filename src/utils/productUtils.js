import { CATEGORY } from '../constant/rule.js';

// 目錄規則陣列
const CATEGORY_LIST = Object.values(CATEGORY);

// 取得歸折定義的目錄
export const CATEGORY_LABELS = CATEGORY_LIST.map(item => item.label);

// 計算每種類別的總數
export function calculateEveryCategoryCount() {

}