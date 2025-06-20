import React from 'react'
import Image from 'next/image';

/**
 * BusniessHome Component
 * @component
 * @category Components
 * @subcategory Sections
 */
export default function BusinessHome() {
  return (
    <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center">
            <Image 
                src="/images/header-logo.png"
                alt="Main-header Logo"
                width={127}
                height={60}
            />
        </div>
        <div className="text-center text-green-800 text-[35px] xl:text-[50px] font-black">Play golf on business trips with ease</div>
        <div className="xl:w-[1000px] text-center gap-8 text-neutral-700 text-lg font-normal leading-[30px] flex flex-col">
            <span>Business trips can be a drag when none of your associates play golf and the conference is being held at a GOLF RESORT. But you never have to worry about that when you have Foresome. Instead of playing alone or risking getting paired with two slow pokes who can’t stop talking about their RV, you can use the app to find your ideal golf partners and make the most of your afternoon off. Stop wishing you had someone to play with and actually find someone to play with on Foresome.</span>
            <span>Let those other apps worry about finding you a life partner. Foresome will find you the perfect golf partners for 4 hours of fun (or whatever your pace of play preferences are).</span>
        </div>
    </div>
  )
}
