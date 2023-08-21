import React, { useContext, useEffect } from 'react'
import LinkContext from './context/linkContext'
import LinkItem from './LinkItem'

function LinkList() {
  const { links } = useContext(LinkContext)

  console.log(links)

  return (
    <div className="mt-6">
      {links.map((item) => (
        <LinkItem id={item.id} item={item} />
      ))}
    </div>
  )
}

export default LinkList
