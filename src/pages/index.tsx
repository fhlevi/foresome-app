import type { NextPage } from 'next'
import DefaultLayout from 'components/layouts/default-layout';
import Image from 'next/image';
import Button from 'components/commons/button';
import BannerHome from 'components/sections/banner-home';
import InputText from 'components/forms/input-text/input-text';
import { IntroductionHome } from 'components/sections/introduction-home';
import VactionHome from 'components/sections/vacation-home';
import BusinessHome from 'components/sections/busniess-home';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <BannerHome />
      <div className="w-full max-w-[1480.48px] h-[456.92px] relative">
        <div className="w-full max-w-[1480.48px] h-[456.86px] left-0 top-[0.06px] absolute rounded-[20px] bg-green-800" />
        <Image 
          className="left-0 top-[0.06px] absolute rounded-[20px] opacity-40"
          src="/images/banner/signup-banner.png"
          alt="signup-banner Logo"
          width={1480.48}
          height={456.86}
        />
        <div className="w-[594.73px] left-[165.23px] top-[115.46px] absolute text-white text-[50px] font-black">
          Sign up for the newsletter today.
        </div>
        <div className="w-[545.54px] left-[165.23px] top-[261.46px] absolute text-white text-lg font-normal leading-[30px]">
          Get launch updates and be the first to know when Foresome is live in
          your area. Make the most of vacations, business trips, time off, or
          the weekend at home with Foresome, golf’s only compatibility app.
        </div>
        <div className="w-[474px] h-[123px] left-[850.77px] top-[166.85px] absolute">
          {/* <div className="w-[474px] h-[60px] left-0 top-0 absolute rounded-[5px] border border-white">ss</div> */}
          <InputText 
            placeholder="Your Email"
          />
          <Button 
            label="Subscribe" 
            outline={false} 
            variant="neutral"
            size="md"
            disabled={false} 
            type="button"
            className="left-0 top-[74px] absolute"
          />
          {/* <div className="left-[28px] top-[21px] absolute text-white text-base font-normal">
            Your Email
          </div> */}
        </div>
      </div>
      <IntroductionHome />
      <VactionHome />
      <BusinessHome />
    </DefaultLayout>
  );
}

export default Home
