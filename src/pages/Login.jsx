import person from '../assets/images/person.svg';
import key from '../assets/images/key.svg';
import fb from '../assets/images/ic-facebook-logotype.svg';
import yahoo from '../assets/images/ic-yahoo.svg';
import google from '../assets/images/ic-google.svg';
export function Login() {
    return (
        <div className="w-full bg-[#3F5D45] flex flex-col items-center justify-center">
            <div className="w-full login-title flex justify-center items-center text-center py-[30px] px-[116px]">
                <h2 className="text-[#EAF0ED] font-['PingFang TC'] leading-[36px] text-[36px] font-semibold">會員登入</h2>
            </div>
            <div className="login-connect w-full max-w-[415px] bg-[#EAF0ED] flex justify-center items-center ">
                <div className="fb bg-[#FFFFFF] flex justify-center items-center">
                    <img src={fb} alt="fb" />
                </div>
                <div className="bg-[#FFFFFF] flex justify-center items-center">
                    <img src={yahoo} alt="yahoo" />
                </div>
                <div className="bg-[#FFFFFF] flex justify-center items-center"> 
                    <img src={google} alt="google" />
                </div>
            </div>
            <div className="login-input">
                <div className="input-accout">
                    <img src={person} alt="person" />
                    <input className="text-[#8DA291]" type="text" placeholder="電子信箱/手機號碼" name="" id="" />
                </div>
                <div className="input-password">
                    <img src={key} alt="key" />
                    <input className="text-[#8DA291]" type="text" placeholder="請輸入使用者密碼" name="" id="" />
                </div>
            </div>
            <div className="login-log">
                <input type="checkbox" name="log" id="" />
                <p>記住我</p>
            </div>
            <div className="login-btn">
                <button type="submit">登入帳號</button>
            </div>
        </div>
    )
}

export default Login;