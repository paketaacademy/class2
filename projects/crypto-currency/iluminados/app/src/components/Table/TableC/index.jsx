import React ,{useState}from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Table_, TableHead_, TableRowOne, TableRowTwo, TableCellOne, TableCellTwo, TableCellThree,TableCellThreeP, TableContainerM } from './styles'
import { Button } from '@material-ui/core';


  
    const Table= ({data}) => {
      const [currentPage,setCurrentPage] = useState(0)
      const pagination = {current:0 , pages: data.length/100 , items: 
        data.slice(currentPage*100,currentPage*100+100)}

        const RenderPaginationButton = () => {
          const buttonList = []
          for(let i = 0; i < pagination.pages ; i++) {
            buttonList.push(<Button onClick={()=> setCurrentPage(i)}>{i+1}</Button>)
          }
          return buttonList
        }
    const classes = {};
        console.log(data)
    return (
      <TableContainerM component={Paper}>
        <Table_ className={classes.table} aria-label="simple table">
          <TableHead_>
            <TableRowOne >
              <TableCellOne></TableCellOne>
              <TableCellOne align="right">ALL CATEGORIES</TableCellOne>
              <TableCellOne align="right">DEFI</TableCellOne>
              <TableCellOne align="right">STABLE COIN</TableCellOne>
              <TableCellOne align="right">ERC-20</TableCellOne>
              <TableCellOne align="right">NFT</TableCellOne>
              <TableCellOne align="right">$DOT ECOSYSTEM</TableCellOne>
              <TableCellOne align="right">$BSC ECOSYSTEM</TableCellOne>
              <TableCellOne align="right"> $ZIL ECOSYSTEM</TableCellOne>
              <TableCellOne align="right"></TableCellOne>
              <TableCellOne align="right">DATA OPTIONS</TableCellOne>
              <TableCellOne align="right"> 27 OF 27 METRICS</TableCellOne>
                                     
            </TableRowOne>

            <TableRowTwo>
              <TableCellTwo>Coin</TableCellTwo>
              <TableCellTwo align="right">Galaxy Score</TableCellTwo>
              <TableCellTwo align="right">AltRank</TableCellTwo>
              <TableCellTwo align="right">Price</TableCellTwo>
              <TableCellTwo align="right">1H % Change(USD)</TableCellTwo>
              <TableCellTwo align="right">24H % Change(BTC)</TableCellTwo>
              <TableCellTwo align="right">Market Cap</TableCellTwo>
              <TableCellTwo align="right">Market Dominance</TableCellTwo>
              <TableCellTwo align="right">Volatility</TableCellTwo>
              -<TableCellTwo align="right">Circulating Supply</TableCellTwo>
              <TableCellTwo align="right">Social Volume</TableCellTwo>
              <TableCellTwo align="right">Social Engagement</TableCellTwo>
              <TableCellTwo align="right">Social Contributors</TableCellTwo>
              <TableCellTwo align="right">Social Dominance</TableCellTwo>
              



                         
            </TableRowTwo>

          </TableHead_>
          <TableBody>
            {console.log(data)}
            {pagination.items.map((row) => (
             
              <TableRow key={row.n}>
                <TableCellThree component="th" scope="row">
                  {row.n}
                </TableCellThree>
                <TableCellThree align="right">{row.qs}</TableCellThree>
                <TableCellThree align="right">{row.acr}</TableCellThree>
                <TableCellThree align="right">{row.p}</TableCellThree>
                <TableCellThreeP primary={row.pch > 0} align="right">{row.pch}</TableCellThreeP>
                <TableCellThreeP primary={row.pc > 0} align="right">{row.pc}</TableCellThreeP>
                <TableCellThree align="right">{row.mc}</TableCellThree>
                <TableCellThree align="right">{row.d}</TableCellThree>
                <TableCellThree align="right">{row.vt}</TableCellThree>
                <TableCellThree align="right">{row.sv}</TableCellThree>
                <TableCellThree align="right">{row.ss}</TableCellThree>
                <TableCellThree align="right">{row.c}</TableCellThree>
                <TableCellThree align="right">{row.sd}</TableCellThree>
                
              </TableRow>

              
            ))}
          </TableBody>

        </Table_>
           <RenderPaginationButton/>   
      </TableContainerM>

    );
      }



  export default Table