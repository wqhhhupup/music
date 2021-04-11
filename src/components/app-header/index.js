import React, { memo, useRef } from 'react'

import { NavLink } from 'react-router-dom'

import { HeaderWrapper, LeftHeader, RightHeader } from './style'

import { headerLinks } from '@/common/local-data'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function showSelect(item, index) {
  if (index > 2) {
    return <a href={item.link}>{item.title}</a>
  } else {
    return <NavLink to={item.link}>
      {item.title}
      <i className="icon sprite_01"></i>
    </NavLink>
  }
}

export default memo(function Header(props) {
  const inputRef = useRef()

  const handleFocus = (e) => {
    e.target.placeholder = ''
  }
  const handleBlur = (e) => {
    e.target.placeholder = '音乐/视频/用户/电台'
  }
  return (
    <div>
      <HeaderWrapper>
        <div className='content wrap-v1'>
          <LeftHeader>
            <a href="#/" className="logo sprite_01">网易云音乐</a>
            <div className="select-list">
              {
                headerLinks.map((item, index) => {
                  return (<div key={item.title}>
                    {showSelect(item, index)}
                  </div>)
                })
              }
            </div>
          </LeftHeader>
          <RightHeader>
            <label htmlFor="input">
              <Input className='search' placeholder='音乐/视频/用户/电台' ref={inputRef}
                prefix={<SearchOutlined />} name="input" onFocus={handleFocus} onBlur={handleBlur} />
            </label>
            <a href="/#" className="author">创作者中心</a>
            <div className="login">登陆</div>
          </RightHeader>
        </div>
        <div className='divider'></div>
      </HeaderWrapper>

    </div>
  )
})
