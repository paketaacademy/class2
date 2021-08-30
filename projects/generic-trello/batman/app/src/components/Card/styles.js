import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  background: rgb(238 221 130);
  border-radius: 5px;
  margin-bottom: 24px;
  padding: 5px;
  cursor: pointer;
`
export const Header = styled.div`
  position: absolute; 
  top: -16px;
  left: 0; 
`

export const P = styled.p`
  font-weight: 500;
  line-height: 15px;
`

export const Image = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  margin-left: 250px;
`

export const Label = styled.span`
  width: 50px;
  height: 10px;
  border-radius: 5px;
  display: inline-block;
  background: ${props => props.color};
  margin-top: 16px;

  ${props => props.isDragging && css`
  @media screen and (max-width: 339px) and (min-width: 228px) {
    .img--card{
      margin-left: 200px;
    }
  `}
  
  
  ${props => props.isDragging && css` 
    border: 1px dashed rgba(0,0,0,0.3 );
    padding-top: 31px;
    background: rgb(238 232 170);
    box-shadow: none;

    P, 
    .img--card, 
    Header {
      opacity: 0;
    }
  `}
`