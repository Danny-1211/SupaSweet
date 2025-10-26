import cart_p1 from "../assets/images/cart-p1.png";
import cart_p2 from "../assets/images/cart-p2.png";
import cart_p3 from "../assets/images/cart-p3.png";
import minus from "../assets/images/minus.svg";
import add from "../assets/images/add.svg";
export function Cart() {
    return (
        <div className="w-full">
            <div className="cart-info">
                <div className="info-title w-full flex justify-center items-center bg-[#EAF0ED] whitespace-nowrap">
                    <h2 className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[16px] px-[127px]">您的購物車</h2>
                </div>
                <div className="info-items flex flex-col justify-center items-center">
                    {/* 購物車卡片 */}
                    <div className="item flex flex-col justify-between items-end">
                        <div className="item-info w-full max-w-[315px] flex  justify-start items-start gap-[12px] py-[30px]  border-b border-[#EAF0ED]">
                            <div className="info-pic flex-shrink-0 ">
                                <img className=" w-[140px] h-[100px] object-cover" src={cart_p1} alt="cart_p1" />
                            </div>
                            <div className="info-menu  w-full flex flex-col justify-start items-start gap-[8px] ">
                                <div className="menu-title w-full flex flex-col justify-start items-start gap-[8px] px-[19px]">
                                    <h5 className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[20px] ">焦糖瑪卡龍</h5>
                                    <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[16px]" >NT$ 450</p>
                                </div>
                                <div className="menu-btn flex w-full">
                                    <div className="btn-minus flex-shrink-0 py-[13px] px-[19px]">
                                        <button type="button"> <img src={minus} alt="minus" /></button>
                                    </div>
                                    <div className="btn-num py-[13px] px-[19px]">
                                        <p>2</p>
                                    </div>
                                    <div className="btn-add flex-shrink-0 py-[13px] px-[19px]">
                                        <button type="button"><img src={add} alt="add" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-result w-full  max-w-[315px] flex justify-end items-center py-[30px]">
                            <h5 className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">NT$ 900</h5>
                        </div>
                    </div>
                    <div className="item flex flex-col justify-between items-end">
                        <div className="item-info w-full max-w-[315px] flex  justify-start items-start gap-[12px] py-[30px]  border-b border-[#EAF0ED]">
                            <div className="info-pic flex-shrink-0 ">
                                <img className=" w-[140px] h-[100px] object-cover" src={cart_p2} alt="cart_p2" />
                            </div>
                            <div className="info-menu  w-full flex flex-col justify-start items-start gap-[8px] ">
                                <div className="menu-title w-full flex flex-col justify-start items-start gap-[8px] px-[19px]">
                                    <h5 className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[20px] ">焦糖瑪卡龍</h5>
                                    <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[16px]" >NT$ 450</p>
                                </div>
                                <div className="menu-btn flex w-full">
                                    <div className="btn-minus flex-shrink-0 py-[13px] px-[19px]">
                                        <button type="button"> <img src={minus} alt="minus" /></button>
                                    </div>
                                    <div className="btn-num py-[13px] px-[19px]">
                                        <p>2</p>
                                    </div>
                                    <div className="btn-add flex-shrink-0 py-[13px] px-[19px]">
                                        <button type="button"><img src={add} alt="add" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-result w-full  max-w-[315px] flex justify-end items-center py-[30px]">
                            <h5 className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">NT$ 900</h5>
                        </div>
                    </div>
                    <div className="item flex flex-col justify-between items-end">
                        <div className="item-info w-full max-w-[315px] flex  justify-start items-start gap-[12px] py-[30px]  border-b border-[#EAF0ED]">
                            <div className="info-pic flex-shrink-0 ">
                                <img className=" w-[140px] h-[100px] object-cover" src={cart_p3} alt="cart_p3" />
                            </div>
                            <div className="info-menu  w-full flex flex-col justify-start items-start gap-[8px] ">
                                <div className="menu-title w-full flex flex-col justify-start items-start gap-[8px] px-[19px]">
                                    <h5 className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[20px] ">焦糖瑪卡龍</h5>
                                    <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[16px]" >NT$ 450</p>
                                </div>
                                <div className="menu-btn flex w-full">
                                    <div className="btn-minus flex-shrink-0 py-[13px] px-[19px]">
                                        <button type="button"> <img src={minus} alt="minus" /></button>
                                    </div>
                                    <div className="btn-num py-[13px] px-[19px]">
                                        <p>2</p>
                                    </div>
                                    <div className="btn-add flex-shrink-0 py-[13px] px-[19px]">
                                        <button type="button"><img src={add} alt="add" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-result w-full  max-w-[315px] flex justify-end items-center py-[30px]">
                            <h5 className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">NT$ 900</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-total flex flex-col justify-start items-center ">
                <div className="total-title bg-[#EAF0ED]">
                    <h2 className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[16px] px-[109px]">訂單摘要</h2>
                </div>
                <div className="total-result w-full flex flex-col justify-start items-between  py-[16px] px-[31px] gap-[16px]">
                    <div className="result-Subtotal flex flex-col gap-[8px]">
                        <div className="result-Subtotal flex items-center justify-between">
                            <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[16px] font-light">小計</p>
                            <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[16px] font-light">NT$ 2,700</p>
                        </div>
                        <div className="delivery  flex items-center justify-between">
                            <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[16px] font-light">運費</p>
                            <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[16px] font-light">NT$ 300</p>
                        </div>
                    </div>
                    <div className="result-Subtotal flex items-center justify-between">
                        <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">總計</p>
                        <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">NT$ 3,000</p>
                    </div>
                </div>
            </div>
            <div className="Checkout bg-[#FFE180] flex  justify-center items-center  py-[16px] px-[164px] whitespace-nowrap">
                <button type="button">
                    <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold">結帳</p>
                </button>
            </div>
        </div>
    )
}
export default Cart;