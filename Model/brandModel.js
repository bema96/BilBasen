import dbConfig from "../Config/sequelizeConfig.js";
import { DataTypes, Model } from "sequelize";


export class brandModel extends Model {} 

brandModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },


},
    {
    sequelize: dbConfig,
    modelName: 'brand',
    underscored: true,
    freezeTableName: true,
    timestamps: true,
    }
);

export default brandModel;