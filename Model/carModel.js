import dbConfig from "../Config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";
import brandModel from "./brandModel.js";

export class carModel extends Model {} 

carModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    category: {
        type: DataTypes.STRING,
        allowNull: false
    },

    brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: brandModel,
            key: 'id'
        }
    },

    model: {
        type: DataTypes.STRING,
        allowNull: false
    },

    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    fueltype: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
    sequelize: dbConfig,
    modelName: 'car',
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    }
);

export default carModel;