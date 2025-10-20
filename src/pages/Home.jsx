import Header from "../components/Header";
import homeBanner from "../assets/images/home_banner.png";
import whyDoSlogan from "../assets/images/whyDo.png";
import whyDoSloganMobile from '../assets/images/whyDo_horizan.png';
import whyDoBanner from '../assets/images/whyDo_banner.png';
import "../assets/styles/home.scss";
export function Home() {
    return (
        <div className="w-full">
            <Header />
            <div className="w-full flex flex-col justify-start lg:px-[42px] lg:py-[30px]">
                <div>
                    <img className="w-full mx-auto object-cover sm:h-[277px] lg:max-w-[940px] lg:h-[496px]" src={homeBanner} alt="banner" />
                </div>
                <div className="w-full flex items-center justify-between gap-[1px] lg:items-center lg:justify-center lg:-mt-[89px]">
                    <div className="banner-today h-[180px] w-[140px] px-[52px] py[40px] lg:w-[260px] lg:h-[256px]">
                    </div>
                    <div className="banner-recommend h-[180px] w-[140px] px-[52px] py[40px] lg:w-[260px] lg:h-[256px]">
                    </div>
                    <div className="banner-new h-[180px] w-[140px] px-[52px] py[40px] lg:w-[260px] lg:h-[256px]">
                    </div>
                </div>
            </div>
            <div className="whyDo w-full flex flex-col items-center justify-center">
                <div className="whyDo-banner w-full flex justify-center items-center py-[30px] px[90px]">
                    <img className="w-[196px] lg:hidden" src={whyDoSloganMobile} alt="whyDoSloganMobile" />
                    <img className="hidden lg:block w-[324px]" src={whyDoSlogan} alt="whyDoSlogan" />
                </div>
                <div className="whyDo-content bg-[#EAF0ED] px-[30px] py-[30px]">
                    <p className="text-[#8DA291] font-['PingFang_TC'] font-light text-[16px] leading-[32px]">
                        青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                    </p>
                    <p className="text-[#8DA291] font-['PingFang_TC'] font-light text-[16px] leading-[32px]">
                        是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home