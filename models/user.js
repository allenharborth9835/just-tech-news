const{Modal, DataTypes} = require('sequelize');
const sequlize = require('../config/cennection');

//create our User model
class User extends Model {}

//difine table columns and configuration
User.init(
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    username:{
      type:DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true
      }
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[4]
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
)