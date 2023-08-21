import { createContext, useEffect, useState } from 'react'

const LinkContext = createContext()

export const LinkProvider = ({ children }) => {
  const [links, setLinks] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    fetchLinks()
    console.log(links)
  }, [])

  // Add links
  function addLinks(object) {
    const newLinks = [...links, object]
    setLinks(newLinks)
    localStorage.setItem('links', JSON.stringify(newLinks))
  }

  // Fetch links from localStorage
  function fetchLinks() {
    const storedLinks = localStorage.getItem('links')
    if (storedLinks) {
      setLinks(JSON.parse(storedLinks))
    }
  }

  // Shorten Link
  async function shortenLink(link) {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    )
    const data = await response.json()

    console.log(data)

    if (data.ok) {
      const shortenedLink = data.result.short_link
      return shortenedLink
    } else if (data.error_code === 2) {
      setErrorMessage('Invalid URL')
    } else {
      setErrorMessage('An error occurred while shortening the link')
    }

    console.log(errorMessage)
  }

  // Delete Item
  function deleteItem(id) {
    const newLinks = links.filter((link) => link.id !== id)
    setLinks(newLinks)
    localStorage.setItem('links', JSON.stringify(newLinks))
  }

  return (
    <LinkContext.Provider
      value={{
        links,
        errorMessage,
        addLinks,
        shortenLink,
        deleteItem,
        setErrorMessage,
      }}
    >
      {children}
    </LinkContext.Provider>
  )
}

export default LinkContext

/* Solution for local json-server */

/* import { createContext, useEffect, useState } from 'react'

const LinkContext = createContext()

export const LinkProvider = ({ children }) => {
  const [links, setLinks] = useState([])

  useEffect(() => {
    fetchLinks()
    console.log(links)
  }, [])

  // Add links
  async function addLinks(object) {
    const response = await fetch('http://localhost:5000/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })

    const data = await response.json()

    setLinks([...links, data])
  }

  // Fetch links from server
  async function fetchLinks() {
    const response = await fetch('http://localhost:5000/links')

    const data = await response.json()

    setLinks(data)
  }

  // Shorten Link
  async function shortenLink(link) {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    )
    const data = await response.json()

    const shortenedLink = data.result.short_link

    return shortenedLink
  }

  // Delete Item
  async function deleteItem(id) {
    const response = await fetch(`http://localhost:5000/links/${id}`, {
      method: 'DELETE',
    })

    console.log(id)

    setLinks(
      links.filter((link) => {
        return link.id !== id
      })
    )
  }

  return (
    <LinkContext.Provider
      value={{
        links,
        addLinks,
        shortenLink,
        deleteItem,
      }}
    >
      {children}
    </LinkContext.Provider>
  )
}

export default LinkContext
 */
