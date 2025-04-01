import express from 'express';
import categoryModel from '../Model/categoryModel.js';

const categoryController = express.Router();


// Route to create a new category (CREATE)
categoryController.post('/categories', async (req, res) => {
    try {
        const { name } = req.body;

        // Opretter en ny kategori
        const newCategory = await categoryModel.create({
            name
        });

        res.status(201).json({
            message: 'Category created successfully!',
            category: newCategory
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred while creating the category',
            error: error.message
        });
    }
});


// Route to get all categories (READ)
categoryController.get('/categories', async (req, res) => {
    try {
        const categories = await categoryModel.findAll(); // Henter alle kategorier
        res.status(200).json({
            message: 'Categories retrieved successfully!',
            categories
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred while retrieving categories',
            error: error.message
        });
    }
});


// Route to update a category (UPDATE)
categoryController.put('/categories/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const category = await categoryModel.findByPk(id);

        if (!category) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        // Opdaterer kategorien
        category.name = name;
        await category.save();

        res.status(200).json({
            message: 'Category updated successfully!',
            category
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred while updating the category',
            error: error.message
        });
    }
});

// Route to delete a category (DELETE)
categoryController.delete('/categories/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const category = await categoryModel.findByPk(id);

        if (!category) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        // Sletter kategorien
        await category.destroy();

        res.status(200).json({
            message: 'Category deleted successfully!'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred while deleting the category',
            error: error.message
        });
    }
});

export default categoryController;
