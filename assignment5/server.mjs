import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT
const app = express();

app.use(express.static('public'));

// Note: Don't add or change anything above this line.
/* Add your code here */

//middleway function
let requestCount = 0;
app.use('/random-person', (req, res, next) => {
  requestCount++;
  if (requestCount % 10 === 0) {
      console.log(`Total retrieve requests: ${requestCount}`);
  }
  next();
});

// Route handler for /random-person endpoint
app.get('/random-person', async (req, res) => {
    //get data 
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    //return data
    res.status(200).json(data);
});




// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});