import Button from 'components/commons/button'
import router from 'next/router';
import Image from 'next/image'
import React from 'react'

/**
 * IntroductionHome Component
 * @component
 * @category Components
 * @subcategory Secitons
 */
export const IntroductionHome = () => {
    const handleNextPage = (path: string) => {
        router.push(path)
    }

    return (
        <div className="w-full xl:max-w-[1040px] flex flex-col gap-[60px]">
            <div className="text-center">
                <div className="text-green-800 text-base font-bold uppercase leading-[30px] tracking-[3.20px]">how it works</div>
                <div className="text-green-950 text-[35px] xl:text-[50px] font-black">Introducing Foresome</div>
                <div className="text-neutral-700 mt-9 xl:mt-0 text-lg font-normal leading-[30px]">We all know that Tiger and Sergio hated playing with each other, but they had no choice. You do! Foresome is the golf compatibility app that helps you find ideal golf partners, either at your local golf course or when you are on the road.</div>
            </div>
            <div className="flex flex-col xl:flex-row gap-24 items-center justify-center">
                <Image 
                    src="/images/logo/introduction-1.png"
                    alt="Introduction Logo 1"
                    width={367}
                    height={712}
                />
                <div className="flex flex-col gap-10 w-full text-center xl:text-left xl:w-[440px]">
                    <div className="flex flex-col gap-3">
                        <div className="text-green-800 text-base font-bold uppercase leading-[30px] tracking-[3.20px]">feature coming soon</div>
                        <div className="text-green-950 text-[35px] font-black">Join Local Tee Times</div>
                        <div className="text-green-950 text-lg font-normal leading-[30px]">Never play alone again, find your next golf partner on Foresome anytime anywhere.</div>
                    </div>
                    <Button 
                        label={'Join Now'} 
                        size={'lg'} 
                        onClick={() => handleNextPage('/waitlist/join')}
                        className="w-full xl:w-[303.69px] h-[49px]"
                    />
                </div>
            </div>
            <div className="flex xl:flex-row gap-24 items-center justify-center flex-col-reverse">
                <div className="flex flex-col gap-10 xl:w-[440px] text-center xl:text-left">
                    <div className="flex flex-col gap-3">
                        <div className="text-green-950 text-[35px] font-black">Find Golfers Anywhere</div>
                        <div className="text-green-950 text-lg font-normal leading-[30px]">Enter parameters such as GHIN, pace of play, gambling preference, dinking preference, and more.</div>
                    </div>
                    <Button 
                        label={'Get the App and Find Golfers'} 
                        size={'lg'}     
                        onClick={() => handleNextPage('/waitlist/join')}  
                        className="w-full xl:w-[303.69px] h-[49px]"
                    />
                </div>
                <Image 
                    src="/images/logo/introduction-2.png"
                    alt="Introduction Logo 2"
                    width={367}
                    height={712}
                />
            </div>
        </div>
    )
}
