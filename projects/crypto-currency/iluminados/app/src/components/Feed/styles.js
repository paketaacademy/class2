import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const FeedContainer = styled(Grid)`
  margin: 0 30px;
  color: var(--white);
  h1{
    color: var(--white);
    font-size: 2rem;
    border-bottom: 2px solid var(--yellow);
    display: inline-block;
    margin-top: 16px;
    font-family: var(--secondary-font-family);
    line-height: 1.3;
  }
  .rows{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .feed-container--div{
    background: var(--white);
    margin: 16px 8px 16px 0;
    color: var(--black);
    border-radius: 10px;
    max-width: 300px;
    min-width: 250px;
    min-height: 330px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 0 8px #f7f4f352;
    .feed-container--title{
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      font-family: var(--secondary-font-family);
      font-size: 1.1rem;
      padding: 8px 16px;
      .feed-container--symbol{
        width: 40px;
        height: 40px;
        background-color: var(--yellow);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 0.70rem;
        font-weight: bold;
        color: var(--white);
      }
      .feed-container--name{
        margin: 0 0 0 8px;
      }
      .feed-container--time{
        margin: 0 0 0 auto;
      }
    }
    .feed-container--body{
      padding: 8px 16px;
      font-family: var(--primary-font-family);
      line-height: 1.2;
      font-style: italic;
    }
    .feed-container--footer{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      font-family: var(--secondary-font-family);
      font-size: 0.85rem;
    }
  }
`


