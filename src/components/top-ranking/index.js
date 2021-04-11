import React, { memo } from 'react'
import { TopRankingWrapper } from './style';
import getSize from '@/utils/getSize';

import { getChangeSongAction } from '@/pages/app-player/app-play-bar/store/actionCreator.js'
import { useDispatch } from 'react-redux'
export default memo(function TopRanking(props) {
  const { info } = props
  const { tracks = [] } = info
  // dispatch hook
  const dispatch = useDispatch()
  const playMusic = (e, item) => {
    e.preventDefault()
    dispatch(getChangeSongAction(item.id))
    // dispatch(getChangeSongListAction(item.id))

  }

  return (
    <TopRankingWrapper>
      <div className="top_header">
        <img src={getSize(info.coverImgUrl, 80)} alt="" />
        <a href="/todo">ranking</a>
        <div className="title">
          <a href="/todo">
            <h3>{info.name}</h3>
          </a>
          <div className="icon_box">
            <a href="/todo" className="play sprite_02">1</a>
            <a href="/todo" className="collect sprite_02">2</a>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (<div className="list_item" key={index}>
              <span>{index + 1}</span>
              <div className="info">
                <a href="/todo" className="text-nowrap name">{item.name}</a>
                <div className="info_icon">
                  <a href="/todo" className="play sprite_02" onClick={e => { playMusic(e, item) }}>play</a>
                  <a href="/todo" className="add sprite_icon2 ">add</a>
                  <a href="/todo" className="collect sprite_02">collect</a>
                </div>
              </div>
            </div>)
          })
        }
      </div>


    </TopRankingWrapper>
  )
})
