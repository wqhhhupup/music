import styled from 'styled-components'


export const SongsCoverWrapper = styled.div`
padding: 0 30px 30px 0;
margin-top:20px;
.cover{
  width: 140px;
  height: 140px;
  position: relative;
  background-position: 0 0;

  .img{
    width:100%;
    height:100%;
    
  }
}
.msk{
  width: 140px;
  height: 140px;
  position: absolute;
  left:0;
  top:0;
  background-position:0 0;
}
.bottom{
    width:140px;
    height:27px;
    padding: 0 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color:#ccc;
    font-size:12px;
    background-color:rgba(0,0,0,.5);
    display:flex;
    align-items:center;
    justify-content:space-between;
    & i:nth-child(1){
      width: 14px;
      height: 11px;
      /* margin:9px 5px 9px 10px; */
      display:inline-block;
      background-position: 0 -24px;
      margin-right: 5px;
    }

  .play{
      width: 16px;
      height: 17px;
      display:inline-block;
      background-position: 0 0;
      
    }
}
p{
  width: 140px;
  height: 56px;
  font-size:14px;
  color:#000;
  margin: 5px 0 0 0 ;
}


`