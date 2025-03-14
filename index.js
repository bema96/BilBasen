import express from 'express';
import dotenv from 'dotenv';
import dbController from './Controller/dbController.js';
import carController from './Controller/carController.js';
import brandController from './Controller/brandController.js';
import categoryController from './Controller/categoryController.js';

import { setRelations } from './Model/Relations.js';

dotenv.config();
setRelations();


const app = express();
const PORT = 3000;

app.use(express.json());

// Root route
app.get('/', async (req, res) => {
    res.send('Heeey');
});

// Middleware
app.use(
    dbController,
    carController,
    brandController,
    categoryController 
)



//Start server
app.listen(PORT, async () => {
    console.log(`Server kører på http://localhost:${PORT}`);


});