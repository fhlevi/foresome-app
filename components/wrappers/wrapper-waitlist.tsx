import React from 'react'
import Image from 'next/image';
import Header from '../layouts/header';

type Props = {
    children: any
}

const WrapperWaitlist = ({ children }: Props) => {
    return (
        <>
            <Header className="xl:hidden" />
            <div className="xl:flex xl:flex-row xl:w-screen xl:h-screen px-5 xl:px-0 relative xl:items-center xl:justify-center top-[130px] xl:top-0">
                <div className="xl:grow xl:relative"></div>
                <div className="flex flex-col-reverse xl:flex-row gap-7 xl:gap-[61.28px] xl:absolute xl:z-10 pb-24 xl:pb-0">
                    {children}
                </div>
                <div className="hidden xl:inline w-[511.6px] h-full relative">
                    <div className="w-full h-full bg-green-800 absolute" />
                    <Image
                        className="left-0 top-[0.06px] absolute opacity-40"
                        src="/images/banner/waitlist-join-bg.png"
                        alt="waitlist-join Logo"
                        layout='fill'
                    />
                </div>
            </div>
        </>
    )
}

export default WrapperWaitlist