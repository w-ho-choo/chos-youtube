import React from 'react'
import { Link } from 'react-router-dom'

import Main from '../components/section/Main'

import { developerText } from '../data/developer'

const Developer = () => {
  return (
    <Main
      title="추천 개발자"
      description="오늘의 추천 개발자 유튜버입니다.">

      <section id='developer'>
        <h2>👍 추천 개발자를 소개합니다.</h2>
        <div className="developer__inner">
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

    </Main>
  )
}

export default Developer