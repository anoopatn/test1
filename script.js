// Function to fetch live Satoshi price from the CoinDesk API
async function fetchSatoshiPrice() {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
        const data = await response.json();
        
        // Get Bitcoin price in USD
        const bitcoinPrice = data.bpi.USD.rate_float;
        
        // Calculate Satoshi price (1 Bitcoin = 100,000,000 Satoshis)
        const satoshiPrice = bitcoinPrice / 100000000;
        
        // Update the HTML to display the Satoshi price
        document.getElementById('usdPrice').textContent = satoshiPrice.toFixed(8);
    } catch (error) {
        console.error('Error fetching Satoshi price:', error);
        document.getElementById('usdPrice').textContent = 'Error';
    }
}

// Fetch the Satoshi price on page load
fetchSatoshiPrice();

// Update the price every 60 seconds
setInterval(fetchSatoshiPrice, 60000);
