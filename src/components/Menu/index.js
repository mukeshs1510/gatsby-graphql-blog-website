import React from "react"
import { Link } from "gatsby"

const Menu = ({ items }) => {
  return (
    <div>
      {items.map(item => {
        ;<Link to={item.link}>
          <li key={item.id}>{item.name}</li>
        </Link>
      })}
    </div>
  )
}

export default Menu
