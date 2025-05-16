import React, {useEffect} from 'react'
import Head from 'next/head'
// import Custom Components
import Header from './layouts/sections/slonigiraf/header'
import BannerSection from './layouts/sections/slonigiraf/banner'
import AboutSection from './layouts/sections/slonigiraf/about'
import ServiceSection from './layouts/sections/slonigiraf/service'
import VideoSection from './layouts/sections/slonigiraf/video'
import WorkSection from './layouts/sections/slonigiraf/work'
import ExpertSection from './layouts/sections/slonigiraf/expert'
import TestimonialSection from './layouts/sections/slonigiraf/testimonial'
import BlogSection from './layouts/sections/slonigiraf/blog'
import FooterSection from './layouts/sections/slonigiraf/footer'

const Home = () => {
 
  useEffect(() => {
    document.body.style.setProperty('--primary', '#0069B4')
    document.body.style.setProperty('--secondary', '#464545')
    document.body.style.setProperty('--light', '#F6A857')
    document.body.style.setProperty('--dark', '#F19135')
  })

  return (
    <div className="theme-color" >
        <Head>
            <title>Slonig | Effortless Teaching Through Peer Exchange</title>
            <meta name='Slonig | Effortless Teaching Through Peer Exchange' content='' />
        </Head>

        <Header className="agency" />

        <BannerSection />

        <VideoSection />

        <AboutSection />

        <ServiceSection />

       

        <TestimonialSection />

       

        <ExpertSection />

        <WorkSection />

        <BlogSection />

        <FooterSection />

    </div>
  )
}

export default Home
