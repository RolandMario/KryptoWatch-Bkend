
const axios = require('axios')
const CoinGecko = require('coingecko-api');
const submitCoin = require('../model/submitCoin')

const Load = async(req, res) => {

   //let coinGecko = new CoinGecko();
   const API_KEY = "m_cf4b77ed51bf719c8fed95757996d1763ede26c3"
   
  try{
    
    const result = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}`)
    // const coinInfo = await submitCoin.find();
    // res.status(200).send(coinInfo)
    res.status(200).send(result.data)
    
    
    }catch (error) {
        res.status(500).send(error)
    }

}
module.exports =  Load;
