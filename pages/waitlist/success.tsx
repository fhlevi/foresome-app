import React from 'react'
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../config/redux/wrapper-redux';
import { setClearSubscription } from '../../slices/subscribe';
import Image from 'next/image';
import Button from '../../components/commons/button';

type Props = {}

const SuccessPage = ({}: Props) => {
    const dispatch: Dispatch<any> = useDispatch();
    const { step } = useSelector((state: RootState) => state.SubscribeReducer)

    const handleToHomePage = (): void => {
        dispatch(setClearSubscription())

        Router.push('/');
    }

    if (step !== 3) {
        Router.push('/');
    }

    return (
        <div className="h-screen w-screen relative">
            <div className="w-full h-full left-0 top-0 absolute bg-green-800" />
            <Image
                className="left-0 top-[0.06px] absolute opacity-40"
                src="/images/banner/banner-success.png"
                alt="success-banner Logo"
                layout='fill'
                objectFit="cover"
            />
            <div className="flex flex-col gap-10 absolute items-center justify-center h-full w-full px-4 xl:px-0">
                <div className="flex flex-col items-center gap-5 w-full">
                    <div className="text-center text-white text-[50px] xl:text-[65px] font-black">Thank you!</div>
                    <div className="xl:w-[435.16px] text-center text-white text-lg font-normal leading-[30px]">We will notify you as soon as we`ve launched.<br />You will get early access before the general public.</div>
                </div>
                <Button
                    label="Home"
                    size="sm"
                    className="left-0 top-[74px] h-[60px] w-full xl:w-[460px]"
                    variant="neutral"
                    onClick={handleToHomePage}
                />
            </div>
        </div>
    )
}

export default SuccessPage