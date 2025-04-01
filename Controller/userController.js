
import carModel from "../Model/carModel.js";

export const createCar = async (req, res) => {
    try {
        const { category, brand_id, model, year, price, fueltype } = req.body;
        const newCar = await carModel.create({
            category,
            brand_id,
            model,
            year,
            price,
            fueltype
        });
        res.status(201).json({
            message: 'new car created',
            car: newCar
        });
    } catch (error) {
        res.status(500).json({
            message: 'error occured',
            error
        });
    }



}