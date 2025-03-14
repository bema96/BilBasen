import carModel from "./carModel.js";
import brandModel from "./brandModel.js";
import categoryModel from "./categoryModel.js";

export const setRelations = () => {
    // En Car tilhører en Brand
    carModel.belongsTo(brandModel, {
        foreignKey: 'brand_id',
    });

    // Et Brand kan have mange Cars
    brandModel.hasMany(carModel, {
        onDelete: 'CASCADE',  // Hvis Brand slettes, slettes de tilknyttede Cars
    });

    // En Car tilhører en Category
    carModel.belongsTo(categoryModel, {
        foreignKey: 'category_id',  // Fremmednøgle i Car, som peger på Category
        as: 'categoryAssociation'  // Brug 'as' for at give relationen et unikt navn
    });

    // En Category kan have mange Cars
    categoryModel.hasMany(carModel, {
        onDelete: 'CASCADE',   // Hvis Category slettes, slettes de tilknyttede Cars
        as: 'categoryCars'    // Brug 'as' for at give relationen et unikt navn
    });
};
