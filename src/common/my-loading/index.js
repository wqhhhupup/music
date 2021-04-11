import React, { memo } from 'react'
import { MyInconWrapper } from './style'

import { createFromIconfontCN } from '@ant-design/icons';
import { Spin } from 'antd';



export default memo(function index() {

  const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2476861_waac5jfrgn.js',
    // 在 iconfont.cn 上生成
  });

  const antIcon = <MyIcon type="icon-loading" style={{ fontSize: 40, color: 'gray' }} spin />; // loading style

  return (
    <MyInconWrapper>
      {/* <MyIcon type="icon-loading" className="my-icon" /> */}
      <Spin size="large" indicator={antIcon} tip="Loading..." />
    </MyInconWrapper>
  )
})
