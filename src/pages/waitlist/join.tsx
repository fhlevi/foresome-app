import React from 'react'
import JoinWaitList from 'components/sections/waitlist/join-waitlist';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { setClearSubscription, setSubscription } from 'slices/subscribe';
import { Dispatch } from 'redux';
import router from 'next/router';
import { RootState } from 'config/redux/wrapper-redux';
import RegisterWaitlist from 'components/sections/waitlist/register-waitlist';
import SuccessWaitlist from 'components/sections/waitlist/success-waitlist';

type SectionProps = {
    step: number
}

const WaitlistSections: React.FC<SectionProps> = ({ step }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const handleNextStep = (formVal: SectionProps) => {
        const data = {
            ...formVal,
        }

        dispatch(setSubscription(data));
    }

    if (step === 2) {
        return <RegisterWaitlist onNextStep={handleNextStep} />
    }

    return <JoinWaitList onNextStep={handleNextStep}/>;
}

const JoinPage = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { step } = useSelector((state: RootState) => state.SubscribeReducer)

    const handleToHomePage = (): void => {
        dispatch(setClearSubscription())
        router.push('/');
    }

    if (step === 3) {
        return <SuccessWaitlist onClick={handleToHomePage} />
    }

    return (
        <div className="flex flex-row w-screen h-screen relative items-center justify-center">
            <div className="grow relative"></div>
            <div className="flex flex-row gap-[61.28px] absolute z-10">
                <WaitlistSections step={step} />
            </div>
            <div className="w-[511.6px] h-full relative">
                <div className="w-full h-full bg-green-800 absolute" />
                <Image
                    className="left-0 top-[0.06px] absolute opacity-40"
                    src="/images/banner/waitlist-join-bg.png"
                    alt="waitlist-join Logo"
                    layout='fill'
                />
            </div>
        </div>
    )
}

export default JoinPage;