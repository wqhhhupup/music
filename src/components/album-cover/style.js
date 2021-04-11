import styled from 'styled-components';

export const NewAlbumCoverWrapper = styled.div`
  width: 118px;
  height: 150px;
  .album_cover{
    position: relative;
    .album_msk{
      width:100%;
      height:100%;
      position:absolute;
      top: 0;
      left: 0;
      background-position: 0 -570px;
    }
  }
  p:nth-of-type(1){
    font-size:12px;
    color:#000;
  }
  p:nth-of-type(2){
    font-size:12px;
    color:#666;
  }
`