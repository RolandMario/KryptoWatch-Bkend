const Web3 = require('web3')

const Moralis  = require('moralis/node');

const tokenABI = require('../abi/tokenABI.json')
const bnbTokenABI = require('../abi/bnbTokenABI.json')
const submitCoin = require('../model/submitCoin')
const uniswapV2FactoryABI = require('../abi/uniswapV2FactoryABI.json')

const Promoted = async(req, res) => {





   // const web3 = new Web3("https://speedy-nodes-nyc.moralis.io/4511a20bb9a227c49da47ebe/bsc/mainnet");
   
    const web3 = new Web3("https://mainnet.infura.io/v3/476b1736c9ca45208828bcf55645f666");

    const getTokenName = async (address)=>{
        let bnbTokenContract = new web3.eth.Contract(bnbTokenABI, address);
        let name  = await bnbTokenContract.methods.name().call();
        return name; 
    }
    const getTokenSymbol = async (address)=>{
      let tokenContract = new web3.eth.Contract(bnbTokenABI, address);
      let symbol  = await tokenContract.methods.symbol().call();
      return symbol; 
    }
    const getTokenTotalSupply = async (address)=>{
        let tokenContract = new web3.eth.Contract(bnbTokenABI, address);
        let totalSupply  = await tokenContract.methods.totalSupply().call();
        return totalSupply/Math.pow(10, 18); 
      }
    
      // const getTokenPrice = async (address, chain)=>{
      //   const priceOptions = {address: address, chain: chain, exchange: "PancakeSwapv2"};
      //   const price = await Moralis.Web3API.token.getTokenPrice(priceOptions);
      //   return price.usdPrice;
      // }
      const getPriceETHV2 = async(address) => {
        //liquidity pools
        //create tokenA, 100, 2   1/50 0.05
      
        //Wrapper ETHER, WETH
      
        let addressWETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
        
        //const uniswapV2FactoryABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../abi/uniswapV2FactoryABI.json")));
        let uniswapV2FactoryAddress = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
        let uniswapV2Factory = new web3.eth.Contract(uniswapV2FactoryABI, uniswapV2FactoryAddress);
      
        let pool = await uniswapV2Factory.methods.getPair(address, addressWETH).call();
        //const tokenABI = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../abi/tokenABI.json")));
        let contractToken = new web3.eth.Contract(tokenABI, address);
        let contractWETH = new web3.eth.Contract(tokenABI, addressWETH);
      
        let balanceToken = await contractToken.methods.balanceOf(pool).call();
        let balanceWETH = await contractWETH.methods.balanceOf(pool).call();
      
        let tokenDecimal = await contractToken.methods.decimals().call();
        let wethDecimal = 18;
        balanceToken = balanceToken / Math.pow(10, tokenDecimal);
        balanceWETH = balanceWETH / Math.pow(10, 18);
        
      
        let price = 1 / (balanceToken / balanceWETH);
        
        return price;
        
      }
      const getPriceUSDV2 = async(address) => {
          
        // pool - USDC, weth
        let addressUSDC = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";
        let priceETH = await getPriceETHV2(addressUSDC);
        let priceToken = await getPriceETHV2(address);
        
        priceETH = 1 / priceETH;
        
        let price = priceToken * priceETH;
        return price;
      
      }


 //get promoted coin data
    // try {
    //     const coinInfo = await submitCoin.find();
    //     //res.status(200).send(coinInfo)
    // } catch (error) {
    //     res.status(400).send(error)
    // }

    
    const dbArray=[];
    const coinArray = ['0x1CE0c2827e2eF14D5C4f29a091d735A204794041'];
    //const coinArray = ['0x2b591e99afe9f32eaa6214f7b7629768c40eeb39'];
    
    const coinInfo = await submitCoin.find();
    coinInfo.map(info=>{dbArray.push(info)})
     
    //console.log('from db',dbArray)
 
    const Data = async(myArray)=>{
        

       const promises= myArray.map(async(e)=>{
      return{
        address: e.contract_Address,
        logo: e.logo,
        chain: 'bsc',
        name: await getTokenName(e.contract_Address),
        symbol: await getTokenSymbol(e.contract_Address),
        totalSupply: await getTokenTotalSupply(e.contract_Address),
        price: await getPriceUSDV2(e.contract_Address),
        marketCap: await getTokenTotalSupply(e.contract_Address) * await getPriceUSDV2(e.contract_Address),
   
      //   price: await getTokenPrice(e.contract_Address, e.chain),
      //   marketCap: await getTokenTotalSupply(e.contract_Address) * await getTokenPrice(e.contract_Address)
      }    
      });
     let results= await Promise.all(promises)
     res.status(200).send(results)
      console.log(results)
    }
    Data(dbArray)
 
    
}

module.exports = Promoted;