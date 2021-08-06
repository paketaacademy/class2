import styled from 'styled-components'

export const Load = styled.div`
  display: ${(props) => props.inputDisplay || 'flex'};
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  .loading{
    min-width: 20px;
    height: 50px;
    margin: 0 5px;
    display: inline-block;
    background-color: rgb(255, 153, 0);
    border-radius: 5px;
  }

  .loading:nth-of-type(1){
    animation: load 0.5s -0.50s ease-in-out alternate infinite;
  }

  .loading:nth-of-type(2){
    animation: load 0.5s -0.35s ease-in-out alternate infinite;
  }

  .loading:nth-of-type(3){
    animation: load 0.5s -0.25s ease-in-out alternate infinite;
  }

  .loading:nth-of-type(4){
    animation: load 0.5s -0.15s ease-in-out alternate infinite;
  }

  @keyframes load {
    to{
      transform: scaleX(1.5) scaleY(1.5);
    }
  }
`