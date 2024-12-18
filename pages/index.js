import React, {useEffect} from 'react'
import Head from 'next/head'
// import Custom Components
import Header from './layouts/sections/slonig/header'
import BannerSection from './layouts/sections/slonig/banner'
import AboutSection from './layouts/sections/slonig/about'
import ServicesSection from './layouts/sections/slonig/services'
import FormatSection from './layouts/sections/slonig/format'
import TeamSection from './layouts/sections/slonig/team'
import ScreenshotSection from './layouts/sections/slonig/screenshot'
import MemberSection from './layouts/sections/slonig/member'
import PricingSection from './layouts/sections/slonig/pricing'
import ClientSection from './layouts/sections/slonig/client'
import FooterSection from './layouts/sections/slonig/footer'
import CopyrightSection from './layouts/sections/slonig/copyright'

const Home = () => {
 
  useEffect(() => {
    document.body.style.setProperty('--primary', '#f19135')
    document.body.style.setProperty('--secondary', '#434345')
    document.body.style.setProperty('--light', '#f19135')
    document.body.style.setProperty('--dark', '#f19135')
  })

  return (
      <div className="theme-color" >
        <Head>
          <title>Slonig - best teaching App ever!</title>
        </Head>

        <Header />

        <BannerSection />

        <AboutSection />

        <ServicesSection />

        <FormatSection />

        <TeamSection /> 

        <ScreenshotSection />

        <MemberSection />

        <PricingSection />
      
        <ClientSection />

        <FooterSection />

        <CopyrightSection />

        {/* Tap on Top */}
        <div className="tap-top">
            <div><i className="fa fa-angle-double-up"></i></div>
        </div>
        {/* Tap on Ends */}
        
      </div>
  )
}

export default Home
