const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()


const app = express()
app.use(cors())

app.get('/', (req,res) =>{
    res.json('hi')
})
app.get('/convert', (req,res) =>{
    const toCurrency = req.query.to_currency
    const fromCurrency = req.query.from_currency

    console.log('toCurrency', toCurrency)
    console.log('fromCurrency', fromCurrency)

    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {from_currency:'BTC', function: 'CURRENCY_EXCHANGE_RATE', to_currency: 'USD'},
        headers: {
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
        }
    };
    
        axios.request(options).then( (response) => {
            res.json(response.data);
        }).catch( (error) =>{
            console.error(error);
        });
})
app.get('/news', (req,res) =>{
    const options = {
        method: 'GET',
        url: 'https://crypto-news-live3.p.rapidapi.com/news',
        headers: {
            'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
        }
    };

        axios.request(options).then((response)=>{
            res.json(response.data);
        
        }).catch( (error) =>{
            console.error(error);
        });
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT} `)
})