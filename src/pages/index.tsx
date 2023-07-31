import type { NextPage } from 'next'
import DefaultLayout from 'components/layouts/default-layout';
import BannerHome from 'components/sections/banner-home';
import { IntroductionHome } from 'components/sections/introduction-home';
import VactionHome from 'components/sections/vacation-home';
import BusinessHome from 'components/sections/busniess-home';
import SignupHome from 'components/sections/signup-home';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <BannerHome />
      <SignupHome />
      <IntroductionHome />
      <VactionHome />
      <BusinessHome />
    </DefaultLayout>
  );
}

export default Home
