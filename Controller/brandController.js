import express from 'express';
import brandModel from '../Model/brandModel.js';

const brandController = express.Router();

// Create a brand (POST)
brandController.post('/brands', async (req, res) => {
    const { title } = req.body;

    try {
        // Create a new brand
        const brand = await brandModel.create({
            title
        });

        res.status(201).json({
            message: 'Brand created successfully',
            brand
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred while creating brand',
            error: error.message
        });
    }
});


// Get all brands (GET)
brandController.get('/brands', async (req, res) => {
    try {
        const brands = await brandModel.findAll();
        res.json(brands);
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred while fetching brands',
            error: error.message
        });
    }
});


// Get a specific brand by id (GET)
brandController.get('/brands/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const brand = await brandModel.findOne({
            where: { id }
        });

        if (!brand) {
            return res.status(404).json({ message: 'Brand not found' });
        }

        res.json(brand);
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred while fetching brand',
            error: error.message
        });
    }
});


// Update a brand by id (PUT)
brandController.put('/brands/:id', async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    try {
        const brand = await brandModel.findOne({ where: { id } });

        if (!brand) {
            return res.status(404).json({ message: 'Brand not found' });
        }

        // Update brand
        await brand.update({ title });

        res.json({
            message: `Brand ID #${id} updated successfully`
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred while updating brand',
            error: error.message
        });
    }
});


// Delete a brand by id (DELETE)
brandController.delete('/brands/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const brand = await brandModel.findOne({ where: { id } });

        if (!brand) {
            return res.status(404).json({ message: 'Brand not found' });
        }

        // Delete brand
        await brand.destroy();

        res.json({
            message: `Brand ID #${id} deleted successfully`
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred while deleting brand',
            error: error.message
        });
    }
});


export default brandController;