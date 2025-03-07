import express from 'express';
import initDB from './Database/initDB.js';

const app = express();
const PORT = 3000;

//Initialiser databasen
initDB();


//Start server
app.listen(PORT, () => {
    console.log('Server is running');
    
});





//Forside
app.get('/', (req, res) => {
    res.send('Knock, knock, Neo');
});

//Biler til salg
app.get('/cars', (req, res) => {
    res.send('Biler til salg');
});

//Hvem er vi?
app.get('/about', (req, res) => {
    res.send('Hvem er vi');
});

//Find os
app.get('/contact', (req, res) => {
    res.send('Find os');
});

//Kontakt os
app.get('/contact', (req, res) => {
    res.send('Kontakt os');
});


