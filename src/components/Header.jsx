import logo from "../assets/images/logo-all-dark.svg";
import logoMobile from "../assets/images/logotype-sm-dark.svg";
import cart from "../assets/images/shopping_cart.png";
import dehaze from "../assets/images/dehaze-24px.png";
export function Header() {
    return (
        <header className="w-full mx-auto flex items-center justify-between px-[30px] py-[30px]
        lg:px-0 lg:max-w-[940px]">
            <img className="w-auto h-[18px] lg:hidden" src={dehaze} alt="menu" />
            <img className="hidden lg:block w-auto h-[40px]" src={logo} alt="logo" />
            <img className="w-auto h-[18px] lg:hidden" src={logoMobile} alt="logoMobile" />
            <div className="flex items-center justify-between gap-[80px]">
                <div className="hidden lg:flex justify-between items-center gap-[60px]">
                    <a href="#">首頁</a>
                    <a href="#">甜點</a>
                    <a href="#">登入</a>
                </div>
                <img className="w-auto h-[24px]" src={cart} alt="cart" />
            </div>
        </header>
    )
}

export default Header;