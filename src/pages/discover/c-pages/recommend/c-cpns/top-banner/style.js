import styled from 'styled-components';
import downloadpPng from '@/assets/img/download.png'
import banner_sprite from '@/assets/img/banner_sprite.png'
export const BannerWrapper = styled.div`
  /* background-color:red; */
  background:url(${props => props.bgImage}) center/6000px;
  height:285px;
  .banner{
    display:flex;
    position: relative;
  }
  .example{
    margin: 20px 0;
    margin-bottom: 20px;
    padding: 30px 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    position:fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    z-index:999;
   }

`

export const BannerLeft = styled.div`
  width:730px; 
  .banner-item {
    width:100%;
    height:285px;
    .img{
      width:100%;
      height:100%;
    }
  }

`
export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  height:285px;
  width: 250px;
  background-image:url(${downloadpPng});
 
`
export const TabControl = styled.div`
  height: 285px;

 .left-btn,.right-btn{
    width: 37px;
    height: 63px;
    position: absolute;
    background-color:transparent;
    /* background-color:red; */
    top:50%;
    transform:translateY(-50%);
    cursor: pointer;
    &:hover{
      background-color:rgba(0,0,0,.1);
    }
    
 }
 .left-btn{
      left:-7%;
      background-image:url(${banner_sprite});
      background-position:0 -360px;
      
    }
    .right-btn{
      right:-7%;
      background-image:url(${banner_sprite});
      background-position:0 -508px;
    }
    
  
`