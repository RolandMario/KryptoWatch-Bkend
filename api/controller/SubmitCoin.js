//const axios = require('axios');
const submitCoin = require('../model/submitCoin')

const SubmitCoin = async(req, res) => {
    
    try {
        const coin = await submitCoin.findOne({contract_Address: req.body.contract_Address})
         if(coin) return res.status(400).send('coin already exists');
         
         const coinDetails = new submitCoin({
            logo: req.file.path, 
             chain: req.body.chain,
             contract_Address: req.body.contract_Address,
             name: req.body.name,
             symbol: req.body.symbol,
             presale: req.body.presale,
             lunchDate: req.body.lunchDate,
             description: req.body.description,
             website: req.body.website,
             telegram: req.body.telegram,
             twitter: req.body.twitter,
             facebook: req.body.facebook,
             instagram: req.body.instagram
             
            
         })
        
        const coinData = await coinDetails.save()
        console.log('saved details', coinData)
        res.status(200).send('return', coinData)
    } catch (error) {
        res.status(500).send("error occurred on the server")
    }

}
   

module.exports = SubmitCoin;
