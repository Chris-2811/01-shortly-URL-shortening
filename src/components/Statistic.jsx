import React from 'react'
import brand from '../assets/images/icon-brand-recognition.svg'
import detailed from '../assets/images/icon-detailed-records.svg'
import custom from '../assets/images/icon-fully-customizable.svg'

function Statistic() {
  return (
    <section id="statistic">
      <div className="section-container mt-20">
        <div className="mb-[96px]">
          <h2 className="text-[28px] text-[#34313D] font-bold mb-4">
            Advanced Statistics
          </h2>
          <p className="text-[#9E9AA8] max-w-lg mx-auto">
            Track how your links are performing across the web with our
            advanced statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="card relative bg-white p-6 pt-[72px]">
            <div className="bg-darkViolet absolute flex items-center justify-center left-[50%] w-20 h-20 -translate-x-[50%] -top-10 p-3 rounded-full">
              <img src={brand} alt="" className="" />
            </div>
            <h3>Brand Recognition</h3>
            <p className="text-[15px] text-[#9E9AA8] max-w-lg mx-auto">
              Boost your brand recognition with each click. Generic links
              don’t mean a thing. Branded links help instil confidence in
              your content.
            </p>
          </div>
          <div className="line w-2 h-[94px] bg-cyan mx-auto lg:w-[30px] lg:h-2"></div>
          <div className="card relative text-center lg:translate-y-11">
            <div className="bg-darkViolet absolute flex items-center justify-center left-[50%] w-20 h-20 -translate-x-[50%] -top-10 p-3 rounded-full">
              <img src={detailed} alt="" color="purple" />
            </div>
            <h3>Detailed Records</h3>
            <p className="text-[15px] text-[#9E9AA8] max-w-lg mx-auto">
              Gain insights into who is clicking your links. Knowing when
              and where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="line w-2 h-[96px] bg-cyan mx-auto lg:w-[30px] lg:h-2 translate-y-8"></div>
          <div className="card relative text-center lg:translate-y-[88px]">
            <div className="bg-darkViolet absolute flex items-center justify-center left-[50%] w-20 h-20 -translate-x-[50%] -top-10 p-3 rounded-full">
              <img src={custom} alt="" color="purple" />
            </div>
            <h3>Fully Costomizable</h3>
            <p className="text-[15px] text-[#9E9AA8] max-w-lg mx-auto">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistic
