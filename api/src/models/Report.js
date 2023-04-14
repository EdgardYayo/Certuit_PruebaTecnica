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
        },

        dateOfBack: {
            type: DataTypes.STRING,
        },

        wayOfTransportation: {
            type: DataTypes.STRING,
            allowNull: false
        },

        numberOfPassengers: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        numberOfVehicles: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        costOfGas: {
            type:DataTypes.INTEGER,
        },

        costOfBooth: {
            type:DataTypes.INTEGER,
        },

        costOfPilot: {
            type:DataTypes.INTEGER,
        },

        total: {
            type:DataTypes.INTEGER,
        }
    },
    {
        timestamps: false,
    });
}