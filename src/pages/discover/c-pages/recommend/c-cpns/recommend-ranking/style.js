import styled from 'styled-components';
import rcmTopBg from '@/assets/img/recommend-top-bg.png'

export const RecommendRankingWrapper = styled.div`
  width:689px;
  height:527px;
  .ranking_box{
    height:472px;
    background:url(${rcmTopBg}) no-repeat;
    margin-top: 20px;
    padding-left: 1px;
    display:flex;
  }
`