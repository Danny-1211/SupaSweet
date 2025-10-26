import logoIcon from '../assets/images/logo-light.svg';
import mailIcon from '../assets/images/mail-24px.png';
import arrowIcon from '../assets/images/arrow_forward-24px.png';
import logoType from '../assets/images/logotype-lg-dark.svg';
import lineIcon from '../assets/images/ic-line@.svg';
import fbIcon from '../assets/images/ic-facebook.svg';
import footerSlogan from '../assets/images/wantToEat.png';
import '../assets/styles/components/footer.scss';
export function Footer() {
    return (
        <>
            <footer className="bg-[#EAF0ED]">
                <div className="footer-sub w-full flex flex-col justify-center items-center bg-[#3F5D45] lg:max-w-[100%]">
                    <div className="sub-mail w-full flex flex-col justify-center items-center bg-[#3F5D45] mt-[30px] px-[30px] py-[30px] gap-[33px]
            lg:flex-row  lg:gap-[60px]">
                        <div className="mail w-full flex gap-[20px] justify-center items-center ">
                            <img className="w-[40px] h-auto object-cover" src={logoIcon} alt="logo" />
                            <div className="mail-slogan">
                                <p className="text-[#EAF0ED] font-['Helvetica Neue'] leading-[29px] text-[24px] text-center lg:text-[24px] ">訂閱你我的甜蜜郵件</p>
                            </div>
                        </div>
                        <div className="mail-input w-full flex  justify-center items-center">
                            <div className="input-group ">
                                <img className="mail-icon" src={mailIcon} alt="mailIcon" />
                                <input className="bg-[#EAF0ED] py-[20px] pl-[48px] lg:w-[380px]" type="text" name="mail" id="" />
                            </div>
                            <div className="input-arrow bg-[#FFE180] px-[24px] py-[20px]">
                                <img src={arrowIcon} alt="arrowIcon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-intro w-full  flex flex-col justify-between items-start px-[30px] py-[40px] gap-[23px] 
                lg:max-w[1024px] lg:pl-[230px] lg:flex-row lg:justify-center lg:items-center lg:gap-0">
                    <div className="footer-left w-full flex flex-col justify-start items-start gap-[40px]
                    lg:gap-[115px]  ">
                        <div className="left-log">
                            <img className="object-cover w-[171px]" src={logoType} alt="logoType" />
                        </div>
                        <div className="left-info w-full flex flex-col justify-center items-start gap-[37px]
                        lg:justify-start">
                            <div className="left-text text-[#3F5D45] font-['Helvetica Neue'] text-[16px] leading-[24px] text-left">
                                <p>07-1234-5678</p>
                                <p>sweetaste@email.com </p>
                                <p> 800 高雄市新興區幸福路 520 號</p>
                            </div>
                            <div className="left-icon flex gap-[8px]">
                                <img className="object-cover w-[32px] h-[32px]" src={lineIcon} alt="lineIcon" />
                                <img className="object-cover w-[32px] h-[32px]" src={fbIcon} alt="fbIcon" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-right w-full flex flex-col justify-start items-start  
                    lg:items-end lg:justify-end lg:pr-[100px] lg:gap-[46px]">
                        <div className="left-logo hidden lg:flex">
                            <img className="lg:max-w-[59px]" src={footerSlogan} alt="logoType" />
                        </div>
                        <div className="left-copyright">
                            <p className="text-[#3F5D45] text-[16px] leading-[19px] font-[Times] text-center">© 2018 Sweetaste* All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;