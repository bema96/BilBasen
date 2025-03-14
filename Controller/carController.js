import express from 'express'
import carModel from '../Model/carModel.js'

const carController = express.Router()


// Route to create a car (CREATE)
carController.post('/cars', async (req, res) => {
    try {
        const { category, brand_id, model, year, price, fueltype } = req.body
        const newCar = await carModel.create({
            category,
            brand_id,
            model,
            year,
            price,
            fueltype
        })
        res.status(201).json({
            message: 'New car created successfully!',
            car: newCar
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred while creating the car',
            error: error.message
        })
    }
})


// Route to list all cars (READ)
carController.get('/cars', async (req, res) => {
    try {
        const cars = await carModel.findAll() 
        if (!cars || cars.length === 0) {
            return res.json({ message: 'No cars found' })
        }
        res.json(cars) 
    } catch (error) {
        console.error(`Error fetching cars: ${error}`)
        res.status(500).json({
            message: 'Error occurred while fetching cars',
            error: error.message
        })
    }
})


// Route to get car details by ID (READ)
carController.get('/cars/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params
        const car = await carModel.findOne({
            where: { id }, 
        })
        if (!car) {
            return res.status(404).json({ message: 'Car not found' })
        }
        res.json(car)
    } catch (error) {
        console.error(`Error fetching car with ID ${req.params.id}: ${error}`)
        res.status(500).json({
            message: 'Error occurred while fetching car details',
            error: error.message
        })
    }
})


// Route to update car details by ID (UPDATE)
carController.put('/cars/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params
        const updatedCar = await carModel.update(req.body, {
            where: { id } 
        })
        
        if (updatedCar[0] === 0) { 
            return res.status(404).json({ message: 'Car not found or no changes made' })
        }

        res.json({ message: `Car with ID ${id} was updated successfully` })
    } catch (error) {
        console.error(`Error updating car with ID ${id}: ${error}`)
        res.status(500).json({
            message: 'Error occurred while updating car',
            error: error.message
        })
    }
})


// Route to delete a car by ID (DELETE)
carController.delete('/cars/:id([0-9]+)', async (req, res) => {
    try {
        const { id } = req.params
        const deletedCar = await carModel.destroy({
            where: { id } 
        })
        
        if (deletedCar === 0) { 
            return res.status(404).json({ message: 'Car not found' })
        }

        res.json({ message: `Car with ID ${id} was deleted successfully` })
    } catch (error) {
        console.error(`Error deleting car with ID ${id}: ${error}`)
        res.status(500).json({
            message: 'Error occurred while deleting car',
            error: error.message
        })
    }
})


export default carController