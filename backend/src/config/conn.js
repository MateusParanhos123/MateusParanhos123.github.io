import { Sequelize } from "sequelize";

const conn = new Sequelize("portfolio", "root", "123456789", {
    host: "localhost",
    dialect: "mysql"
})

export default conn;