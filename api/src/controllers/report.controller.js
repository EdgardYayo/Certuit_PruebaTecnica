const { createReport, getReport } = require("../services/report.services")


const generateReport = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log(req.params);
        const { typeOfTravel,
            goRoute,
            backRoute,
            dateOfTravel,
            dateOfBack,
            wayOfTransportation,
            numberOfPassengers,
            numberOfVehicles } = req.body;

        const newReport = await createReport( typeOfTravel,
            goRoute,
            backRoute,
            dateOfTravel,
            dateOfBack,
            wayOfTransportation,
            numberOfPassengers,
            numberOfVehicles, 
            userId );

        return res.status(200).json(newReport);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const bringInTheReport = async (req, res) => {
    try {
        const { userId } = req.params;
        const userReport = await getReport(userId);
        return res.status(200).json(userReport);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    generateReport,
    bringInTheReport
}