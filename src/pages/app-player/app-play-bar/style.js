import styled from 'styled-components';
import sprite_player from '@/assets/img/playbar_sprite.png'
import sprite_icon from '@/assets/img/sprite_icon.png'
import process_bar from '@/assets/img/progress_bar.png'

export const PlayBarWrapper = styled.div`
  width:100%;
  height:53px;
  position:fixed;
  left:0;
  bottom:0;  
  background-color:red;
  background:url(${sprite_player}) repeat 0 0;
  .playbar{
    display:flex;
    align-items:center;
  }
  .btns{
    width: 137px;
    padding: 10px 0 0 0;
    .btn{
    width: 28px;
    height: 28px;
    margin:5px 8px 0 0 ;
  }
   .prev{
     background-position: 0 -130px;
   }
   .next{
     background-position: -80px -130px;
   }
   .play{
     width: 36px;
     height: 36px;
     background-position: 0 -204px;
     margin-top:0;
   }
   .pause{
     background-position:-40px -165px;
   }
  }
  .album-img{
    width: 34px;
    height: 34px;
    margin: 6px 15px 0 0;
    img{
      width:100%;
      height:100%;
    }
  }
  .play-process{
    width: 608px;
    color:#fff;
    font-size:12px;
    .info{
        padding:8px 0 0 0 ;
        span{
          color:#9b9b9b;
          margin-right:5px;
        }
        .song-name{
          color:#e8e8e8;
        }
        
      }
    .slider{
      display:flex;
      .time{
        span{
          color:#787878;
        }
      }
    }
    .slider>.ant-slider{
      width:409px;
      margin-top:3px;
      .ant-slider-rail{
        height: 7px;
        background:url(${process_bar}) right 0;

      }
      .ant-slider-handle{
        width: 24px;
        height: 25px;
        background: url(${sprite_icon}) 0 -250px;
        margin-top:-8px;
        border:none;
      }
      .ant-slider-track{
        height: 9px;
        background:url(${process_bar}) left -66px;
      }
    }
  }

`
export const ShareInconWrapper = styled.div`
  width: 60px;
  height: 36px;
  display:flex;
  align-items:center;
  .add{
    width: 25px;
    height: 25px;
    background-position: -88px -163px;
    cursor: pointer;
  }
  .share{
    width: 25px;
    height: 25px;
    background-position: -114px -189px;
    cursor: pointer;

  }
  

`
export const RightIconBox = styled.div`
    width: 126px;
    height: 36px;
    display:flex;
    align-items:center;
    .volume{
      width: 25px;
      height: 25px;
      background-position: -2px -248px;
      cursor: pointer;

    }
    .switch{
      width: 25px;
      height: 25px;
      background-position: -3px -344px;
      cursor: pointer;

    }
    .song-list{
      width: 59px;
      height: 25px;
      background-position: -42px -68px;
      cursor: pointer;

    }

`
