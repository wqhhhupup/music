import styled from 'styled-components'

export const MyInconWrapper = styled.div`
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
  .ant-spin-text{
    color:black;
    margin-top:10px;
  }
  .my-icon{
    font-size:40px;
  }

`