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
            <main>
                <div className="w-full flex flex-col justify-start lg:px-[42px] lg:py-[30px] lg:mb-[80px]">
                    <div>
                        <img className="w-full mx-auto object-cover sm:h-[277px] lg:max-w-[940px] lg:h-[496px]" src={homeBanner} alt="banner" />
                    </div>
                    <div className="w-full flex items-center justify-center gap-[1px] md:items-center md:justify-center md:-mt-[89px] lg:items-center lg:justify-center lg:-mt-[89px]">
                        <div className="banner-today h-[180px] w-[140px] px-[52px] py[40px] lg:w-[260px] lg:h-[256px]">
                        </div>
                        <div className="banner-recommend h-[180px] w-[140px] px-[52px] py[40px] lg:w-[260px] lg:h-[256px]">
                        </div>
                        <div className="banner-new h-[180px] w-[140px] px-[52px] py[40px] lg:w-[260px] lg:h-[256px]">
                        </div>
                    </div>
                </div>
                {/* 為什麼要做甜點手機板 */}
                <div className="whyDoMobile w-full flex flex-col items-center justify-center lg:hidden">
                    <div className="whyDo-slogan w-full flex justify-center items-center py-[30px] px-[90px]">
                        <img className="w-[196px] lg:hidden" src={whyDoSloganMobile} alt="whyDoSloganMobile" />
                    </div>
                    <div className="whyDo-banner w-full overflow-hidden h-[400px] lg:h-[420px]">
                        <img className="w-full block h-full object-cover object-[center_70%]" src={whyDoBanner} alt="whyDoBanner" />
                    </div>
                    <div className="whyDo-content flex flex-col gap-[30px] -mt-[100px] bg-[#EAF0ED] px-[30px] py-[30px]   ">
                        <div>
                            <p className="text-[#8DA291] font-['PingFang_TC'] font-light text-[16px] leading-[32px]">
                                青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                            </p>
                        </div>
                        <div>
                            <p className="text-[#8DA291] font-['PingFang_TC'] font-light text-[16px] leading-[32px]">
                                是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
                            </p>
                        </div>
                    </div>
                </div>
                {/* 為什麼要做甜點桌面板 */}
                <div className="whyDoDesktop hidden w-full h-[420px] lg:flex lg:flex-row-reverse lg:justify-center gap-[80px] lg:bg-[#EAF0ED] lg:py-[50px]" >
                    <div className="whyDo-Desktop-slogan -mt-[70px]">
                        <img class="w-[89px]" src={whyDoSlogan} alt="whyDoSlogan" />
                    </div>
                    <div className="whyDo-Desktop-content bg-[#EAF0ED] flex flex-row-reverse">
                        <div className="Desktop-conten-one ">
                            <p className="writing-vertical text-[#8DA291] font-['PingFang_TC'] font-light text-[16px] leading-[32px]">
                                青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                            </p>
                        </div>
                        <div className="Desktop-conten-two ">
                            <p className="writing-vertical mr-20 text-[#8DA291] font-['PingFang_TC'] font-light text-[16px] leading-[32px]">
                                是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
                            </p>
                        </div>
                    </div>
                    <div className="whyDo-Desktopbanner -mt-[70px]">
                        <img className="w-[460px] h-[460px] object-cover " src={whyDoBanner} alt="whyDoBanner" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home