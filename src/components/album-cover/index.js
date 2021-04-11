import React, { memo } from 'react'
import { NewAlbumCoverWrapper } from './style';
import getSize from '@/utils/getSize';
export default memo(function NewAlbumCover(props) {
  const { info, size } = props
  return (
    <NewAlbumCoverWrapper>
      <div className="album_cover">
        <img src={getSize(info.blurPicUrl, size)} alt="" />
        <div className="sprite_covor album_msk"></div>
      </div>
      <p>{info.name}</p>
      <p>{info.artist.name}</p>
    </NewAlbumCoverWrapper>
  )
})
