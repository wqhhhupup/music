import React, { memo, useEffect, useRef, useCallback, useState } from 'react'

import { BannerWrapper, BannerRight, BannerLeft, TabControl } from './style';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getChangeBannersAction } from '../../store/actionCreater';

import MyCustomLoading from '@/common/my-loading'

import { Carousel } from 'antd';




export default memo(function TopBanner() {
  //组件和redux关联
  const dispatch = useDispatch()
  const { topBanners } = useSelector(state => {
    return {
      topBanners: state.get('recommend').get('topBanners')
    }
  }, shallowEqual)



  useEffect(() => {
    dispatch(getChangeBannersAction())
  }, [dispatch])

  const bannerRef = useRef()
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)

  }, [])
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <BannerWrapper bgImage={`${topBanners[currentIndex] && topBanners[currentIndex].imageUrl}?imageView&blur=40x20`}>
      <div className="wrap-v2 banner">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div key="item.imageUrl" className='banner-item'>
                    <img src={item.imageUrl} alt="" className='img' />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <TabControl>
          <button className="left-btn" onClick={e => bannerRef.current.prev()}></button>
          <button className="right-btn" onClick={e => bannerRef.current.next()}>></button>
        </TabControl>
      </div>

      {/* <MyCustomLoading/> */}
      {/* <div className="example"><Spin size="large"/></div> */}
      {
        topBanners ? '' :  <MyCustomLoading/>


      }
    </BannerWrapper>
  )
}

)
