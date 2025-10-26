import person from '../assets/images/person.svg';
import key from '../assets/images/key.svg';
import fb from '../assets/images/ic-facebook-logotype.svg';
import yahoo from '../assets/images/ic-yahoo.svg';
import google from '../assets/images/ic-google.svg';
import '../assets/styles/pages/login.scss';
export function Login() {
    return (
        <>
            {/* 手機板 */}
            <div className="w-full bg-[#3F5D45] flex flex-col items-center justify-center lg:hidden">
                <div className="w-full login-title flex justify-center items-center text-center py-[30px] px-[116px] whitespace-nowrap">
                    <h2 className="text-[#EAF0ED] font-['PingFang TC'] leading-[36px] text-[36px] font-semibold">會員登入</h2>
                </div>
                <div className="login-connect w-full  bg-[#EAF0ED] flex  justify-center items-center px-[30px] py-[30px]">
                    <div className="w-full max-w-[105px] max-h-[16px] bg-[#FFFFFF] flex justify-center items-center py-[18px] px-[16px] border-r border-[#8DA291] ">
                        <img src={fb} alt="fb" />
                    </div>
                    <div className="w-full max-w-[105px] max-h-[16px] bg-[#FFFFFF] flex justify-center items-center py-[18px] px-[16px] border-r border-[#8DA291]">
                        <img src={yahoo} alt="yahoo" />
                    </div>
                    <div className="w-full max-w-[105px] max-h-[16px] bg-[#FFFFFF] flex justify-center items-center py-[18px] px-[16px]">
                        <img src={google} alt="google" />
                    </div>
                </div>
                <div className="login-input w-full bg-[#3F5D45] flex flex-col justify-start items-center gap-[16px]  px-[35px] py-[27px]">
                    <div className="input-accout">
                        <img className="account-icon" src={person} alt="person" />
                        <input className="text-[#8DA291] bg-[#EAF0ED] py-[18px] pl-[60px] w-[315px]" type="text" placeholder="電子信箱/手機號碼" name="" id="" />
                    </div>
                    <div className="input-password">
                        <img className="password-icon" src={key} alt="key" />
                        <input className="text-[#8DA291] bg-[#EAF0ED] py-[18px] pl-[60px] w-[315px]" type="text" placeholder="請輸入使用者密碼" name="" id="" />
                    </div>
                    <div className="login-log w-full max-w-[315px] flex gap-[8px] justify-start items-center">
                        <input type="checkbox" name="log" id="" />
                        <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[36px] text-[16px] font-semibold">記住我</p>
                    </div>
                </div>
                <div className="login-btn w-full  bg-[#FFE180] border border-[#FFE180] flex justify-center items-center h-[65px]">
                    <button className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold" type="submit">登入帳號</button>
                </div>
            </div>

            {/* 電腦版 */}
            <div className="hidden lg:w-full lg:max-w-[1024px] lg:flex  lg:mx-auto mb-[60px]">
                <div className="login-input w-full bg-[#3F5D45]">
                    <div className="w-full login-title flex justify-center items-center text-center py-[30px] px-[116px] whitespace-nowrap">
                        <h2 className="text-[#EAF0ED] font-['PingFang TC'] leading-[36px] text-[36px] font-semibold">會員登入</h2>
                    </div>
                    <div className="login-input w-full bg-[#3F5D45] flex flex-col justify-start items-center gap-[16px]  px-[35px] py-[27px]">
                        <div className="input-accout">
                            <img className="account-icon" src={person} alt="person" />
                            <input className="text-[#8DA291] bg-[#EAF0ED] py-[18px] pl-[60px] w-[315px]" type="text" placeholder="電子信箱/手機號碼" name="" id="" />
                        </div>
                        <div className="input-password">
                            <img className="password-icon" src={key} alt="key" />
                            <input className="text-[#8DA291] bg-[#EAF0ED] py-[18px] pl-[60px] w-[315px]" type="text" placeholder="請輸入使用者密碼" name="" id="" />
                        </div>
                        <div className="login-log w-full max-w-[315px] flex gap-[8px] justify-start items-center">
                            <input type="checkbox" name="log" id="" />
                            <p className="text-[#EAF0ED] font-['PingFang TC'] leading-[36px] text-[16px] font-semibold">記住我</p>
                        </div>
                    </div>
                    <div className="login-btn w-full  bg-[#FFE180] border border-[#FFE180] flex justify-center items-center h-[65px]">
                        <button className="text-[#3F5D45] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold" type="submit">登入帳號</button>
                    </div>
                </div>
                <div className="connect w-full  bg-[#EAF0ED] lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-[36px] lg:px-[67px] lg:py-[40px]">
                    <div className="connect-title justify-center items-center">
                        <h2 className="text-[#8DA291] font-['PingFang TC'] leading-[36px] text-[24px] font-light">—— 連結社群帳號 ——</h2>
                    </div>
                    <div className=" w-full max-w-[330px] bg-[#FFFFFF] flex justify-center r  px-[118px] py-[12px] items-center">
                        <img className="max-w-[94px] max-h-[31px]" src={fb} alt="fb" />
                    </div>
                    <div className="w-full max-w-[330px] bg-[#FFFFFF] flex justify-center r  px-[118px] py-[12px] items-center">
                        <img className="max-w-[94px] max-h-[31px]" src={google} alt="google" />
                    </div>
                    <div className="w-full max-w-[330px] bg-[#FFFFFF] flex justify-center r  px-[118px] py-[12px] items-center">
                        <img className="max-w-[94px] max-h-[31px]" src={yahoo} alt="yahoo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;