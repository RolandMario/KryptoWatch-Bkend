import React, {useEffect, useState, useContext} from 'react';
import Divider from '@mui/material/Divider'
import './content.css'
import axios from 'axios'
import io from 'socket.io-client'
import Button from '@mui/material/Button';
import {DcContext} from '../context/DComponents'
import { DataContext } from '../context/DataContext';
import { TokenNameContext } from '../context/TokenNameContext';
const Content = () => {
  //https://krytowatch.herokuapp.com/
  const baseURL = process.env.API_URL || 'http://localhost:5000'

  const [output, setOutput] = useContext(DataContext);
  const [dcData, setDcData] = useContext(DcContext)
  const [tokenName, setTokenName] = useContext(TokenNameContext)
  const [unmounted, setUnmounted] = useState(false)
  const [promotedCoin, setPromotedCoin] = useState([])
  const fetchData = async ()=>{
    const data = await axios.get(baseURL)
    setOutput(data.data)
    //console.log(data.data)
  }
  const url = `${baseURL}/promoted`
  const fetchPromoted = async ()=>{
    const {data} = await axios.get(url)
    setPromotedCoin(data)
    
  }
  useEffect(()=>{
    fetchPromoted()
  },[promotedCoin])
 
  useEffect(() => {
    if(tokenName!== null)
    setDcData('VoteContent')
  }, [tokenName]);
  
  useEffect(()=>{
  //fetch token data from gecko API
    let interval = setInterval(()=>{fetchData()}, 5 * 1000);
    return ()=>{clearInterval(interval)}
    
  },[output])
  return (
    <>
        <table id='customers'>
    <thead>
      <tr>
       <th>Name</th>
        <th>Symbol</th>
        <th>24H Price Change</th>
        <th>Price</th>
        <th>Market Cap</th>
        <th>Total Supply</th>
        <th>No. of Holders</th>
        {/* <th>Age</th> */}
        <th>Vote</th>
      </tr>
    </thead>
    <tbody>
        
     {promotedCoin?.map((data, index) => (
                  <tr key={data._id}>
                  <td>{data.name} &nbsp; <img src={`${baseURL}/${data.logo}`} width={20} height={20}/></td>
                   <td>{data.symbol}</td>
                   <td>---</td>
                   <td>{data.price}</td>
                  <td>{data.marketCap}</td>
                  <td>{data.totalSupply}</td>
                  <td>---</td>

                
                   <td><Button variant="outlined" onClick={()=>{setTokenName(index)}}>Vote</Button></td>

                 
               </tr>
              ))} 
    </tbody>
  </table>
  <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
    <table id='customers'>
    <thead>
      <tr>
       <th>Name</th>
        <th>Symbol</th>
        <th>24H Price Change</th>
        <th>Price</th>
        <th>Market Cap</th>
        <th>Circulating Supply</th>
        <th>No. of Holders</th>
        {/* <th>Age</th> */}
        <th>Vote</th>
      </tr>
    </thead>
    <tbody>
        
    {output?.map((data, index) => (
                 <tr key={data.id}>
                  <td>{data.name}  &nbsp;    <img src={data.logo_url} width={20} height={20}/></td>
                  <td>{data.symbol}</td>
                  <td>{data["1d"].price_change}</td>
                  <td>${data.price}</td>
                  <td>{data.market_cap}</td>
                  <td>{data.circulating_supply}</td>
                  <td>{data.num_pairs}</td>
                  <td><Button variant="outlined" onClick={()=>{setTokenName(index)}}>Vote</Button></td>

                 
               </tr>
              ))}
    </tbody>
  </table>
  </>
  )
};

export default Content;
