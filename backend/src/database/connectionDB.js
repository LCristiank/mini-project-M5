import { Sequelize } from "sequelize";

const sequelize = new Sequelize('db_ongs', 'root', '258046', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306

});

const testConneciton = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error){
        console.log("Conexão mal sucessida!"  + error);
    }
}

export { sequelize, testConneciton };