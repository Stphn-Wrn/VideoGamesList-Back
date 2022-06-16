import { DataTypes } from 'sequelize';
import dataBase from '../Config/db.config.js';

const games = dataBase.define('Games', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  editor: {
    type: DataTypes.STRING,
    allowNull: true
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
})

export default games