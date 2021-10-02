const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true
        },
        createdAt: DataTypes.DATE,
            allowNull: false,
            
    }
)