import { useState } from "react";
import cart_p1 from "../assets/images/cart-p1.png";
import cart_p2 from "../assets/images/cart-p2.png";
import cart_p3 from "../assets/images/cart-p3.png";
import credit from "../assets/images/credit_card.svg";
import arrow_down from "../assets/images/arrow_drop_down.svg";
import arrow_up from "../assets/images/arrow_drop_up.svg";
import "../assets/styles/pages/checkout.scss";
import { Link } from "react-router-dom";
function DeliveryForm() {
    return (
        <div className="w-full bg-[#3F5D45] flex flex-col items-center justify-start  gap-[20px]  px-[30px] py-[30px]">
            <div className="header  w-full flex justify-between items-center ">
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
                    <input className=" w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="text" name="" id="" placeholder="王" />
                </div>
                <div className="last  w-full flex flex-col justify-start  gap-[8px] ">
                    <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">名字</p>
                    <input className=" w-full bg-[#EAF0ED]  py-[17px] pl-[20px]" type="text" name="" id="" placeholder="小明" />
                </div>
            </div>
            <div className="phone w-full flex flex-col  justify-start gap-[9px] px-[5px] ">
                <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">電話</p>
                <input className="bg-[#EAF0ED] py-[17px] pl-[20px]" type="tel" name="" id="" placeholder="0912-345-678" />
            </div>
            <div className="address w-full flex flex-col justify-start gap-[9px] px-[5px]">
                <div className="address-title">
                    <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">地址</p>
                </div>
                <div className="city flex gap-[8px] justify-start items-center">
                    <div class="custom-city w-full">
                        <span class="label  text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light">高雄市</span>
                        <input className=" w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="number" id="month" min="1" max="12" readonly />
                        <div class="arrows flex flex-col justify-center items-center">
                            <button class="-mb-[5px]"><img src={arrow_up} alt="arrow_up" /></button>
                            <button class="-mt-[5px]"><img src={arrow_down} alt="arrow_up" /></button>
                        </div>
                    </div>
                    <div class="custom-city w-full">
                        <span class="label text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light">新興區</span>
                        <input className=" w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="text" id="date" min="1" max="31" readonly />
                        <div class="arrows flex flex-col justify-center items-center">
                            <button class="-mb-[5px]"><img src={arrow_up} alt="arrow_up" /></button>
                            <button class="-mt-[5px]"><img src={arrow_down} alt="arrow_up" /></button>
                        </div>
                    </div>
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
        <div className="w-full bg-[#3F5D45] flex flex-col items-center justify-center gap-[20px] px-[30px] py-[30px]">
            <div className="header w-full flex justify-between items-center">
                <div className="header-title text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[36px] font-semibold ">付款</div>
                <div className="header-progress">
                    <div className="step completed" aria-label="step 1 complete"></div>
                    <div className="step current"></div>
                    <div className="step"></div>
                </div>
            </div>
            <div className="credit w-full flex flex-col  justify-start gap-[9px] px-[5px] ">
                <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">信用卡卡號</p>
                <div className="input-credit w-full flex items-center justify-center">
                    <img className="credit-icon" src={credit} alt="credit" />
                    <input className=" w-full bg-[#EAF0ED] py-[18px] pl-[20px]" type="tel" name="" id="" placeholder="9012-3456-7890-1234" />
                </div>
            </div>
            <div className="name  w-full flex flex-col justify-start items-start gap-[8px]">
                <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">持卡人姓名</p>
                <div className="name-input w-full flex justify-start items-start gap-[9px] ">
                    <div className="first  w-full  flex flex-col justify-start items-start gap-[8px]">
                        <input className=" w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="text" name="" id="" placeholder="王" />
                    </div>
                    <div className="last  w-full flex flex-col justify-start  gap-[8px] ">
                        <input className=" w-full bg-[#EAF0ED]  py-[17px] pl-[20px]" type="text" name="" id="" placeholder="小明" />
                    </div>
                </div>
            </div>
            <div className="date w-full flex flex-col justify-start items-start gap-[8px]">
                <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">有效期限</p>
                <div className="date-select w-full flex gap-[8px]">
                    <div class="custom-date w-full">
                        <span class="label  text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light">月</span>
                        <input className=" w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="number" id="month" min="1" max="12" readonly />
                        <div class="arrows flex flex-col justify-center items-center">
                            <button class="-mb-[5px]"><img src={arrow_up} alt="arrow_up" /></button>
                            <button class="-mt-[5px]"><img src={arrow_down} alt="arrow_up" /></button>
                        </div>
                    </div>
                    <div class="custom-date w-full">
                        <span class="label text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light">日</span>
                        <input className=" w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="number" id="date" min="1" max="31" readonly />
                        <div class="arrows flex flex-col justify-center items-center">
                            <button class="-mb-[5px]"><img src={arrow_up} alt="arrow_up" /></button>
                            <button class="-mt-[5px]"><img src={arrow_down} alt="arrow_up" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="CSC  w-full flex flex-col justify-start items-start gap-[8px]">
                <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">背面末三碼</p>
                <div className="CSC-input  flex justify-start items-start gap-[9px] ">
                    <div className="CSC-number  w-full  flex flex-col justify-start items-start gap-[8px]">
                        <input className=" w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="text" name="csc" id="csc" placeholder="123" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function BillForm() {
    // 1 = 電子發票 2 = 郵寄票發 
    const [billSwitch, setBillSwitch] = useState(1);

    return (
        <div className="w-full bg-[#3F5D45] flex flex-col items-center justify-center px-[30px]">
            <div className="header  w-full flex justify-between items-center px-[20px] py-[30px] whitespace-nowrap">
                <div className="header-title text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[36px] font-semibold ">發票</div>
                <div className="header-progress">
                    <div className="step completed" aria-label="step 1 complete"></div>
                    <div className="step completed"></div>
                    <div className="step current"></div>
                </div>
            </div>
            <div className="switch w-full flex justify-center items-center whitespace-nowrap px-[30px]">
                <button className={`electric border  border-[#EAF0ED] py-[14px] px-[38px] ${billSwitch == 1 ? 'bg-[#EAF0ED]' : 'bg-[#3F5D45]'}`} type="button" onClick={() => setBillSwitch(1)}>
                    <p className={`font-['PingFang TC'] leading-[20px] text-[20px] font-semibold ${billSwitch == 1 ? 'text-[#3F5D45]' : 'text-[#EAF0ED]'}`}>電子發票</p>
                </button>
                <button className={`post border  border-[#EAF0ED] py-[14px] px-[38px] ${billSwitch == 2 ? 'bg-[#EAF0ED]' : 'bg-[#3F5D45]'}`} type="button" onClick={() => setBillSwitch(2)}>
                    <p className={`font-['PingFang TC'] leading-[20px] text-[20px] font-semibold ${billSwitch == 2 ? 'text-[#3F5D45]' : 'text-[#EAF0ED]'}`} >郵寄發票</p>
                </button>
            </div>
            {billSwitch == 1 && <ElectronicBillForm />}
            {billSwitch == 2 && <PostBillForm />}
        </div>
    )
}

function ElectronicBillForm() {
    return (
        <div className="electric-form w-full flex flex-col justify-start items-start  py-[30px] gap-[8px]">
            <div className="email w-full flex flex-col  justify-start  items-start gap-[9px] ">
                <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">電子郵件信箱</p>
                <input className="w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="email" name="" id="" placeholder="example@email.com" />
            </div>
            <div className="number w-full flex flex-col  justify-start gap-[9px]">
                <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">統一編號（選填）</p>
                <input className="w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="text" name="" id="" placeholder="12345678" />
            </div>
        </div>
    )
}

function PostBillForm() {
    return (
        <div className="electric-form w-full flex flex-col justify-center items-center  py-[30px] gap-[8px]">
            <div className="address w-full flex flex-col justify-start gap-[9px] px-[5px]">
                <div className="address-title flex justify-between items-center">
                    <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">地址</p>
                    <div className="flex gap-[8px]">
                        <input type="checkbox" id="address" name="address" />
                        <label className="text-[#EAF0ED] font-['PingFang TC'] leading-[36px] text-[16px] font-semibold" for="address">同運送地址</label>
                    </div>
                </div>
                <div className="city flex gap-[8px] justify-start items-center">
                    <div class="custom-city w-full">
                        <span class="label  text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light">高雄市</span>
                        <input className=" w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="number" id="month" min="1" max="12" readonly />
                        <div class="arrows flex flex-col justify-center items-center">
                            <button class="-mb-[5px]"><img src={arrow_up} alt="arrow_up" /></button>
                            <button class="-mt-[5px]"><img src={arrow_down} alt="arrow_up" /></button>
                        </div>
                    </div>
                    <div class="custom-city w-full">
                        <span class="label text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light">新興區</span>
                        <input className=" w-full bg-[#EAF0ED] py-[17px] pl-[20px]" type="text" id="date" min="1" max="31" readonly />
                        <div class="arrows flex flex-col justify-center items-center">
                            <button class="-mb-[5px]"><img src={arrow_up} alt="arrow_up" /></button>
                            <button class="-mt-[5px]"><img src={arrow_down} alt="arrow_up" /></button>
                        </div>
                    </div>
                </div>
                <div className="road w-full">
                    <input className="w-full bg-[#EAF0ED] text-[#8DA291] font-['PingFang TC'] leading-[20px] text-[16px] font-light py-[17px] px-[20px]" type="text" name="road" id="" placeholder="幸福路 520 號" />
                </div>
            </div>
            <div className="number w-full flex flex-col  justify-start gap-[9px] px-[5px] ">
                <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[20px] text-[20px] font-semibold">統一編號（選填）</p>
                <input className="bg-[#EAF0ED] py-[17px] pl-[20px]" type="text" name="" id="" placeholder="12345678" />
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
        <div className="w-full lg:max-w-[1024px] lg:mx-auto lg:flex lg:justify-center lg:items-start lg:gap-[20px] lg:mb-[60px]">
            <main className="flex flex-col">
                {form}

                {
                    currentStop != 3 &&
                    <div className="submit  flex justify-center items-center bg-[#FFE180] py-[19px]" onClick={() => setCurrentStop(currentStop + 1)}>
                        <button type="button">
                            <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[17px] px-[20px]">下一步</p>
                        </button>
                    </div>
                }
                {
                    currentStop == 3 &&
                    <Link to="/OrderComplete">
                        <div className="submit  flex justify-center items-center bg-[#FFE180] py-[19px]">
                            <button type="button">
                                <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[17px] px-[20px]">確認結帳</p>
                            </button>
                        </div>
                    </Link>
                }

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