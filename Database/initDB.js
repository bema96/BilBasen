import dbConfig from "../Config/sequelizeConfig.js";
import carModel from "../Model/carModel.js";
import brandModel from "../Model/brandModel.js";


const initDB = async () => {
    try {
        await dbConfig.authenticate();
        console.log('success');

        await dbConfig.sync({ force: false });
        console.log('Database is synced');
        
    }
    catch (error) {
        console.error('error occured:', error);
    }
}

export default initDB;