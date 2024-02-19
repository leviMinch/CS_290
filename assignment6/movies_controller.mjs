import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as movies from './movies_model.mjs';

const app = express();

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});