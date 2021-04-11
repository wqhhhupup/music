import React, { memo } from 'react'

import { LoadingWrapper } from './style';


import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


export default memo(function Loading() {


  const antIcon = <LoadingOutlined style={{ fontSize: 40, color: 'gray' }} spin />; // loading style

  return (
    <LoadingWrapper>
      <Spin size="large" indicator={antIcon} tip="Loading..." />
    </LoadingWrapper>
  )
})
