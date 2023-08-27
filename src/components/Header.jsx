import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { FaBars } from 'react-icons/fa'

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="section-container">
        <div className="flex justify-between items-center space-x-11 pt-10 pb-7 md:pb-20 md:pt-[55px]">
          <img src={logo} alt="" />
          <div className="flex flex-1 justify-between">
            <nav className="hidden md:flex space-x-4 text-gray">
              <a href="#" className="hover:text-grayishViolet">
                Features
              </a>
              <a href="#" className="hover:text-grayishViolet">
                Pricing
              </a>
              <a href="#" className="hover:text-grayishViolet">
                Ressources
              </a>
            </nav>
            <div className="hidden md:block">
              <a href="#" className="">
                Login
              </a>
              <a href="#" className=" btn-primary ml-9">
                Sign Up
              </a>
            </div>
          </div>

          {/* Hamburger Menu */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            className="cursor-pointer md:hidden"
            id="open"
            onClick={() =>
              !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false)
            }
          >
            <rect width="24" height="3" fill="#9E9AA8" />
            <rect y="9" width="24" height="3" fill="#9E9AA8" />
            <rect y="18" width="24" height="3" fill="#9E9AA8" />
          </svg>
        </div>

        {isModalOpen && (
          <div className="text-center flex flex-col space-y-7 bg-darkViolet text-white rounded-lg py-10 px-6 md:hidden">
            <div>
              <a href="#">Features</a>
            </div>
            <div>
              <a href="#">Pricing</a>
            </div>
            <div>
              <a href="#">Resources</a>
            </div>
            <div className="bg-gray w-full h-[1px] opacity-25"></div>
            <div>
              <a href="#">Login</a>
            </div>
            <div className="btn-primary">Sign Up</div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
