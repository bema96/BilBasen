import dbConfig from '../config/dbConfig.js';
import { DataTypes, Model } from 'sequelize';   
import bcrypt from 'bcrypt';

export default class userModel extends Model {}

userModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
        }
    }, 
    {
    sequelize: dbConfig,
    modelName: 'user',
    underscored: false
});


const createHash = async string => {
    const salt = await bcrypt.genSalt(10);
    const hashed_string = await bcrypt.hash(string, salt);
    return hashed_string;
}