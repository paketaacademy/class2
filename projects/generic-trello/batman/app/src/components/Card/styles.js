import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  background: rgb(238 221 130);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
  cursor: grab;

  .header--card{
    position: absolute; 
    top: -16px;
    left: 0; 
    
    
  }

  .text--card{
    font-weight: 500;
    line-height: 15px; 
    
    
  }

  .title--card{
    color: red;
  }

  .img--card{
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-left: 250px;
  }

  @media screen and (max-width: 339px) and (min-width: 228px) {
    .img--card{
      margin-left: 200px;
    }
  }

  ${props => props.isDragging && css `
    border: 1px dashed rgba(0,0,0,0.3 );
    padding-top: 31px;
    background: rgb(238 232 170);
    box-shadow: none;

    .text--card, 
    .img--card, 
    .header--card {
      opacity: 0;
    }
  `}
`

export const Label = styled.span`
  width: 50px;
  height: 10px;
  border-radius: 5px;
  display: inline-block;
  background: ${props => props.color};
`