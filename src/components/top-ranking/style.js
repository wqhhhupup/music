import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  width:230px;
  height:472px;
  .top_header{
    width: 230px;
    height: 120px;
    padding:20px 0 0 20px;
    display:flex;
    /* box-sizing:border-box; */
    img{
      width:80px;
      height:80px;
    }
    >a{
      text-indent:-9999px;
    }
    .title{
      margin:6px 0 0 10px;
      width:116px;
      h3{
        font-weight:600;
        font-size:14px;
        color:#333;
      }
      .icon_box{
        display:flex;
        margin-top:10px;
        
        a{
          width:22px;
          height: 22px;
          margin-right:10px;
          display:block;
          text-indent:-9999px;
        
        }
        .play{
          background-position: -267px -205px;
        }

        .collect{
          background-position: -300px -205px;
        }
      }
    }
  }
  .list .list_item{
    display:flex;
    padding:0 0 0 20px;
    height:32px;
    position: relative;
    &:nth-of-type(-n+3) span{
        color:#c10d0c;
      }
    span{
      display:block;
      width:35px;
      text-align:center;
      line-height:32px;
      font-size:16px;
      
    }
    .info{
      width:170px;
      /* line-height:32px; */
      display:flex;
      justify-content:space-between;
      align-items:center;
      font-size:12px;
      .name{
        flex:1;
      }
      .info_icon{
        width: 82px;
        display:none;
      
        a{
          width: 17px;
          height: 17px;
          margin-right:10px;
          display:inline-block;
          text-indent:-9999px;
        }
        >.play{
          background-position: -267px -268px;
        }
        >.collect{
          background-position: -297px -268px;
        }
        >.add{
          background-position: 0 -700px;
          margin:2px 6px 0 0 ;
        }
      }
    }
    &:hover{
      .info_icon{
        display:block;
      }
    }
  }

`