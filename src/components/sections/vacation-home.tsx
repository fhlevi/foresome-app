import Image from 'next/image'
import React from 'react'

/**
 * VacationHome Component
 * @component
 * @category Components
 * @subcategory Sections
 */
export default function VactionHome() {
  return (
    <div className="w-full max-w-[1480px] h-[727.92px] rounded-[20px] bg-green-800 px-[186px] relative">
        <div className="flex flex-row gap-[61.28px]">
            <div className="w-[383.48px] h-[743.96px] relative bottom-[50px]">
                <Image 
                    src={'/images/logo/vacation.png'}
                    alt='vacation logo'
                    width={383.48}
                    height={743.96}
                />
            </div>
            <div className="flex flex-col gap-3 relative top-[160px]">
                <div className="w-[661.87px] text-white text-[50px] font-black">Make the most of your vacation with Foresome</div>
                <div className="w-[661.87px] text-white text-lg font-normal leading-[30px]">We have all been on vacation with a significant other and found ourselves staring out the hotel window at a championship golf course with no plans to play. Bummer. But not with Foresome. While your loved one hits the spa, you can hit the links by matching yourself with compatible golf partners so that you can make the most out of your vacation. Find your ideal foursome or partner with a similar handicap, gambling companion, or drinking buddy using our proprietary algorithm.</div>
            </div>
        </div>
    </div>
  )
}
