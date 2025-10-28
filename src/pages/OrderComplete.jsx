import final_banner from '../assets/images/final_banner.png';
import pay_success from '../assets/images/pay_success.svg';
import '../assets/styles/pages/OrderComplete.scss'
import { Link } from "react-router-dom";
export function OrderComplete() {
    return (
        <div className="box">
            <div className=" final w-full flex flex-col justify-center lg:hidden">
                <div className="final_banner w-full">
                    <img className=" w-full object-cover  h-[598px]" src={final_banner} alt="final_banner" />
                    <div className="group w-full flex flex-col justify-between gap-[209px]">
                        <div className="sub-group w-full flex flex-col justify-center items-center gap-[31px]">
                            <div className="order-progress">
                                <div className="point end" ></div>
                                <div className="point end"></div>
                                <div className="point end"></div>
                            </div>
                            <img className="object-cover w-full max-w-[189px] h-[45px]" src={pay_success} alt="pay_success" />
                        </div>
                    </div>
                </div>
                <div className="btn flex justify-center items-center bg-[#FFE180] py-[17px] px-[102px] whitespace-nowrap">
                    <Link to="/">
                        <button type="button">
                            <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[17px] px-[20px]">繼續逛逛</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="final-desktop hidden lg:flex lg:mb-[60px]">
                <div className="final_banner w-full">
                    <img className=" w-full object-cover  h-[598px] lg:h-700px]" src={final_banner} alt="final_banner" />
                    <div className="group  flex flex-col justify-center items-center gap-[51px]">
                        <div className="sub-group w-full flex flex-col justify-center items-center gap-[31px]">
                            <div className="order-progress">
                                <div className="point end" ></div>
                                <div className="point end"></div>
                                <div className="point end"></div>
                            </div>
                            <img className="object-cover w-full max-w-[189px] h-[45px]" src={pay_success} alt="pay_success" />
                        </div>
                        <div className="btn flex justify-center items-center bg-[#FFE180] py-[17px] px-[102px] whitespace-nowrap">
                            <Link to="/">
                                <button type="button">
                                    <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[17px] px-[20px]">繼續逛逛</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default OrderComplete;