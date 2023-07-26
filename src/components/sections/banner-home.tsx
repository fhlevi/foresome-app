

/**
 * BannerHome Component
 * @component
 * @category Components
 * @subcategory Sections
 */
export default function BannerHome() {
    return (
        <div className="w-full max-w-[1728px] h-[900px] relative">
            <div className="w-[1143.49px] h-[743.97px] left-[292px] absolute">
                <div className="w-[383.49px] h-[743.97px] left-[760px] top-0 absolute">
                    <img className="w-[383.49px] h-[743.97px] left-0 top-0 absolute" src="/images/banner/Above the folds.png" />
                </div>
                <div className="w-[720px] h-[426px] left-0 top-[139.26px] absolute">
                    <div className="w-[720px] left-0 top-0 absolute text-green-800 text-[65px] font-black">Join local tee times and find your ideal golf partner(s) anywhere</div>
                    <div className="w-[660px] left-0 top-[400px] absolute text-green-950 text-lg font-normal leading-[30px]">Golf’s number one compatibility app that helps you find golf partners that you actually want to play with wherever you are.</div>
                </div>
            </div>
            <div className="w-[992px] h-[897px] pt-[12.70px] pl-9 left-0 absolute justify-start items-center inline-flex">
                <img src="/images/banner/banner-golf.png" />
            </div>
        </div>
    );
}
