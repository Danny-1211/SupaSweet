import { useState } from "react";
import cart_p1 from "../assets/images/cart-p1.png";
import cart_p2 from "../assets/images/cart-p2.png";
import cart_p3 from "../assets/images/cart-p3.png";
import "../assets/styles/pages/Checkout.scss";
function DeliveryForm() {
    return (
        <div className="w-full bg-[#3F5D45] flex flex-col items-center justify-start  gap-[30px]  px-[30px] py-[30px]">
            <div className="header  w-full flex justify-between items-center px-[5px] ">
                <div className="header-title text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[36px] font-semibold ">運送</div>
                <div className="header-progress">
                    <div className="step current" aria-label="step 1 complete"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                </div>
            </div>
            <div className="name  w-full flex justify-start items-start gap-[9px] ">
                <div className="first  w-full  flex flex-col justify-start items-start gap-[8px]">
                    <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">姓氏</p>
                    <input className=" w-full bg-[#EAF0ED] py-[17px] " type="text" name="" id="" placeholder="王" />
                </div>
                <div className="last  w-full flex flex-col justify-start  gap-[8px] ">
                    <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">名字</p>
                    <input className=" w-full bg-[#EAF0ED]  py-[17px] " type="text" name="" id="" placeholder="小明" />
                </div>
            </div>
            <div className="phone w-full flex flex-col  justify-start gap-[9px] px-[5px] ">
                <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">電話</p>
                <input className="bg-[#EAF0ED] py-[17px] " type="tel" name="" id="" placeholder="0912-345-678" />
            </div>
            <div className="address w-full flex flex-col justify-start gap-[9px] px-[5px]">
                <div className="address-title">
                    <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">地址</p>
                </div>
                <div className="city flex gap-[8px] justify-start items-center">
                    <select className="w-full bg-[#EAF0ED] text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light py-[17px] px-[20px]" name="city" id="">
                        <option value="Kaohsiung">高雄市</option>
                    </select>
                    <select className="w-full bg-[#EAF0ED] text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light py-[17px] px-[20px]" name="district" id="">
                        <option value="yang">鹽埕區</option>
                        <option value="zuoying">左營區</option>
                        <option value="linya">苓雅區</option>
                    </select>
                </div>
                <div className="road w-full">
                    <input className="w-full bg-[#EAF0ED] text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light py-[17px] px-[20px]" type="text" name="road" id="" placeholder="幸福路 520 號" />
                </div>
            </div>
        </div >
    )
}

function PaymentForm() {
    return (
        <div className="w-full bg-[#3F5D45] flex flex-col items-center justify-center">
            <div className="header  w-full flex justify-between items-center px-[30px] py-[30px]">
                <div className="header-title text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[36px] font-semibold ">付款</div>
                <div className="header-progress">
                    <div className="step completed" aria-label="step 1 complete"></div>
                    <div className="step current"></div>
                    <div className="step"></div>
                </div>
            </div>
        </div>
    )
}

function BillForm() {
    return (
        <div className="w-full bg-[#3F5D45] flex flex-col items-center justify-center">
            <div className="header  w-full flex justify-between items-center px-[30px] py-[30px]">
                <div className="header-title text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[36px] font-semibold ">發票</div>
                <div className="header-progress">
                    <div className="step completed" aria-label="step 1 complete"></div>
                    <div className="step completed"></div>
                    <div className="step current"></div>
                </div>
            </div>
        </div>
    )
}

export function Checkout() {
    // 1 = 運送表單 2 = 付款表單 3 = 發票表單
    const [currentStop, setCurrentStop] = useState(1);
    let form;

    if (currentStop == 1) {
        form = <DeliveryForm />;
    } else if (currentStop == 2) {
        form = <PaymentForm />;
    } else {
        form = <BillForm />;
    }

    return (
        <div className="w-full lg:max-w-[1024px] lg:mx-auto lg:flex lg:justify-center lg:items-start lg:gap-[20px]">
            <main className="flex flex-col">
                {form}
                <div className="submit flex justify-center items-center bg-[#FFE180] py-[19px]">
                    <button type="button">
                        <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[17px] px-[20px]">下一步</p>
                    </button>
                </div>
            </main>
            <div className="info hidden lg:flex lg:flex-col lg:gap-[20px]">
                <div className="info-summary border border-[#EAF0ED] ">
                    <div className="info-title bg-[#EAF0ED] whitespace-nowrap">
                        <h2 className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[16px] px-[109px] ">訂單摘要</h2>
                    </div>
                    <div className="info-result w-full flex flex-col justify-start items-between  py-[16px] px-[31px] gap-[16px]">
                        <div className="result-Subtotal flex flex-col gap-[8px]">
                            <div className="result-Subtotal flex items-center justify-between">
                                <p className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light ">小計</p>
                                <p className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light ">NT$ 2,700</p>
                            </div>
                            <div className="delivery  flex items-center justify-between">
                                <p className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light ]">運費</p>
                                <p className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light ">NT$ 300</p>
                            </div>
                        </div>
                        <div className="result-Subtotal flex items-center justify-between">
                            <p className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold ">總計</p>
                            <p className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold ">NT$ 3,000</p>
                        </div>
                    </div>
                </div>
                <div className="info-list border border-[#EAF0ED]">
                    <div className="list-title bg-[#EAF0ED] whitespace-nowrap">
                        <h2 className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[16px] px-[109px] ">購物清單</h2>
                    </div>
                    <div className="list-items flex flex-col justify-start items-center">
                        <div className="item flex  justify-center items-center gap-[20px] px-[20px] py-[16px]">
                            <div className="info-pic flex-shrink-0 ">
                                <img className=" w-[140px] h-[100px] object-cover" src={cart_p1} alt="cart_p1" />
                            </div>
                            <div className="menu-title w-full flex flex-col justify-start items-start gap-[8px] px-[19px]">
                                <h5 className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light">焦糖瑪卡龍 (2)</h5>
                                <p className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[20px]" >NT$ 900</p>
                            </div>
                        </div>
                        <div className="item flex  justify-center items-center gap-[20px] px-[20px] py-[16px]">
                            <div className="info-pic flex-shrink-0 ">
                                <img className=" w-[140px] h-[100px] object-cover" src={cart_p2} alt="cart_p2" />
                            </div>
                            <div className="menu-title w-full flex flex-col justify-start items-start gap-[8px] px-[19px]">
                                <h5 className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light">焦糖瑪卡龍 (2)</h5>
                                <p className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[20px]" >NT$ 900</p>
                            </div>
                        </div>
                        <div className="item flex  justify-center items-center gap-[20px] px-[20px] py-[16px]">
                            <div className="info-pic flex-shrink-0 ">
                                <img className=" w-[140px] h-[100px] object-cover" src={cart_p3} alt="cart_p3" />
                            </div>
                            <div className="menu-title w-full flex flex-col justify-start items-start gap-[8px] px-[19px]">
                                <h5 className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light">焦糖瑪卡龍 (2)</h5>
                                <p className="text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[20px]" >NT$ 900</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout; 