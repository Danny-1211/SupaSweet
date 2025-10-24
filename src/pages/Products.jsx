import { useState } from 'react';
import Card from '../components/Card.jsx';
import productBanner from '../assets/images/banner.png';
import arrowLeftIcon from '../assets/images/arrow_left.png';
import arrowRightIcon from '../assets/images/arrow_right.png';
import { useProducts, useCategorise, useFilteredProducts, usePagination } from '../hooks/useProducts.js';
import { CATEGORY, MAX_COUNT } from '../constant/rule.js';
export function Products() {
    // 這一頁先全拿,目錄篩選的事情就交給介面處理,不根據目錄改變來請求 api
    const { products, error } = useProducts({ category: CATEGORY.ALL.value });
    // 選到哪個類別
    const [selectedCategory, setSelectedCategory] = useState(CATEGORY.ALL.value );
    // 渲染類別
    const categories = useCategorise(products);
    // 依據類別篩遠的資料
    const filterProducts = useFilteredProducts(products, selectedCategory)
    // 分頁
    const paginationProducts = usePagination(filterProducts, MAX_COUNT)

    return (
        <div className="w-full">
            <div className="products-banner">
                <img className="w-full mx-auto object-cover sm:h-[277px] lg:max-w-[940px] lg:h-[496px]" src={productBanner} alt="productBanner" />
            </div>
            <div className="products-list w-full flex flex-col justify-center items-center gap-[30px]">
                <div className="list-category w-full flex flex-col justify-center items-center">
                    <ul className="text-center w-full  flex flex-col justify-center items-center">
                        <li className="w-full py-[16px] px-[139px] text-center bg-[#3F5D45]">
                            <p className="text-[#EAF0ED] font-semibold text-[24px] leading-[24px] font-['PingFang_TC']">甜點類別</p>
                        </li>
                        {
                            categories?.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => setSelectedCategory(item.value)} className="focus-within:bg-[#EAF0ED] w-full py-[16px] px-[139px] text-center border-[1px] border-[#EAF0ED]">
                                        <button className="text-[#3F5D45] font-semibold text-[24px] leading-[24px] font-['PingFang_TC']">{item.label} ({item.count})</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="list-items w-full flex flex-col justify-center  items-center ">
                    <div className="items-cards w-full flex flex-col justify-center  items-center px-[30px] gap-[50px] lg:gap-[20px]">
                        {
                            filterProducts.map((item, index) => {
                                return (
                                    <Card key={index} product={item} />
                                )
                            })
                        }
                    </div>
                    <div className="items-pagination">
                        <ul className="flex">
                            <li><button className="active:bg-[#EAF0ED]"><img src={arrowLeftIcon} alt="arrowLeftIcon" /></button></li>
                            {

                            }
                            <li><button className="active:bg-[#EAF0ED]"><img src={arrowRightIcon} alt="arrowRightIcon" /></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Products;