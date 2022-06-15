import { DataTypes } from 'sequelize';
import dataBase from '../dbConfig/dbData.js';
const user = dataBase.define('Users', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  UserName: {
    type: DataTypes.CHAR(100),
    allowNull: true,
  },
  email: {
    type: DataTypes.CHAR(100),
    allowNull: true,
  },
  Name: {
    type: DataTypes.CHAR(100),
    allowNull: true
  },
  FirstName: {
    type: DataTypes.CHAR(100),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  },
  repeat_password: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

export default user