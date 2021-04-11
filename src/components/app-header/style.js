import styled from 'styled-components'
import sprite_01 from '@/assets/img/sprite_01.png'
export const HeaderWrapper = styled.div`
  height:75px;
  background-color:#242424;
  .content{
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* background-color:blue; */
  }
  .divider{
    height:5px;
    background-color:#C20C0C;
  }

`
export const LeftHeader = styled.div`
  height:70px;
  display:flex;
  .logo{
    width:157px;
    height:100%;
    text-indent:-99999px;
    display:block;
    background-position:0 0;
    padding-right:20px;
   
  }
  .select-list{
    display:flex;
    line-height:70px;
    font-size:14px;
    position:relative;
    .active .icon{
        width: 12px;
        height: 7px;
        display:inline-block;
        position: absolute;
        background-color:red;
        left:50%;
        bottom:0;
        transform:translateX(-50%);
        background-position:-226px 0;
      }
    div{
      padding:0 19px;  
      
      a{
        display:inline-block;
        height:70px;
        text-decoration:none;
        color:#fff;
        position:relative;
      }
      &:hover{
        color:#fff;
        background-color:#000
      }
    }
    &::after{
      width:28px;
      height: 19px;
      content:'';
      position:absolute;
      /* display:block; */
      top:21px;
      right:-21px;
      background-image:url(${sprite_01});
      background-position:-190px 0;
    }
  }

 `
export const RightHeader = styled.div`
  height:70px;
  display:flex;
  align-items:center;
  .search{
    width: 158px;
    height: 32px;
    border-radius:16px;
    input::placeholder{
      font-size:12px;
    }
   
  }
  .author{
      display:block;
      width: 90px;
      height: 32px;
      border-radius:16px;
      color:#ccc;
      border:1px solid #4f4f4f;
      text-align:center;
      line-height:32px;
      text-decoration:none;
      margin-left:12px;
      &:hover{
        border:1px solid #fff; 
        color:#fff;
      }
    }
    .login{
      width: 50px;
      height:45px;
      color:#787878;
      text-align:center;
      line-height:45px;
      cursor: pointer;
    }

`
