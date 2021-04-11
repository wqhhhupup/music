import React, { memo, useEffect } from 'react'

import { RecommendRankingWrapper } from './style';
import RecommendHeader from 'components/theme-header-recommend';
import TopRanking from 'components/top-ranking';


import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getChangechangeRankingsction } from '../../store/actionCreater'



export default memo(function RecommedRanking() {
  const dispatch = useDispatch()
  const { topRanking, newRanking, originRanking } = useSelector(state => ({
    topRanking: state.get('recommend').get('topRanking'),
    newRanking: state.get('recommend').get('newRanking'),
    originRanking: state.get('recommend').get('originRanking')
  }), shallowEqual)

  useEffect(() => {
    dispatch(getChangechangeRankingsction(0))
    dispatch(getChangechangeRankingsction(2))
    dispatch(getChangechangeRankingsction(3))

  }, [dispatch])

  return (
    <RecommendRankingWrapper>
      <RecommendHeader title={"榜单"} />
      <div className="ranking_box">

        <TopRanking info={topRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
      RecommedRanking
      <h1>{topRanking.length}</h1>
    </RecommendRankingWrapper>
  )
})
