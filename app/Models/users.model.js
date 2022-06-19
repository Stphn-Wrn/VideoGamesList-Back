import { DataTypes } from 'sequelize';
import dataBase from '../Config/db.config.js';
const User = dataBase.define('Users', {
  email: {
    type: DataTypes.CHAR(100),
    allowNull: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
}
})

export default User;