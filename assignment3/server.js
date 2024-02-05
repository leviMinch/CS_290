'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;

const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.

// Add your code here
app.get('/stocks', (req, res) => {
    res.json(stocks);
});

// code for stock-order
app.post('/stock-order', (req, res) => {
    let quantity = req.body.quantity;
    let theStock = findStockBySymbol(req.body.symbol);
    //send message
    res.send(`You placed an order to buy ${quantity} stocks of ${theStock.company}. 
            The price of one stock is ${theStock.price} and the total price for 
            this order is ${theStock.price * quantity}`);
});

//function to find which stock is tied to the symbol
function findStockBySymbol(passedSymbol){
    for(let stock of stocks){
        if (stock.symbol === passedSymbol){
            return stock;
        }
    }
}

function findStockByPrice(val){
    //if the stock is high 
    if(val){
        return stocks.at(3);
    }
    //if the stock is low
    else{
        return stocks.at(4);
    }
}
// code for stock-search
app.post('/stock-search', (req, res)=> {
    let storage = findStockByPrice(req.body.low === undefined)
    res.send(`{"company":"${storage.company}","symbol":"
    ${storage.symbol}", "price": ${storage.price}}`);
});


// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});