import React from 'react'
import Main from '../components/section/Main'

import { todayText } from '../data/today'

import { Link } from 'react-router-dom'

const Today = () => {
  return (
    <Main
      title="추천 영상"
      description="오늘의 추천 유튜브 영상입니다.">


      <section id='todayPage'>
        <h2>👍 오늘의 추천영상!</h2>
        {
          todayText.map((a, i) => {
            return (
              <div className='today__inner' key={i}>
                <div className='today__thumb play__icon'>
                  <Link to={a.page}>
                    <img src={a.img} alt={a.title} />
                  </Link>
                </div>
                <div className='today__text'>
                  <span className='today'>today!</span>
                  <h3 className='title'>
                    <Link to={a.page}>
                      {a.title}
                    </Link>
                  </h3>
                  <p className='desc'>{a.desc}</p>
                  <div className='info'>
                    <span className='author'>
                      <Link to={`/channel/${a.channelId}`}>
                        {a.author}
                      </Link>
                    </span>
                    <span className='date'>{a.date}</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </section>
    </Main>
  )
}

export default Today