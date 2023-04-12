const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('report', {        
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            primaryKey: true
        },

        typeOfTravel: {
            type: DataTypes.ENUM("Una direccion", "Viaje Redondo"),
            allowNull: false,
            unique: true,
        },

        goRoute: {
            type: DataTypes.ENUM(
                "Mexicali, Tecate-Tijuana, Rosarito, Ensenada", 
                "Mexicali, Tecate",
                "Mexicali, Tecate, Ensenada",
                "Mexicali, Tijuana"),
            allowNull: false,
        },

        backRoute: {
            type: DataTypes.ENUM(
                "Mexicali, Tecate-Tijuana, Rosarito, Ensenada", 
                "Mexicali, Tecate",
                "Mexicali, Tecate, Ensenada",
                "Mexicali, Tijuana"),
        },

        dateOfTravel: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        dateOfBack: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        timestamps: false,
    });
}