import Card from '../components/Card';
import homeBanner from "../assets/images/home_banner.png";
import whyDoSlogan from "../assets/images/whyDo.png";
import whyDoSloganMobile from '../assets/images/whyDo_horizan.png';
import whyDoBanner from '../assets/images/whyDo_banner.png';
import whyEatSlogan from '../assets/images/whyEat.png';
import whyEatSloganMobile from '../assets/images/whyEat_horizan.png';
import whyEatBanner from '../assets/images/whyEat_banner.png';
import dontReasonSlogan from '../assets/images/dontReason.png';
import dontReasonSloganMobile from '../assets/images/dontReason_horizan.png';
import { useProducts } from "../hooks/useProducts";
import { CATEGORY } from '../constant/rule.js';
import { Link } from 'react-router-dom';
import "../assets/styles/pages/home.scss";
import { RotatingLines } from 'react-loader-spinner';

function LoadingIcon() {
    return (
        <div className="">
            <RotatingLines
                visible={true}
                height="50"
                width="50"
                color="#3F5D45"
                strokeWidth="1"
                animationDuration="0.95"
            />
        </div>
    )
}

export function Home() {
    let loadingDom = LoadingIcon
    const { products, error, loading, retry } = useProducts({ category: CATEGORY.DAILY.value });
    return (
        <div className="w-full mb-[60px] ">
            <div className="w-full flex flex-col justify-start lg:px-[42px] lg:py-[30px] lg:mb-[80px]">
                <div>
                    <img className="w-full mx-auto object-cover sm:h-[277px] lg:max-w-[1024px] lg:h-[496px]" src={homeBanner} alt="banner" loading="lazy" />
                </div>
                <div className="w-full flex items-center justify-center gap-[1px] md:items-center md:justify-center md:-mt-[89px] lg:items-center lg:justify-center lg:-mt-[89px]">
                    <Link to={`/products?category=${CATEGORY.DAILY.value}`}>
                        <div className="banner-today  h-[180px] w-[140px] px-[52px] py[40px] lg:w-[260px] lg:h-[256px]">
                        </div>
                    </Link>
                    <Link to={`/products?category=${CATEGORY.RECOMMEND.value}`}>
                        <div className="banner-recommend h-[180px] w-[140px] px-[52px] py[40px] lg:w-[260px] lg:h-[256px]">
                        </div>
                    </Link>
                    <Link to={`/products?category=${CATEGORY.NEW.value}`}>
                        <div className="banner-new h-[180px] w-[140px] px-[52px] py[40px] lg:w-[260px] lg:h-[256px]">
                        </div>
                    </Link>
                </div>
            </div>
            {/* 為什麼要做甜點手機板 */}
            <div className="whyDoMobile w-full flex flex-col items-center justify-center lg:hidden">
                <div className="whyDo-slogan w-full flex justify-center items-center py-[30px] px-[90px]">
                    <img className="w-[196px] lg:hidden" src={whyDoSloganMobile} alt="whyDoSloganMobile" loading="lazy" />
                </div>
                <div className="whyDo-banner w-full overflow-hidden h-[400px] lg:h-[420px]">
                    <img className="w-full block h-full object-cover object-[center_70%] md:object-[center_50%]" src={whyDoBanner} alt="whyDoBanner" loading="lazy" />
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
            <div className="whyDoDesktop hidden w-full h-[420px] lg:flex lg:flex-row-reverse lg:justify-center gap-[60px] lg:bg-[#EAF0ED] lg:py-[50px] lg:mb-[80px]" >
                <div className="whyDo-Desktop-slogan -mt-[70px]">
                    <img className="w-[89px]" src={whyDoSlogan} alt="whyDoSlogan" loading="lazy" />
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
                <div className="whyDo-Desktop-banner -mt-[70px]">
                    <img className="w-[460px] h-[460px] object-cover " src={whyDoBanner} alt="whyDoBanner" loading="lazy" />
                </div>
            </div>
            {/* 為什麼一定要吃甜點手機板 */}
            <div className="whyEatMobile w-full flex flex-col items-center justify-center lg:hidden">
                <div className="whyEat-slogan w-full flex justify-center items-center py-[30px] px-[90px]">
                    <img className="w-[196px] lg:hidden" src={whyEatSloganMobile} alt="whyEatSloganMobile" loading="lazy" />
                </div>
                <div className="whyEat-banner w-full overflow-hidden h-[400px] lg:h-[420px]">
                    <img className="w-full block h-full object-cover object-[center_70%] md:object-[center_50%]" src={whyEatBanner} alt="whyEatBanner" loading="lazy" />
                </div>
                <div className="whyEat-content flex flex-col gap-[30px] -mt-[100px] bg-[#EAF0ED] px-[30px] py-[30px]   ">
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
            {/* 為什麼一定要吃甜點桌面板 */}
            <div className="whyEatDesktop hidden w-full h-[420px] lg:flex lg:flex-row-reverse lg:justify-center gap-[60px] lg:bg-[#EAF0ED] lg:py-[50px]" >
                <div className="whyEat-Desktop-banner -mt-[70px]">
                    <img className="w-[460px] h-[460px] object-cover " src={whyEatBanner} alt="whyEatBanner" loading="lazy" />
                </div>
                <div className="whyEat-Desktop-slogan -mt-[70px]">
                    <img className="w-[89px]" src={whyEatSlogan} alt="whyEatSlogan" loading="lazy" />
                </div>
                <div className="whyEat-Desktop-content bg-[#EAF0ED] flex flex-row-reverse">
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
            </div>
            {/* 想吃甜點不需要理由 */}
            <div className="dontReason-slogan w-full flex justify-center items-center  px-[74px] py-[30px] lg:py-[50px]">
                <img className="hidden lg:flex lg:w-[89px]" src={dontReasonSlogan} alt="dontReasonSlogan" loading="lazy" />
                <img className="w-[226px] lg:hidden" src={dontReasonSloganMobile} alt="dontReasonSloganMobile" loading="lazy" />
            </div>
            <div className="dontReason-List w-full flex justify-start  items-center overflow-x-auto no-scrollbar scroll-smooth  snap-x snap-mandatory px-[30px] 
                gap-[50px] lg:justify-center  lg:gap-[20px] lg:max-w-[1024px] lg:mx-auto">
                {loading ? loadingDom : error ?
                    (<div className="w-full bg-[#EAF0ED] justify-center items-center text-center py-[17px]">
                        <p className="text-[#E57373] font-['PingFang TC'] leading-[20px] text-[24px] font-semibold py-[17px] px-[20px]">載入失敗,暫無資料！</p>
                        <button
                            onClick={retry}
                            className=" border border-[#8DA291] text-[#8DA291] font-mediu rounded-md hover:bg-[#3F5D45] active:bg-[#3F5D45] hover:text-[#FFFFFF] active:text-[#FFFFFF] transition-colors  py-[5px] px-[20px]"
                        >
                            重試
                        </button>
                    </div>)
                    :
                    products.map((item, index) => {
                        return (
                            <Card key={index} product={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home