import React from 'react'
import boostMobile from '../assets/images/bg-boost-mobile.svg'
import { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import LinkContext from './context/linkContext'
import LinkList from './LinkList'

function Links() {
  const [text, setText] = useState('')

  const { addLinks, shortenLink, errorMessage, setErrorMessage } =
    useContext(LinkContext)

  function handleChange(e) {
    setText(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (text === '') {
      setErrorMessage('Please add a link')
    } else {
      const shortenedLink = await shortenLink(text)

      if (shortenedLink) {
        const links = {
          newLink: text,
          shortenedLink: shortenedLink,
          id: uuidv4(),
        }

        addLinks(links)
      }

      setText('')
    }
  }

  return (
    <section id="links">
      <div className="section-container -mt-[78px]">
        <div className="p-6 md:p-[52px] bg-shorten bg-darkViolet rounded-lg">
          <form
            className="flex flex-col md:flex-row space-y-9 md:space-y-0 md:space-x-6"
            onSubmit={handleSubmit}
          >
            <div className="form-control relative md:flex-1">
              <input
                type="text"
                className="w-full px-10 py-2 rounded-md placeholder:text-[15px] placeholder:opacity-50"
                placeholder="Shorten a link here..."
                value={text}
                onChange={handleChange}
              />
              {errorMessage && (
                <small className="absolute text-red -bottom-6 left-0">
                  {errorMessage}
                </small>
              )}
            </div>
            <button type="submit" className="btn-primary-2 ">
              Shorten it!
            </button>
          </form>
        </div>
        <LinkList />
      </div>
    </section>
  )
}

export default Links
