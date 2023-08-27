import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import LinkContext from './context/linkContext'
import { useContext } from 'react'

function LinkItem({ item }) {
  const [copied, setCopied] = useState(false)

  function handleCopyLink(e) {
    e.preventDefault()
    navigator.clipboard.writeText(item.shortenedLink)
    setCopied(true)
  }

  const { deleteItem } = useContext(LinkContext)

  console.log(item.shortenedLink)

  return (
    <div className="bg-white relative flex flex-col  p-[16px] md:flex-row md:items-center md:justify-between  mt-6 text-left text-sm">
      <div className="border-b border-[#9E9AA8] md:border-none pb-4 md:pb-0 border-opacity-25 ">
        <a href={item.newLink} className="max-w-sm" target="_blank">
          {item.newLink}
        </a>
      </div>
      <div className=" md:flex md:items-center md:space-x-6 pt-4 md:pt-0">
        <a href={item.shortenedLink} className="text-cyan" target="_blank">
          <p>{item.shortenedLink}</p>
        </a>
        <div
          onClick={handleCopyLink}
          className="copy-btn btn-primary-2 cursor-pointer inline-block w-full text-center mt-2 md:mr-2 md:mt-0 md:w-[105px]"
          style={{ backgroundColor: copied ? '#3A3054' : '#2BD0D0' }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </div>
        <FaTimes
          onClick={() => deleteItem(item.id)}
          className="absolute top-3 right-4 md:top-0 md:relative text-xl md:right-[6px] cursor-pointer"
        />
      </div>
    </div>
  )
}

export default LinkItem
