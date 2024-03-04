import React from 'react'

const Sns = (props) => {
  return (
    <div className='header__sns'>
      <ul>
        {
          props.snsLink.map((a, i) => {
            return (
              <li key={i}>
                <a 
                  href={a.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={a.title}
                >
                  <span>{a.icon}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sns