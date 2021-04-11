import React, { memo, useEffect } from 'react'
import { HotRecommendWrapper } from './style';
import RecommendHeader from 'components/theme-header-recommend';
import SongsCover from 'components/sons-cover'
import { getChangePersonalizedAction } from '../../store/actionCreater'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

export default memo(function HotRecommend() {
  const dispatch = useDispatch()
  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.get('recommend').get('hotRecommend')
  }), shallowEqual)


  useEffect(() => {
    dispatch(getChangePersonalizedAction())

  }, [dispatch])



  return (
    <HotRecommendWrapper >
      <RecommendHeader title={"热门推荐"} keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      {
        hotRecommend.map((item, index) => {
          return <SongsCover key={item.id} name={item.name} playCount={item.playCount} picUrl={item.picUrl} />
        })
      }
      <h2>HotRecommendWrapper</h2>
      <h1>{hotRecommend.length}</h1>
    </HotRecommendWrapper>
  )
})
