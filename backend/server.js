const express = require('express');
const cors = require('cors');
const { scrape_meesho_prices } = require('./scraper');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/scrape-prices', async (req, res) => {
    try {
        const { productName } = req.body;
        console.log(`Scraping prices for: ${productName}`);
        const prices = await scrape_meesho_prices(productName);
        res.json(prices);
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Playwright scraper ready');
});