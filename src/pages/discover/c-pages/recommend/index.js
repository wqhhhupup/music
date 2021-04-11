import React, { memo } from 'react'
import { RecommendWrapper, LeftContent, RightContent, Content } from './style';
import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import RecommedRanking from './c-cpns/recommend-ranking'
import NewAlbum from './c-cpns/new-album'
export default memo(function Recommend() {
  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <LeftContent>
          <HotRecommend />
          <NewAlbum/>
          <RecommedRanking/>
        </LeftContent>
        <RightContent>
        </RightContent>
      </Content>

    </RecommendWrapper>
  )
})
