import { useState } from 'react';
import Card from '../components/Card.jsx';
import productBanner from '../assets/images/banner.png';
import arrowLeftIcon from '../assets/images/arrow_left.png';
import arrowRightIcon from '../assets/images/arrow_right.png';
import { useProducts, useCategorise, usePagination } from '../hooks/useProducts.js';
import { CATEGORY, MAX_COUNT } from '../constant/rule.js';
import { useSearchParams } from 'react-router-dom';
export function Products() {
    // 這一頁先全拿,目錄篩選的事情就交給介面處理,不根據目錄改變來請求 api
    const { products, error } = useProducts({ category: CATEGORY.ALL.value });
    // 從首頁點卡片來選擇目錄
    const [searchParams, setSearchParams] = useSearchParams();
    // 選到哪個類別，先偵測是不是人從別的頁面帶值來如果有就用參數的目錄，不然就預設全部ˇ
    let [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') ? searchParams.get('category') : CATEGORY.ALL.value);
    // 渲染類別
    const categories = useCategorise(products);
    // 分頁
    const pagination = usePagination(products, MAX_COUNT, selectedCategory)

    function switchCategory(page) {
        setSelectedCategory(page);
        pagination.resetPage();
    }

    return (
        <div className="w-full flex flex-col justify-center items-center mb-[60px]">
            <div className="products-banner w-full lg:max-w-[1024px] mx-auto">
                <img className="w-full mx-auto object-cover sm:h-[277px]  lg:h-[496px]" src={productBanner} alt="productBanner" />
            </div>
            <div className="products-list w-full mx-auto flex flex-col justify-center items-center gap-[30px] lg:max-w-[1024px] lg:px-0 lg:flex-row lg:items-start
            lg:justify-center lg:gap-[100px] lg:mt-[40px]">
                <div className="list-category w-full flex flex-col justify-center items-center lg:max-w-[300px]">
                    <ul className="text-center w-full  flex flex-col justify-center items-center">
                        <li className="w-full py-[16px] text-center bg-[#3F5D45] lg:px-[64px] whitespace-nowrap">
                            <p className="text-[#EAF0ED] font-semibold text-[24px] leading-[24px] font-['PingFang_TC']">甜點類別</p>
                        </li>
                        {
                            categories?.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => switchCategory(item.value)} className={` w-full py-[16px]  text-center border-[1px] border-[#EAF0ED] whitespace-nowrap lg:px-[64px]
                                    ${selectedCategory == item.value ? "bg-[#EAF0ED]" : "bg-white"}`}>
                                        <button className="text-[#3F5D45] font-semibold text-[24px] leading-[24px] font-['PingFang_TC']">{item.label} ({item.count})</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="list-items w-full flex flex-col justify-center  items-center   ">
                    <div className="items-cards w-full flex flex-col justify-center  items-center px-[30px] gap-[50px] 
                    lg:grid lg:grid-cols-2 lg:gap-[20px] lg:px-0">
                        {
                            pagination.currentPageProducts.map((item, index) => {
                                return (
                                    <Card key={index} product={item} />
                                )
                            })
                        }
                    </div>
                    <div className="items-pagination mt-[30px]">
                        <ul className="flex lg:gap-[10px]">
                            <li><button onClick={() => pagination.prePage()} className="active:bg-[#EAF0ED] flex justify-center items-center py-[18px] px-[18px]"><img src={arrowLeftIcon} alt="arrowLeftIcon" /></button></li>
                            {
                                Array.from({ length: pagination.totalPage }, (e, index) => index + 1).map((pageNum, index) => (
                                    <li key={index} onClick={() => pagination.setCurrentPage(pageNum)} className={`flex justify-center items-center py-[18px] px-[18px]
                                    ${pageNum == pagination.currentPage ? 'bg-[#EAF0ED]' : 'bg-white'}`}>
                                        <button className="text-[#3F5D45] active:bg-[#EAF0ED] font-semibold text-[20px] leading-[20px] font-['PingFang_TC']">
                                            {pageNum}
                                        </button>
                                    </li>
                                ))
                            }
                            <li><button onClick={() => pagination.nextPage()} className="active:bg-[#EAF0ED] flex justify-center items-center py-[18px] px-[18px]"><img src={arrowRightIcon} alt="arrowRightIcon" /></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Products;