import dbConfig from "../Config/sequelizeConfig";   
import { DataTypes } from 'sequelize';

export  class categoryModel extends Model {}

categoryModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},

    {
    sequelize: dbConfig,
    modelName: 'category'
    }
);