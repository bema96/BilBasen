import dbConfig from '../Config/sequelizeConfig.js';   
import { DataTypes, Model } from 'sequelize';

class categoryModel extends Model {}

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
    modelName: 'Category',
    tableName: 'categories',
    timestamps: false
    }
);

//Opret Kategori table: 
// categoryModel.sync()
//     .then(() => {
//         console.log('Category table is created!');
//     })
//     .catch(err => {
//         console.error('Error creating category table: ', err);
//     });

export default categoryModel;