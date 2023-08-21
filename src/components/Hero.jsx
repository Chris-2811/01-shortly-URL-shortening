import React from 'react'
import working from '../assets/images/illustration-working.svg'

function Hero() {
  return (
    <section id="hero" className="bg-white">
      <div className="section-container pb-[168px] md:pb-[222px] md:pr-0">
        <div className="flex flex-col-reverse md:flex-row md:space-y-0">
          <div className="md:text-left mt-9 md:w-1/2">
            <h1 className="text-[42px] lg:text-[77px]  lg:leading-[90px] leading-[48px] font-bold -tracking-[1px] lg:max-w-[775px] md:max-w-sm lg:-tracking-[2px]">
              More than just shorter links
            </h1>
            <p className="mt-[15px] mb-8 text-[#9E9AA8] md:mt-[5px] md:mb-[38px] md:max-w-sm lg:max-w-[540px] md:text-[22px]">
              Build your brand’s recognition and get detailed insights on
              how your links are performing.
            </p>
            <a href="#" className="btn-primary inline-block">
              Get Started
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={working}
              alt=""
              className="min-w-[160%] lg:min-w-[130%] md:max-w-[500px] md:translate-x-[40px] lg:translate-x-[80px]  hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
