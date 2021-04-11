import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getChangechangeNewAlbumActionn } from '../../store/actionCreater'

import { NewAlbumWrapper } from './style';
import { Carousel } from 'antd';

import RecommendHeader from 'components/theme-header-recommend';
import NewAlbumCover from 'components/album-cover';


export default memo(function NewAlbum() {
  const dispatch = useDispatch()
  const { newAlbums } = useSelector(state => ({ newAlbums: state.get('recommend').get('newAlbums') }), shallowEqual)
  //other hooks
  useEffect(() => {
    dispatch(getChangechangeNewAlbumActionn())
  }, [dispatch])
  const albumRef = useRef()
  return (
    <NewAlbumWrapper>
      <RecommendHeader title={"新碟上架"} />
      <div className="box">
        <Carousel ref={albumRef}>
          {
            [0, 1].map((item, index) => {
              return (<div className="img_box" key={item}>
                {
                  newAlbums.slice(item * 5, (item + 1) * 5).map((iten, indey) => {
                    return <NewAlbumCover key={iten.id} info={iten} size={100}></NewAlbumCover>
                  })
                }
              </div>)
            })
          }
        </Carousel>
      </div>
      <button className="btn leftbtn sprite_02" onClick={e => { albumRef.current.prev() }}></button>
      <button className="btn rightbtn sprite_02" onClick={e => { albumRef.current.next() }}></button>
    </NewAlbumWrapper>
  )
})
