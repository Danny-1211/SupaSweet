import final_banner from '../assets/images/final_banner.png';
import pay_success from '../assets/images/pay_success.svg';
import '../assets/styles/pages/OrderComplete.scss'
import { Link } from "react-router-dom";
export function OrderComplete() {
    return (
        <div className=" final w-full ">
            <img className="final_banner w-full mx-auto object-cover  lg:max-w-[1024px] lg:h-[496px]" src={final_banner} alt="final_banner" />
            <div className="group flex flex-col justify-between gap-[209px]">
                <div className="sub-group flex flex-col justify-center items-center">
                    <div className="header-progress">
                        <div className="step completed" aria-label="step 1 complete"></div>
                        <div className="step completed"></div>
                        <div className="step completed"></div>
                    </div> 
                    <img className="object-cover max-w-[189px]" src={pay_success} alt="pay_success" />
                </div>
                <div className="btn flex justify-center items-center bg-[#FFE180] py-[17px] px-[102px]">
                    <Link to="/">
                        <button type="button">
                            <p className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[17px] px-[20px]">繼續逛逛</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default OrderComplete;