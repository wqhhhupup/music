import styled from 'styled-components';

export const NewAlbumWrapper = styled.div`
  width: 687px;
  height:243px;

  
  position: relative;
  margin-bottom:30px;
  .btn{
    width: 17px;
    height: 17px;
    position:absolute;
    /* background-color:red; */
  }
  .leftbtn{
    top:50%;
    left:0;
    background-position: -260px -75px;
    transform:translateY(50%);

  }
  .rightbtn{
    top:50%;
    right:0;
    transform:translateY(50%);
    background-position: -300px -75px;
  }
  .box{
    width: 100%;
    height: 186px;
    background-color:#F5F5F5;
    border:1px solid #d3d3d3;
    margin: 20px 0 37px;
    /* display:flex!important; */
    .img_box{
      display:flex!important;
      margin-top:28px;
      justify-content:space-around;
      padding: 0 16px;
    }
    /* display:flex; */
  }
`