const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));



app.get('/api/coins', async (req, res) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': process.env.API_KEY,
                'Accept': 'application/json'
            },

        });

        const btc_price = response.data.data[0].quote.USD.price;
        const eth_price = response.data.data[1].quote.USD.price;
        res.json({
            bitcoin: btc_price,
            eth: eth_price,

        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching coin data' });
    }
});

app.listen(PORT, () => {
    console.log(`Crypto Tracker listening on port ${PORT}`);
});