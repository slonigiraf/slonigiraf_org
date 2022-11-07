import React, {useEffect} from 'react'
import Head from 'next/head'
// import Custom Components
import Header from './layouts/sections/slonigiraf/header'
import BannerSection from './layouts/sections/slonigiraf/banner'
import AboutSection from './layouts/sections/slonigiraf/about'
import ServiceSection from './layouts/sections/slonigiraf/service'
import VideoSection from './layouts/sections/slonigiraf/video'
import WorkSection from './layouts/sections/slonigiraf/work'
import PricingSection from './layouts/sections/slonigiraf/pricing'
import ExpertSection from './layouts/sections/slonigiraf/expert'
import TestimonialSection from './layouts/sections/slonigiraf/testimonial'
import BlogSection from './layouts/sections/slonigiraf/blog'
import FooterSection from './layouts/sections/slonigiraf/footer'

const Home = () => {
 
  useEffect(() => {
    document.body.style.setProperty('--primary', '#0368b4')
    document.body.style.setProperty('--secondary', '#464545')
    document.body.style.setProperty('--light', '#1F357D')
    document.body.style.setProperty('--dark', '#0368b4')
  })

  return (
    <div className="theme-color" >
        <Head>
            <title>Slonigiraf </title>
            <meta name='Agency Layout' content='' />
        </Head>

        <Header className="agency" />

        <BannerSection />

        <AboutSection />

        <ServiceSection />

        <VideoSection />

        <WorkSection />

        {/* <PricingSection /> */}
        <TestimonialSection />

        <ExpertSection />

        <BlogSection />

        <FooterSection />

    </div>
  )
}

export default Home
