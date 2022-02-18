import Typography from '@mui/material/Typography';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import  FormControl  from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack'
import FormControlLabel from '@mui/material/FormControlLabel';
import './content.css'
import './Form.css'
import axios from 'axios'
import { useFormik, Field, Form } from 'formik';

const SubmitToken = () => {

    const formik = useFormik({
        initialValues:{
        logo:'',
        chain: '',
        contract_Address: '',
         name:'',
         symbol: '',
         presale: '',
         lunchDate:'',
         description:'',
         website:'',
         telegram:'',
         twitter:'',
         facebook:'',
         instagram:''
        },
        onSubmit: async (value) =>{
           
            const baseURL = process.env.API_URL || 'http://localhost:5000'
            //try {
                let formData = new FormData()
                formData.append('logo', value.logo)
                formData.append('chain', value.chain)
                formData.append('contract_Address', value.contract_Address)
                formData.append('name', value.name)
                formData.append('symbol', value.symbol)
                formData.append('presale', value.presale)
                formData.append('lunchDate', value.lunchDate)
                formData.append('description', value.description)
                formData.append('website', value.website)
                formData.append('telegram', value.telegram)
                formData.append('twitter', value.twitter)
                formData.append('facebook', value.facebook)
                formData.append('instagram', value.instagram)
               // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
               const url = `${baseURL}/submit-coin`
               const data = await axios.post(url, formData)
             },
       validate: value =>{
        let errors ={};
    if(!value.logo){
        errors.logo ='required'
    }
    if(!value.chain){
        errors.chain ='required'
    }
    if(!value.contract_Address){
        errors.contract_Address ='required'
    }
    if(!value.name){
        errors.name ='required'
    }
    if(!value.symbol){
        errors.symbol ='required'
    }
    if(!value.presale){
        errors.presale ='required'
    }
    if(!value.lunchDate){
        errors.lunchDate ='required'
    }
    if(!value.description){
        errors.description ='required'
    }
    if(!value.website){
        errors.website ='required'
    }
    return errors;
}
    })
    
    const chain = ['Binance Smart Chain (BSC)', 'Ethereum(ETH)','Avalanche', 'Polygon(MATIC)', 'Fantom', 'Cronos', 'Solana']
  return <>
        <Box sx={{justifyContent: 'center'}}>
        <form  onSubmit={formik.handleSubmit} method='POST' encType='multipart/form-data'>
             <Typography color='#ffffff' sx={{textAlign:'center'}}>Upload Token logo</Typography> 
            <Box sx={{display:'flex', justifyContent: 'space-evenly'}}>
                <Box >
                    <img src='#' alt='logo'/>
                    <Typography color='#ffffff'>Please upload your logo</Typography> 
                    <Typography color='#ffffff'>required</Typography> 
                </Box>
                
                <Box>
                <Typography color='#ffffff'>Optimal dimensions 512x512px, size up to 1MB</Typography> 
                <input type='file'  name='logo'  onChange={(event)=>{
                    formik.setFieldValue('logo', event.target.files[0])
                }}/>
                {/* <Button variant="contained" size='large' color='inherit' onClick={()=>{}}>upload</Button> */}
            
                </Box>

            </Box>  
            <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
            <Typography color='#ffffff' sx={{fontSize:'40', fontWeight: 700, textAlign: 'center'}}>Project information</Typography>
         
            <FormControl fullWidth style={{marginTop:15}}>
                    <Box sx={{ minWidth: 120, color: '#000', backgroundColor:'#fff'}}>
                        <InputLabel id="demo-simple-select-label" sx={{color:'#ffffff'}} >Select The Blockchain </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formik.values.chain}
                            label="Category"
                            name='chain'
                            
                           onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            
                        >
                           { chain.map(chain=>(
                                <MenuItem value={chain} key={chain} >{chain}</MenuItem>
                            ))}
                            
                            
                            
                        </Select>
                        </Box>
                        <Box sx={{display: 'flex', marginTop:2}}>
                            <Typography color='#ffffff'>Contract Address</Typography> 
                            {formik.touched.contract_Address && formik.errors.contract_Address ? <Typography color='red'>({formik.errors.contract_Address})</Typography>: null}
                        </Box>
                        <Box sx={{color: '#ffffff'}}>
                        {/* <TextField label='' variant='outlined' name='cost'  onChange=''  onBlur='' sx={{border:2, color:'#ffffff'}}  inputLabelProps={inputProps} fullWidth/> */}
                        <input type= 'text' name='contract_Address' className= 'form-input' placeholder='Contract Address' value={formik.values.contract_Address} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <Box sx={{width:'70%', marginRight:'2px'}}>
                            <Box sx={{display: 'flex', marginTop:2}}>
                                <Typography color='#ffffff'>Name</Typography> 
                                {formik.touched.name && formik.errors.name ? <Typography color='red'>({formik.errors.name})</Typography>: null}
                            </Box>
                            {/* <TextField label='' variant='outlined' fullWidth name='cost' sx={{border:2, color:'#ffffff'}} onChange=''  onBlur='' /> */}
                            <input type= 'text' name='name' className= 'form-input' placeholder='Token Name' value={formik.values.name} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                            </Box>
                            <Box sx={{width:'30%'}}>
                            <Box sx={{display: 'flex', marginTop:2}}>
                                <Typography color='#ffffff'>Symbol</Typography> 
                                {formik.touched.symbol && formik.errors.symbol ? <Typography color='red'>({formik.errors.symbol})</Typography>: null}
                            </Box>
                            {/* <TextField label='' variant='outlined' name='cost'  onChange=''  onBlur='' sx={{border:2, color:'#ffffff'}} /> */}
                            <input type= 'text' name='symbol' className= 'form-input' placeholder='Token Symbol' value={formik.values.symbol} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex' , justifyContent: 'space-evenly'}}>
                        <Box sx={{ marginTop:2}}>
                            <Typography color='#ffffff'>Is this a Presale Project?</Typography>
                            <Box sx={{display: 'flex'}}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="presale"
                                value={formik.values.presale}
                                onChange={formik.handleChange}
                            >
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" sx={{color:'#ffffff'}}/>
                                <FormControlLabel value="No" control={<Radio />} label="No" sx={{color:'#ffffff'}}/>
                            </RadioGroup>

                            </Box>
                        </Box>
                        <Box sx={{ marginTop:2, display: 'flex'}}>
                            <Typography color='#ffffff'>Lunch Date</Typography>
                            {formik.touched.lunchDate && formik.errors.lunchDate ? <Typography color='red'>({formik.errors.lunchDate})</Typography>: null}
                            <input type="datetime-local" id="birthdaytime" name="lunchDate" value={formik.values.lunchDate} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                        </Box>
                        </Box>
                        <Box sx={{ marginTop:2}}>
                            <Typography color='#ffffff'>Description</Typography>
                            {formik.touched.description && formik.errors.description ? <Typography color='red'>({formik.errors.description})</Typography>: null}
                            {/* <TextField  variant='outlined' multiline row={20}  fullWidth sx={{border:2, color:'#ffffff'}}/> */}
                            <input type= 'text' name='description' className= 'form-input' placeholder='Describe your token. what is the goal, plans and why is the project unique' value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        </Box>
                        <Box sx={{ marginTop:2, color:'#ffffff'}}>
                            <Typography color='#ffffff'>Website link</Typography>
                            {formik.touched.website && formik.errors.website ? <Typography color='red'>({formik.errors.website})</Typography>: null}
                            {/* <TextField  variant='outlined'  fullWidth sx={{border:2, color:'#ffffff'}}/> */}
                            <input type= 'text' name='website' className= 'form-input' placeholder='Website Link' value={formik.values.website} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
                        </Box>
                        <Box sx={{ marginTop:2}}>
                            <Typography color='#ffffff'>Telegram link</Typography>
                            {/* <TextField  variant='outlined'  fullWidth sx={{border:2, color:'#ffffff'}}/> */}
                            <input type= 'text' name='telegram' className= 'form-input' placeholder='Telegram Link' value={formik.values.telegram} onChange={formik.handleChange}/>
                        </Box>
                        <Box sx={{ marginTop:2}}>
                            <Typography color='#ffffff'>twitter link</Typography>
                            {/* <TextField  variant='outlined'  fullWidth sx={{border:2, color:'#ffffff'}}/> */}
                            <input type= 'text' name='twitter' className= 'form-input' placeholder='twitter Link' value={formik.values.twitter} onChange={formik.handleChange}/>
                        </Box>
                        <Box sx={{ marginTop:2}}>
                            <Typography color='#ffffff'>Facebook link</Typography>
                            {/* <TextField  variant='outlined'  fullWidth sx={{border:2, color:'#ffffff'}}/> */}
                            <input type= 'text' name='facebook' className= 'form-input' placeholder='Facebook Link' value={formik.values.facebook} onChange={formik.handleChange}/>
                        </Box>
                        <Box sx={{ marginTop:2}}>
                            <Typography color='#ffffff'>Instagram link</Typography>
                            {/* <TextField  variant='outlined'  fullWidth sx={{border:2, color:'#ffffff'}}/> */}
                            <input type= 'text' name='instagram' className= 'form-input' placeholder='Instagram Link' value={formik.values.instagram} onChange={formik.handleChange}/>
                        </Box>
                        <Divider color='#ffffff' sx={{marginBottom:5, marginTop:4}}/>
                        <Typography color='#ffffff'>Please upload Logo</Typography>
                        
                        <Stack spacing={2} sx={{ width: '100%' }}>
                            <Button variant="contained"  type='submit'>
                                Submit Token
                            </Button>
                        </Stack>
            </FormControl> 
            </form>
        </Box>
     
  </>;
};

export default SubmitToken;
