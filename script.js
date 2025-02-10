let btc = document.getElementById('bitcoin');
let eth = document.getElementById('ethereum');
let doge = document.getElementById('dogecoin');

fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        btc.innerHTML = data.bitcoin.usd;
        eth.innerHTML = data.ethereum.usd;
        doge.innerHTML = data.dogecoin.usd;
    })
    .catch(error => console.error('Error fetching data:', error));