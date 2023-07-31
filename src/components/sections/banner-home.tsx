/**
 * BannerHome Component
 * @component
 * @category Components
 * @subcategory Sections
 */
export default function BannerHome() {
    return (
        <div className="w-full max-w-[1728px] xl:h-[900px] relative">
            <div className="w-full flex items-center justify-center xl:h-[743.97px] xl:absolute">
                <div className="w-full h-full md:w-[720px] xl:h-[426px] left-0 xl:top-[139.26px]">
                    <div className="w-full xl:w-[720px] text-center xl:text-left left-0 top-0 text-green-800 text-[50px] xl:text-[65px] font-black">Join local tee times and find your ideal golf partner(s) anywhere</div>
                    <div className="xl:w-[660px] left-0 xl:top-[400px] text-green-950 text-lg font-normal leading-[30px] text-center xl:text-left">Golf’s number one compatibility app that helps you find golf partners that you actually want to play with wherever you are.</div>
                </div>
                <div className="xl:w-[383.49px] xl:h-[743.97px] xl:left-[760px] top-0">
                    <img className="w-full xl:w-[383.49px] h-[743.97px] left-0 top-0" src="/images/banner/Above the folds.png" />
                </div>
            </div>
            <div className="w-[992px] h-[897px] pt-[12.70px] pl-9 left-0 absolute justify-start items-center hidden xl:inline-flex">
                <img src="/images/banner/banner-golf.png" />
            </div>
        </div>
    );
}
