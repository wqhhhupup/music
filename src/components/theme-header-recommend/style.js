import styled from 'styled-components';

export const RecommendHeaderWrapper = styled.div`
  width: 680px;
  height:35px;

  border-bottom:2px solid #C10D0C;
  

  display:flex;
  justify-content:space-between;

  line-height:35px;
  .left{
    display:flex;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
 
    .keyword{
      width:240px;
      display:flex;
      color:#666;
      font-size:12px;
      margin-left:20px;
      font-family: Arial, Helvetica, sans-serif;
      /* justify-content:space-between; */
      span{
      
        margin:0 10px;
        color:#ccc;
      }
    }
  }
  .item{
    

  }
  .right{

    .icon{
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position:0 -240px;
    }
  }

`
