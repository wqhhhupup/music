import React, { memo } from 'react'
import { RecommendHeaderWrapper } from './style';
import PropTypes from 'prop-types';

const RecommendHeader = memo(function (props) {
  const { title, keywords = [], isShow = true } = props
  return (
    <RecommendHeaderWrapper>
      <div className={`left ${isShow ? `sprite_02` : ''}`}>
        <h2>{title}</h2>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return <div key={index}>
                <a href="todo" className="item">{item}</a>
                <span className="line">{index === keywords.length - 1 ? "" : "|"}</span>
              </div>
            })

          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </RecommendHeaderWrapper>
  )

})
RecommendHeader.PropTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired
}
RecommendHeader.default = {
  keywords: []
}
export default RecommendHeader