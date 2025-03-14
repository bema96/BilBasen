import express from 'express';
import dbConfig from '../Config/sequelizeConfig.js';


const dbController = express.Router();

dbController.get('/test', async (req, res) => {
    try {
        await dbConfig.authenticate();
        res.send('Connection success');
    } catch (error) {
        res.status(500).send(`Connection error: ${error.message}`);
    }
});

dbController.get('/sync', async (req, res) => {
    try {
        await dbConfig.sync({ force: false });
        res.send('Database is synced');
    } catch (error) {
        res.status(500).send(`Sync error: ${error.message}`);
    }
});


export default dbController;