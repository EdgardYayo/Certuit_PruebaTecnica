const { Report, User } = require("../db");


const createReport = async (typeOfTravel, goRoute, backRoute, dateOfTravel, dateOfBack, wayOfTransportation, numberOfPassengers, numberOfVehicles, userId) => {
    try {
        if(!typeOfTravel || !goRoute || !dateOfTravel || !wayOfTransportation || !numberOfPassengers){
            throw new Error("These information are required to travel with us")
        }

        const gasPerTravel = gasPrice(typeOfTravel, goRoute, wayOfTransportation);
        const tollBoothsPerTravel = tollBoothsPrice(typeOfTravel, goRoute, wayOfTransportation);
        const pilotPricePerTravel = pilotPrice(numberOfVehicles);
        
        const newReport = await Report.create({
            typeOfTravel,
            goRoute,
            backRoute,
            dateOfTravel,
            dateOfBack,
            wayOfTransportation,
            numberOfPassengers,
            numberOfVehicles
        })

        const user = await User.findById(userId);
        newReport.total = (gasPerTravel * numberOfVehicles) + (tollBoothsPerTravel * numberOfVehicles) + pilotPricePerTravel;

        user.addReport(newReport);
        return newReport
    } catch (error) {
        throw new Error(error);
    }
}


const getReport = async (userId) => {
    try {
        const userReport = await User.findById(userId, {
            include:{
                model: Report,
                attributes: [ 
                "typeOfTravel",
                "goRoute",
                "backRoute",
                "dateOfTravel",
                "dateOfBack",
                "wayOfTransportation",
                "numberOfPassengers",
                "numberOfVehicles",
                "total" ],
                throught:{
                    attributes: []
                }
            }
        });

        return userReport;
    } catch (error) {
        throw new Error(error)
    }
}


const gasPrice = (typeOfTravel, goRoute, wayOfTransportation) => {
    if(typeOfTravel === "Una direccion"){
        if(goRoute === "Mexicali, Tecate-Tijuana, Rosarito, Ensenada"){
            if(wayOfTransportation === "Automovil"){
                let literPrice = 21.32
                let distance = 257.56
                return (distance / 3) * literPrice;
            } else {
                let literPrice = 22.73
                let distance = 257.56
                return (distance / 3) * literPrice;
            }

        } else if(goRoute === "Mexicali, Tecate"){
            if(wayOfTransportation === "Automovil"){
                let literPrice = 21.32
                let distance = 129.750
                return (distance / 3) * literPrice;

            } else {
                let literPrice = 22.73
                let distance = 129.750
                return (distance / 3) * literPrice;

            }

        } else if(goRoute === "Mexicali, Tecate, Ensenada"){
            if(wayOfTransportation === "Automovil"){
                let literPrice = 21.32
                let distance = 269.69
                return (distance / 3) * literPrice;

            } else {
                let literPrice = 22.73
                let distance = 269.69
                return (distance / 3) * literPrice;

            }
            
        } else if(goRoute === "Mexicali, Tijuana"){
            if(wayOfTransportation === "Automovil"){
                let literPrice = 21.32
                let distance = 171.56
                return (distance / 3) * literPrice;

            } else {
                let literPrice = 22.73
                let distance = 171.56
                return (distance / 3) * literPrice;

            }
        }
    } else {
        if(goRoute === "Mexicali, Tecate-Tijuana, Rosarito, Ensenada"){
            if(wayOfTransportation === "Automovil"){
                let literPrice = 21.32
                let distance = 257.56
                return ((distance / 3) * literPrice) * 2;
            } else {
                let literPrice = 22.73
                let distance = 257.56
                return ((distance / 3) * literPrice) * 2;            
            }

        } else if(goRoute === "Mexicali, Tecate"){
            if(wayOfTransportation === "Automovil"){
                let literPrice = 21.32
                let distance = 129.750
                return ((distance / 3) * literPrice) * 2;

            } else {
                let literPrice = 22.73
                let distance = 129.750
                return ((distance / 3) * literPrice) * 2;

            }

        } else if(goRoute === "Mexicali, Tecate, Ensenada"){
            if(wayOfTransportation === "Automovil"){
                let literPrice = 21.32
                let distance = 269.69
                return ((distance / 3) * literPrice) * 2;

            } else {
                let literPrice = 22.73
                let distance = 269.69
                return ((distance / 3) * literPrice) * 2;

            }
            
        } else if(goRoute === "Mexicali, Tijuana"){
            if(wayOfTransportation === "Automovil"){
                let literPrice = 21.32
                let distance = 171.56
                return ((distance / 3) * literPrice) * 2;

            } else {
                let literPrice = 22.73
                let distance = 171.56
                return ((distance / 3) * literPrice) * 2;

            }
        }
    }

}

const tollBoothsPrice = (typeOfTravel, goRoute, wayOfTransportation) => {
    if(typeOfTravel === "Una direccion"){
        if(goRoute === "Mexicali, Tecate-Tijuana, Rosarito, Ensenada"){
            if(wayOfTransportation === "Automovil"){
                return 365;
            } else {
                return 694;
            }

        } else if(goRoute === "Mexicali, Tecate"){
            if(wayOfTransportation === "Automovil"){
                return 124;
            } else {
               return 284;
            }

        } else if(goRoute === "Mexicali, Tecate, Ensenada"){
            if(wayOfTransportation === "Automovil"){
                return 322;
            } else {
               return 603;
            }
            
        } else if(goRoute === "Mexicali, Tijuana"){
            if(wayOfTransportation === "Automovil"){
                return 275;
            } else {
                return 508;
            }
        }
    } else {
        if(goRoute === "Mexicali, Tecate-Tijuana, Rosarito, Ensenada"){
            if(wayOfTransportation === "Automovil"){
                return (365) * 2;
            } else {
                return (694) * 2;
            }

        } else if(goRoute === "Mexicali, Tecate"){
            if(wayOfTransportation === "Automovil"){
                return (124) * 2;
            } else {
               return (284) * 2;
            }

        } else if(goRoute === "Mexicali, Tecate, Ensenada"){
            if(wayOfTransportation === "Automovil"){
                return (322) * 2;
            } else {
               return (603) * 2;
            }
            
        } else if(goRoute === "Mexicali, Tijuana"){
            if(wayOfTransportation === "Automovil"){
                return (275) * 2;
            } else {
                return (508) * 2;
            }
        }
    }
}


const pilotPrice = (numberOfVehicles) => {
    let pilotIncomePerDay = 1244.64;
    if(numberOfVehicles > 1){
        return pilotIncomePerDay * numberOfVehicles;
    } else {
        return pilotIncomePerDay; 
    }
}


module.exports = {
    createReport,
    getReport
}