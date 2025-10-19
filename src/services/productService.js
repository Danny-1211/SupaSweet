// product 相關的取資料放在這裡
import { supabase } from '../lib/supabase.js';

export async function getProducts(options = {}) {
    const { category } = options; // 參數為目錄，之後篩選資料用

    try {
        let query = null;
        if (category == 'all') {
            query = supabase.from('product').select('*'); // 先預設先拿全部
        }
        const { data } = await query;
        return { data, error: null };

    } catch (err) {
        console.log(err);
        return { data: null, error: err };
    }
}