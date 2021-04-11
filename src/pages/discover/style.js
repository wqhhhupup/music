import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  height: 34px;
  background-color:#C20C0C;
  display:flex;
  .holder{
    width:157px;
    height:34px;
  }
  ul{
    display:flex;
    /* align-items:center; */
    justify-content:flex-start;
    
    li{

      text-align:center;
      /* flex:1; */
      /* margin-bottom:5px; */
      padding:0 20px;
      .active{
         background-color:#9B0909;
         border-radius:21px;
       }

      a{
        color:#fff;
        text-decoration:none;
        display:inline-block;
        padding:0 13px;
        height:20px;
        transform:translateY(25%);
        font-size:12px;
        /* margin-bottom:10px; */
       &:hover{
         background-color:#9B0909;
         border-radius:21px;
       }
       
      }
    }
  }

`