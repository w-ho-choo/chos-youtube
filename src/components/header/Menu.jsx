import React from 'react'

import { Link, useLocation } from 'react-router-dom'

const Menu = (props) => {
  const location = useLocation();

  return (
    <nav className='header__menu'>
      <ul className='menu'>
        {
          props.headerMenus.map((a, i) => {
            return (
              <li 
                key={i}
                className={location.pathname === a.src ? 'active' : ''}
              >
                <Link to={a.src}>
                  {a.icon}{a.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
      <ul className='keyword'>
        {
          props.searchKeyword.map((a, i) => {
            return (
              <li key={i} className={location.pathname === a.src ? 'active' : ''}>
                <Link to={a.src}>
                  {a.title}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Menu