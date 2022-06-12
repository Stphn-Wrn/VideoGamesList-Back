import { Sequelize } from 'sequelize';
import 'dotenv/config'

export default new Sequelize(process.env.DBNAME, process.env.DB_USER_NAME, process.env.DB_PASSWORD, { dialect: 'mysql', host: process.env.DB_HOST})