import carModel from "./carModel";
import brandModel from "./brandModel";

export const setRelations = () => {
    carModel.belongsTo(brandModel, {
        foreignKey: 'brand_id',
    })
    brandModel.hasMany(carModel, {
        onDelete: 'CASCADE',
    })
}