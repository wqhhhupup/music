import React, { memo, Suspense } from 'react'
import { DiscoverWrapper } from './style'

import Loading from '@/common/loading';


import { NavLink } from 'react-router-dom'
import { dicoverMenu } from '@/common/local-data.js'
import { renderRoutes } from 'react-router-config'


// import { Spin } from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';
// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />; // loading style





export default memo(function Discover(props) {
  // const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />; // loading style
  const { route } = props
  return (
    <div>
      {/* <Spin indicator={antIcon} /> */}
      <DiscoverWrapper>
        <ul className=" wrap-v1">
          <li className="holder"></li>
          {
            dicoverMenu.map((item, index) => {
              return (<li key={item.title}>
                <NavLink className="font" to={item.link}>{item.title}</NavLink>
              </li>)
            })
          }
        </ul>

      </DiscoverWrapper>
      <Suspense fallback={<Loading />}>
        {renderRoutes(route.route)}
      </Suspense>

    </div>
  )
})
