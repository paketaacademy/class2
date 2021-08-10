import React, {useState,useEffect} from 'react'
import Table from '../Table/TableC' 



const Market = () => {

  const [market,setMarket]= useState()
   console.log('---',market)
    useEffect(()=>{
      fetch('http://localhost:3030/market')
      .then((response)=>{
        console.log(response)
        return response.json()
      }).then((response)=>{
        setMarket(response.data)
      })
    },[])


  return (   
    <>
      {market && <Table data={market}/>}
    </>
  )
}



export default Market