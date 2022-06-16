import { DataTypes } from 'sequelize';
import dataBase from '../Config/db.config.js';
const User = dataBase.define('Users', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: DataTypes.CHAR(100),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
}
})

export default User;