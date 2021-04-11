import React, { memo } from 'react'
import { SongsCoverWrapper } from './style'
import getSize from '@/utils/getSize';

export default memo(function SongsCover(props) {
  const { picUrl, name, playCount } = props
  // console.log(props);

  return (
    <SongsCoverWrapper>
      <div className="cover">
        <img src={getSize(picUrl,140)} alt="" className="img" />
        <div className="msk sprite_covor"></div>
        <div className="bottom">
          <div>
            <i className="sprite_icon"></i>
            <i>{`${parseInt(playCount / 10000)}万`}</i>
          </div>
          <i className="sprite_icon play" ></i>
        </div>
      </div>
      <p>{name}</p> 
    </SongsCoverWrapper>
  )
})
