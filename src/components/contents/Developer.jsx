import React from 'react'

import { developerText } from '../../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
  return (
    <section id='developer'>
      <h2>👍 추천 개발자를 소개합니다.</h2>
      <div className="developer__inner overflow">
        {
          developerText.map((a, i) => {
            return (
              <div className="developer" key={i}>
                <div className='developer__img play__icon'>
                  <Link to={`/channel/${a.channelId}`}>
                    <img src={a.img} alt={a.name} />
                  </Link>
                </div>
                <div className="developer__info">
                  <Link to={`/channel/${a.channelId}`}>
                    {a.name}
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Developer