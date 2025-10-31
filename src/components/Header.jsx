import { Link } from 'react-router-dom';
import logo from "../assets/images/logo-all-dark.svg";
import logoMobile from "../assets/images/logotype-sm-dark.svg";
import cart from "../assets/images/shopping_cart.png";
import dehaze from "../assets/images/dehaze-24px.png";
import { CATEGORY } from '../constant/rule.js';
export function Header() {
    return (
        <header className="w-full mx-auto flex items-center justify-between px-[30px] py-[30px]
        lg:px-0 lg:max-w-[1024px]">
            <img className="w-auto h-[18px] lg:hidden" src={dehaze} alt="menu" />
            <img className="hidden lg:block w-auto h-[40px]" src={logo} alt="logo" />
            <img className="w-auto h-[18px] lg:hidden" src={logoMobile} alt="logoMobile" />
            <div className="flex items-center justify-between gap-[80px]">
                <div className="hidden lg:flex justify-between items-center gap-[60px]">
                    <Link className="btn" to="/">
                        <p className="text-[#3F5D45] font-['PingFang TC'] leading-[25px] text-[16px] font-semibold">首頁</p>
                    </Link>
                    <Link className="btn" to={`/products?category=${CATEGORY.ALL.value}`}>
                        <p className="text-[#3F5D45] font-['PingFang TC'] leading-[25px] text-[16px] font-semibold">甜點</p>
                    </Link>
                    <Link className="btn" to="/login">
                        <p className="text-[#3F5D45] font-['PingFang TC'] leading-[25px] text-[16px] font-semibold">登入</p>
                    </Link>
                </div>
                <Link to="/cart">
                    <img className="w-auto h-[24px] cursor-pointer" src={cart} alt="cart" />
                </Link>
            </div>
        </header>
    )
}

export default Header;