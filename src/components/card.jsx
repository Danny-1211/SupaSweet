import favoriteIcon from '../assets/images/favorite_border.png';
import { CATEGORY_LIST } from '../utils/productUtils.js';

export function Card({ product }) {
    return (
        <>
            <div className="card flex-shrink-0  w-full  flex flex-col justify-between items-center  lg:w-[300px]  border border-[#EAF0ED]">
                <div className="card-img w-full h-[300px] flex items-center justify-center overflow-hidden">
                    <img className="object-cover w-full h-full" src={product.pic} alt={product.name} />
                    <div className="card-tag flex flex-col justify-center items-center writing-vertical bg-[#3F5D45] 
                    text-[#EAF0ED] tracking-[0.2rem] font-['PingFang_TC'] font-semibold leading-[16px] text-[20px] px-[10px] py-[10px]">
                        <p>{CATEGORY_LIST.find(e => e.value == product.category) ? CATEGORY_LIST[CATEGORY_LIST.findIndex(e => e.value == product.category)].label : '本日精選'}</p>
                    </div>
                    <div className="card-favorite">
                        <img src={favoriteIcon} alt="favoriteIcon" />
                    </div>
                </div>
                <div className="card-infor w-full flex justify-around items-center ">
                    <div className="infor-name w-full whitespace-nowrap flex justify-center items-center  px-[20px]  py-[14px] lg:px-[14px]">
                        <p className="text-[#3F5D45] font-['PingFang_TC'] font-light text-[20px] leading-[20px] text-center">{product.name ? product.name : '此無商品'}</p>
                    </div>
                    <div className="infor-price w-full whitespace-nowrap flex justify-center items-center border-l border-[#EAF0ED] px-[25px]  py-[14px] lg:px-[20px] ">
                        <p className="text-[#3F5D45] font-['PingFang_TC'] font-semibold leading-[20px] text-[20px] text-center lg:text-[24px] ">NT$ {product.price ? product.price : '0'}</p>
                    </div>
                </div>
                <div className="card-addCart w-full whitespace-nowrap bg-[#EAF0ED] border-2 border-[#EAF0ED] flex justify-center items-center px-[90px] py-[16px]
                lg:px-[63px] ">
                    <p className="text-[#3F5D45] font-['PingFang_TC'] font-semibold text-[24px] leading-[20px]">加入購物車</p>
                </div>
            </div>
        </>
    )
}

export default Card;