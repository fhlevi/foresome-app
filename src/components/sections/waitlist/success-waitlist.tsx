import React from 'react'
import Image from 'next/image';
import Button from 'components/commons/button';

type Props = {
    onClick: () => void;
};

const SuccessWaitlist = (props: Props) => {
    const handleGotoHome = (): void => {
        props.onClick()
    }

    return (
        <div className="h-screen w-screen relative">
            <div className="w-full h-full left-0 top-0 absolute bg-green-800" />
            <Image
                className="left-0 top-[0.06px] absolute opacity-40"
                src="/images/banner/banner-success.png"
                alt="success-banner Logo"
                layout='fill'
            />
            <div className="flex flex-col gap-10 absolute items-center justify-center h-full w-full">
                <div className="flex flex-col gap-5">
                    <div className="text-center text-white text-[65px] font-black">Thank you!</div>
                    <div className="w-[435.16px] text-center text-white text-lg font-normal leading-[30px]">We will notify you as soon as we`ve launched.<br />You will get early access before the general public.</div>
                </div>
                <Button
                    label="Home"
                    size="sm"
                    className="left-0 top-[74px] h-[60px] w-[460px]"
                    variant="neutral"
                    onClick={handleGotoHome}
                />
            </div>
        </div>
    )
}

export default SuccessWaitlist;