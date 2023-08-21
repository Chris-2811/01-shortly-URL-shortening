import React from 'react'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import instagram from '../assets/images/icon-instagram.svg'

function Footer() {
  return (
    <footer className="bg-veryDarkBlue text-white py-14" id="footer">
      <div className="section-container flex flex-col items-center md:flex-row md:justify-between md:items-start  space-y-10 md:space-y-0">
        <Logo className="logo-white" />
        <div className="flex flex-col md:flex-row  space-y-9 md:space-y-0 md:space-x-10 lg:space-x-20 lg:ml-16">
          <div className="menu">
            <h4 className="">Features</h4>
            <div className="flex flex-col mt-5 text-gray mt_ text-[15px] space-y-[10px]">
              <a href="#">Link Shortening</a>
              <a href="#">Branded Links</a>
              <a href="#">Analytics</a>
            </div>
          </div>
          <div className="menu">
            <h4>Resources</h4>
            <div className="flex flex-col mt-5 text-gray mt_ text-[15px] space-y-[10px]">
              <a href="#">Blog</a>
              <a href="#">Developers</a>
              <a href="#">Support</a>
            </div>
          </div>
          <div className="menu">
            <h4>Company</h4>
            <div className="flex flex-col mt-5 text-gray mt_ text-[15px] space-y-[10px]">
              <a href="#">About</a>
              <a href="#">Our Team</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="socials flex space-x-4">
          <a href="https://de-de.facebook.com/" target="_blank">
            <img src={facebook} alt="" className="ficon duration-200" />
          </a>
          <a href="https://twitter.com/?lang=de" target="_blank">
            <img src={twitter} alt="" className="ficon duration-200" />
          </a>
          <a href="https://www.pinterest.de/" target="_blank">
            <img src={pinterest} alt="" className="ficon duration-200" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="group"
          >
            <img src={instagram} alt="" className="ficon duration-200" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
